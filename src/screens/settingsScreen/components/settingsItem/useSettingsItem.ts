import {useNavigation} from '@react-navigation/native';
import {useContext, useState} from 'react';
import {AppSetting, ExplainerScreenType} from '../../../../common/constants';
import {SettingsContext} from '../../../../common/settingsContext';
import {Screen, StackNavigation} from '../../../../navigation/navigationTypes';
import {saveSetting} from '../../../../util/settingsHelpers';

export const useSettingsItem = ({setting}: {setting: AppSetting}) => {
  const {appSettings, setAppSettings} = useContext(SettingsContext);

  const [isEnabled, setIsEnabled] = useState(appSettings.get(setting) ?? false);

  const toggleSwitch = () => {
    onSettingsItemPress();
    setIsEnabled(previousState => !previousState);
  };

  const navigation = useNavigation<StackNavigation>();

  const onSettingsItemPress = () => {
    switch (setting) {
      // Toggle Settings
      case AppSetting.QUICK_SUMMARIZE:
        setAppSettings(appSettings.set(AppSetting.QUICK_SUMMARIZE, isEnabled));
        saveSetting({key: setting, value: String(isEnabled)});
        break;
      case AppSetting.SHOW_TWEET_MAIL:
        setAppSettings(appSettings.set(AppSetting.SHOW_TWEET_MAIL, isEnabled));
        saveSetting({key: setting, value: String(isEnabled)});
        break;
      case AppSetting.IS_DARK_THEME:
        setAppSettings(appSettings.set(AppSetting.IS_DARK_THEME, isEnabled));
        saveSetting({key: setting, value: String(isEnabled)});
        break;

      // Non-Toggle Settings
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
