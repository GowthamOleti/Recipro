import AsyncStorage from '@react-native-async-storage/async-storage';
import Clipboard from '@react-native-community/clipboard';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {AppSetting, ExplainerScreenType} from '../../common/constants';
import {useAppTheme} from '../../common/useAppTheme';
import {Screen} from '../../navigation/navigationTypes';
import {
  analyticsTags,
  fetchExplainerScreenTag,
  trackAction,
  trackState,
} from '../../util/analytics';
import {isKeyWorking} from '../../util/fetchGPTResult';
import {saveOpenAIApiKey} from '../../util/handleApiKey';
import {isFirstTime} from '../../util/handleSettings';
import {logError} from '../../util/helpers';
import {getStyles} from './explainerScreen.styles';

interface Props {
  screenType: ExplainerScreenType;
  key: string;
}

export const useExplainerScreen = ({key, screenType}: Props) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const navigation = useNavigation<any>();

  const [firstTime, setFirstTime] = useState<boolean>();
  const [isLoading, setIsLoading] = useState(false);
  const [keyError, setKeyError] = useState(false);

  useEffect(() => {
    trackState(fetchExplainerScreenTag[screenType]);
  }, [screenType]);

  useEffect(() => {
    isFirstTime()
      .then(result => setFirstTime(result))
      .catch(error => {
        logError(error);
      });
  }, []);

  const onExplainerButtonPress = async () => {
    if (screenType === ExplainerScreenType.About) {
      trackAction(analyticsTags.onboarding.aboutScreenNext);
      navigation.navigate(Screen.AskApiKey);
    } else if (screenType === ExplainerScreenType.AddPayment) {
      trackAction(analyticsTags.onboarding.done);
      setIsLoading(true);
      const isWorking = await isKeyWorking(key);
      if (isWorking) {
        trackAction(analyticsTags.onboarding.apiKeyTestSuccess);
        try {
          await AsyncStorage.setItem(AppSetting.IsFirstTime, 'true');
          await saveOpenAIApiKey(key);
          Clipboard.setString('');
          navigation.reset({
            index: 0,
            routes: [{name: Screen.Home}],
          });
        } catch (error) {
          logError(error);
        }
      } else {
        trackAction(analyticsTags.onboarding.apiKeyTestFailure);
        setKeyError(true);
      }
      setIsLoading(false);
    }
  };

  return {
    firstTime,
    isLoading,
    keyError,
    onExplainerButtonPress,
    setKeyError,
    styles,
    theme,
  };
};
