import {useNavigation} from '@react-navigation/native';
import {moreActions} from '../../../../../appLabels';
import {InputActionType, MoreOptionsType} from '../../../../common/constants';
import {useAppTheme} from '../../../../common/useAppTheme';
import {Screen, StackNavigation} from '../../../../navigation/navigationTypes';
import {
  analyticsTags,
  fetchInputActionTag,
  trackAction,
} from '../../../../util/analytics';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {MoreOptionsProps} from './moreInputActions';
import {getStyles} from './moreInputActions.styles';

export const useMoreInputActions = ({input, type}: MoreOptionsProps) => {
  const navigation = useNavigation<StackNavigation>();
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const options =
    type === MoreOptionsType.Read ? moreActions.read : moreActions.write;

  const onMoreActionPress = (actionType: InputActionType) => {
    trackAction(fetchInputActionTag[actionType]);
    trackAction(analyticsTags.homescreen.validInput);
    ReactNativeHapticFeedback.trigger('soft', {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    });
    navigation.navigate(Screen.Result, {
      actionType,
      input,
    });
  };

  return {
    theme,
    styles,
    onMoreActionPress,
    options,
  };
};
