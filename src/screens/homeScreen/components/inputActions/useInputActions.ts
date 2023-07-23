import {useNetInfo, NetInfoState} from '@react-native-community/netinfo';
import {useNavigation} from '@react-navigation/native';
import {appLabels} from '../../../../../appLabels';
import {Screen, StackNavigation} from '../../../../navigation/navigationTypes';
import {InputActionType, MoreOptionsType} from '../../../../common/constants';
import {InputActionsProps} from './inputActions';
import {useToastMessage} from '../../../../common/useToastMessage';
import {isLink, isLinkSupported} from '../../../../util/helpers';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {useCallback, useState} from 'react';
import {
  analyticsTags,
  fetchInputActionTag,
  trackAction,
} from '../../../../util/analytics';
import {useAppTheme} from '../../../../common/useAppTheme';
import {getStyles} from './inputActions.styles';

export const useInputActions = ({input}: InputActionsProps) => {
  const internetState: NetInfoState = useNetInfo();
  const navigation = useNavigation<StackNavigation>();
  const {showToast} = useToastMessage();
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [moreOptionsType, setMoreOptionsType] = useState<MoreOptionsType>();

  const isValidInput = useCallback(
    (actionType: InputActionType) => {
      if (input.trim().length === 0) {
        trackAction(analyticsTags.errorToast.emptyInput);
        showToast({message: appLabels.toast.errors.noInput, type: 'error'});
      } else if (internetState.isConnected === false) {
        trackAction(analyticsTags.errorToast.noInternet);
        showToast({message: appLabels.toast.errors.noInternet, type: 'error'});
      } else if (actionType === InputActionType.Rewrite && isLink(input)) {
        trackAction(analyticsTags.errorToast.rewriteLink);
        showToast({message: appLabels.toast.errors.rewriteLink, type: 'error'});
      } else if (!isLinkSupported(input)) {
        trackAction(analyticsTags.errorToast.unsupportedLink);
        showToast({
          message: appLabels.toast.errors.unsupportedLink,
          type: 'error',
        });
      } else {
        return true;
      }
      return false;
    },
    [input, internetState.isConnected, showToast],
  );

  const onActionButtonPress = async (actionType: InputActionType) => {
    trackAction(fetchInputActionTag[actionType]);
    ReactNativeHapticFeedback.trigger('soft', {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    });
    if (isValidInput(actionType)) {
      trackAction(analyticsTags.homescreen.validInput);
      navigation.navigate(Screen.Result, {
        actionType,
        input,
      });
    }
  };

  const onActionButtonLongPress = (actionType: InputActionType) => {
    trackAction(
      actionType === InputActionType.Summarize
        ? analyticsTags.homescreen.summarizeLongPress
        : analyticsTags.homescreen.rewriteLongPress,
    );
    ReactNativeHapticFeedback.trigger('impactMedium', {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    });
    if (isValidInput(actionType)) {
      setShowMoreOptions(true);
      setMoreOptionsType(
        actionType === InputActionType.Summarize
          ? MoreOptionsType.Read
          : MoreOptionsType.Write,
      );
    }
  };

  return {
    moreOptionsType,
    onActionButtonLongPress,
    onActionButtonPress,
    setShowMoreOptions,
    showMoreOptions,
    styles,
  };
};
