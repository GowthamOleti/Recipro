import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {appLabels} from '../../../../../appLabels';
import {AppSetting, ExplainerScreenType} from '../../../../common/constants';
import {SettingsContext} from '../../../../common/settingsContext';
import {Screen} from '../../../../navigation/navigationTypes';
import {getOpenAIApiKey, removeApiKey} from '../../../../util/handleApiKey';
import {getSetting, saveSetting} from '../../../../util/handleSettings';
import {onFeedbackPress} from '../../../../util/helpers';
import {SettingsItemProps} from './settingsItem';

export const useSettingsItem = ({item}: SettingsItemProps) => {
  const {appSettings, setAppSettings} = useContext(SettingsContext);

  const [isEnabled, setIsEnabled] = useState(false);
  const [truncatedApiKey, setTruncatedApiKey] = useState<string>();

  useEffect(() => {
    if (item.hasToggle) {
      getSetting(item.id).then(result => {
        setIsEnabled(result);
      });
    }
    if (item.id === AppSetting.RESET_API_KEY) {
      getOpenAIApiKey().then(key => {
        setTruncatedApiKey(key?.slice(-4));
      });
    }
  }, [item]);

  const resetKey = () => {
    removeApiKey().finally(() => {
      navigation.reset({
        index: 0,
        routes: [{name: Screen.ASK_API_KEY, params: {reset: true}}],
      });
    });
  };

  const resetConfirmationAlert = () => {
    Alert.alert(appLabels.resetKeyAlert.title, appLabels.resetKeyAlert.body, [
      {
        text: appLabels.resetKeyAlert.cancelButton,
        style: 'cancel',
      },
      {
        text: appLabels.resetKeyAlert.okButton,
        onPress: resetKey,
      },
    ]);
  };

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
        resetConfirmationAlert();
        break;
      case AppSetting.HOW_TO_USE:
        navigation.navigate(Screen.EXPLAINER, {
          type: ExplainerScreenType.GENERAL,
        });
        break;
      case AppSetting.FEEDBACK:
        onFeedbackPress();
        break;
    }
  };

  return {
    isEnabled,
    onSettingsItemPress,
    toggleSwitch,
    truncatedApiKey,
  };
};
