import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import {Linking} from 'react-native';
import {AppSetting, ExplainerScreenType} from '../../../../common/constants';
import {SettingsContext} from '../../../../common/settingsContext';
import {Screen} from '../../../../navigation/navigationTypes';
import {removeApiKey} from '../../../../util/handleApiKey';
import {getSetting, saveSetting} from '../../../../util/handleSettings';
import {SettingsItemProps} from './settingsItem';

export const useSettingsItem = ({item}: SettingsItemProps) => {
  const {appSettings, setAppSettings} = useContext(SettingsContext);

  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    if (item.hasToggle) {
      getSetting(item.id).then(result => {
        setIsEnabled(result);
      });
    }
  }, [item]);

  // Handling Toggle Settings
  const toggleSwitch = () => {
    switch (item.id) {
      case AppSetting.QUICK_SUMMARIZE:
        setAppSettings({...appSettings, quickSummarize: !isEnabled});
        break;
      case AppSetting.SHOW_TWEET_MAIL:
        setAppSettings({...appSettings, showTweetMail: !isEnabled});
        break;
      case AppSetting.IS_DARK_MODE:
        setAppSettings({...appSettings, isDarkMode: !isEnabled});
        break;
    }
    saveSetting({key: item.id, value: !isEnabled});
    setIsEnabled(!isEnabled);
  };

  const navigation = useNavigation<any>();

  // Handling Non-Toggle Settings
  const onSettingsItemPress = () => {
    switch (item.id) {
      case AppSetting.RESET_API_KEY:
        removeApiKey().finally(() => {
          navigation.replace(Screen.ASK_API_KEY, {reset: true});
        });
        break;
      case AppSetting.HOW_TO_USE:
        navigation.navigate(Screen.EXPLAINER, {
          type: ExplainerScreenType.GENERAL,
        });
        break;
      case AppSetting.FEEDBACK:
        Linking.openURL('mailto:teja2495@gmail.com');
        break;
    }
  };

  return {
    isEnabled,
    onSettingsItemPress,
    toggleSwitch,
  };
};
