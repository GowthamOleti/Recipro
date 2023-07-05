import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import {AppSetting, ExplainerScreenType} from '../../../../common/constants';
import {SettingsContext} from '../../../../common/settingsContext';
import {Screen, StackNavigation} from '../../../../navigation/navigationTypes';
import {getSetting, saveSetting} from '../../../../util/settingsHelpers';

export const useSettingsItem = ({setting}: {setting: AppSetting}) => {
  const {appSettings, setAppSettings} = useContext(SettingsContext);

  // TODO: Avoid updating state for non-toggle settings
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    getSetting(setting).then(result => {
      setIsEnabled(result);
    });
  }, [setting]);

  // Handling Toggle Settings
  const toggleSwitch = () => {
    switch (setting) {
      case AppSetting.QUICK_SUMMARIZE:
        setAppSettings({...appSettings, quickSummarize: !isEnabled});
        break;
      case AppSetting.SHOW_TWEET_MAIL:
        setAppSettings({...appSettings, showTweetMail: !isEnabled});
        break;
      case AppSetting.IS_DARK_THEME:
        setAppSettings({...appSettings, isDarkMode: !isEnabled});
        break;
    }
    saveSetting({key: setting, value: !isEnabled});
    setIsEnabled(!isEnabled);
  };

  const navigation = useNavigation<StackNavigation>();

  // Handling Non-Toggle Settings
  const onSettingsItemPress = () => {
    switch (setting) {
      case AppSetting.RESET_API_KEY:
        navigation.navigate(Screen.ASK_API_KEY, {reset: true});
        break;
      case AppSetting.HOW_TO_USE:
        navigation.navigate(Screen.EXPLAINER, {
          type: ExplainerScreenType.GENERAL,
        });
        break;
      case AppSetting.FEEDBACK:
        // TODO
        break;
    }
  };

  return {
    isEnabled,
    onSettingsItemPress,
    toggleSwitch,
  };
};
