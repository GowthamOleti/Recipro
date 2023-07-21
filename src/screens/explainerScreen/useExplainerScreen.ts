import AsyncStorage from '@react-native-async-storage/async-storage';
import Clipboard from '@react-native-community/clipboard';
import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import {AppSetting, ExplainerScreenType} from '../../common/constants';
import {SettingsContext} from '../../common/settingsContext';
import {useAppTheme} from '../../common/useAppTheme';
import {Screen} from '../../navigation/navigationTypes';
import {analyticsTags, trackAction} from '../../util/analytics';
import {isKeyWorking} from '../../util/fetchGPTResult';
import {saveOpenAIApiKey} from '../../util/handleApiKey';
import {isFirstTime} from '../../util/handleSettings';

interface Props {
  screenType: ExplainerScreenType;
  key: string;
}

export const useExplainerScreen = ({key, screenType}: Props) => {
  const theme = useAppTheme();
  const navigation = useNavigation<any>();
  const {appSettings} = useContext(SettingsContext);

  const [firstTime, setFirstTime] = useState<boolean>();
  const [isLoading, setIsLoading] = useState(false);
  const [keyError, setKeyError] = useState(false);

  useEffect(() => {
    isFirstTime().then(firstTime => setFirstTime(firstTime));
  }, []);

  const onExplainerButtonPress = async () => {
    if (screenType === ExplainerScreenType.ABOUT) {
      trackAction(analyticsTags.onboarding.aboutScreenNext);
      navigation.navigate(Screen.ASK_API_KEY);
    } else if (screenType === ExplainerScreenType.ADD_PAYMENT) {
      trackAction(analyticsTags.onboarding.done);
      setIsLoading(true);
      const isWorking = await isKeyWorking(key);
      if (isWorking) {
        trackAction(analyticsTags.onboarding.apiKeyTestSuccess);
        await AsyncStorage.setItem(AppSetting.IS_FIRST_TIME, 'true');
        await saveOpenAIApiKey(key);
        Clipboard.setString('');
        navigation.reset({
          index: 0,
          routes: [{name: Screen.HOME}],
        });
      } else {
        trackAction(analyticsTags.onboarding.apiKeyTestFailure);
        setKeyError(true);
      }
      setIsLoading(false);
    }
  };

  return {
    onExplainerButtonPress,
    firstTime,
    theme,
    appSettings,
    isLoading,
    keyError,
    setKeyError,
  };
};
