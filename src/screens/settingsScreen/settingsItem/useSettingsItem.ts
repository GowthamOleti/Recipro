import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import {AppSetting, ExplainerScreenType} from '../../../common/constants';
import {SettingsContext} from '../../../common/settingsContext';
import {useAppTheme} from '../../../common/useAppTheme';
import {Screen} from '../../../navigation/navigationTypes';
import {analyticsTags, trackAction} from '../../../util/analytics';
import {getOpenAIApiKey, removeApiKey} from '../../../util/handleApiKey';
import {getSetting, saveSetting} from '../../../util/handleSettings';
import {logError, onFeedbackPress} from '../../../util/helpers';
import {SettingsItemProps} from './settingsItem';
import {getStyles} from './settingsItem.styles';

export const useSettingsItem = ({settingsItem}: SettingsItemProps) => {
  const {appSettings, setAppSettings} = useContext(SettingsContext);

  const theme = useAppTheme();
  const styles = getStyles(theme);

  const [isEnabled, setIsEnabled] = useState(false);
  const [showResetAlert, setShowResetAlert] = useState(false);
  const [truncatedApiKey, setTruncatedApiKey] = useState<string>();

  useEffect(() => {
    if (settingsItem.hasToggle) {
      getSetting(settingsItem.id)
        .then(result => {
          setIsEnabled(result);
        })
        .catch(error => {
          logError(error);
        });
    }
    if (settingsItem.id === AppSetting.ResetKey) {
      getOpenAIApiKey()
        .then(key => {
          setTruncatedApiKey(key?.slice(-4));
        })
        .catch(error => {
          logError(error);
        });
    }
  }, [settingsItem]);

  const resetKey = () => {
    trackAction(analyticsTags.settingsScreen.resetKeyModalYes);
    removeApiKey().finally(() => {
      navigation.reset({
        index: 0,
        routes: [{name: Screen.AskApiKey, params: {reset: true}}],
      });
    });
  };

  // Handling Toggle Settings
  const toggleSwitch = () => {
    switch (settingsItem.id) {
      case AppSetting.QuickSummarize:
        trackAction(
          !isEnabled
            ? analyticsTags.settingsScreen.autoSummarizeEnable
            : analyticsTags.settingsScreen.autoSummarizeDisable,
        );
        setAppSettings({...appSettings, quickSummarize: !isEnabled});
        break;
      case AppSetting.ShowTweetEmail:
        trackAction(
          !isEnabled
            ? analyticsTags.settingsScreen.showTweetEmail
            : analyticsTags.settingsScreen.hideTweetMail,
        );
        setAppSettings({...appSettings, showTweetEmail: !isEnabled});
        break;
      case AppSetting.IsDarkMode:
        trackAction(
          !isEnabled
            ? analyticsTags.settingsScreen.darkModeEnable
            : analyticsTags.settingsScreen.darkModeDisable,
        );
        setAppSettings({...appSettings, isDarkMode: !isEnabled});
        break;
    }
    saveSetting({key: settingsItem.id, value: !isEnabled});
    setIsEnabled(!isEnabled);
  };

  const navigation = useNavigation<any>();

  // Handling Non-Toggle Settings
  const onSettingsItemPress = () => {
    switch (settingsItem.id) {
      case AppSetting.ResetKey:
        trackAction(analyticsTags.settingsScreen.resetKey);
        setShowResetAlert(true);
        break;
      case AppSetting.KeyInstructions:
        trackAction(analyticsTags.settingsScreen.keySetupInstructions);
        navigation.navigate(Screen.Explainer, {
          type: ExplainerScreenType.KeyInstructions,
        });
        break;
      case AppSetting.About:
        trackAction(analyticsTags.settingsScreen.aboutTextCraft);
        navigation.navigate(Screen.Explainer);
        break;
      case AppSetting.Feedback:
        trackAction(analyticsTags.settingsScreen.feedback);
        onFeedbackPress();
        break;
    }
  };

  return {
    isEnabled,
    onSettingsItemPress,
    resetKey,
    setShowResetAlert,
    showResetAlert,
    styles,
    theme,
    toggleSwitch,
    truncatedApiKey,
  };
};
