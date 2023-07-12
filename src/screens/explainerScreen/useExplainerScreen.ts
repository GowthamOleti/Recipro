import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import {AppSetting, ExplainerScreenType} from '../../common/constants';
import {SettingsContext} from '../../common/settingsContext';
import {useAppTheme} from '../../common/useAppTheme';
import {Screen} from '../../navigation/navigationTypes';
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

  useEffect(() => {
    isFirstTime().then(firstTime => setFirstTime(firstTime));
  }, []);

  const onExplainerButtonPress = async () => {
    if (screenType === ExplainerScreenType.ABOUT) {
      navigation.navigate(Screen.ASK_API_KEY);
    } else if (screenType === ExplainerScreenType.ADD_PAYMENT) {
      const isWorking = await isKeyWorking(key);
      if (isWorking) {
        await AsyncStorage.setItem(AppSetting.IS_FIRST_TIME, 'true');
        await saveOpenAIApiKey(key);
        navigation.reset({
          index: 0,
          routes: [{name: Screen.HOME}],
        });
      } else {
      }
    }
  };

  return {
    onExplainerButtonPress,
    firstTime,
    theme,
    appSettings,
  };
};
