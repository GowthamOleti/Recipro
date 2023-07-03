import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {AppSetting} from '../../../../common/constants';
import {Screen, StackNavigation} from '../../../../navigation/navigationTypes';

export const useSettingsItem = ({id}: {id: AppSetting}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    onSettingsItemPress(id);
    setIsEnabled(previousState => !previousState);
  };

  const navigation = useNavigation<StackNavigation>();

  const onSettingsItemPress = (setting: AppSetting) => {
    switch (setting) {
      case AppSetting.IS_DARK_THEME:
        // TODO
        break;
      case AppSetting.RESET_API_KEY:
        navigation.navigate(Screen.ASK_API_KEY, {reset: true});
        break;
      case AppSetting.QUICK_SUMMARIZE:
        // TODO
        break;
      case AppSetting.SHOW_TWITTER_MAIL:
        // TODO
        break;
      case AppSetting.HOW_TO_USE:
        // TODO
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
