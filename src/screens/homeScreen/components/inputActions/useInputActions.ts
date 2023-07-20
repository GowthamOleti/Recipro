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

export const useInputActions = ({input}: InputActionsProps) => {
  const internetState: NetInfoState = useNetInfo();
  const navigation = useNavigation<StackNavigation>();
  const {showToast} = useToastMessage();

  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [moreOptionsType, setMoreOptionsType] = useState<MoreOptionsType>();

  const {toast} = appLabels;

  const isValidInput = useCallback(
    ({input, actionType}: {input: string; actionType: InputActionType}) => {
      if (input.trim().length === 0) {
        showToast({message: toast.errors.noInput, type: 'error'});
      } else if (internetState.isConnected === false) {
        showToast({message: toast.errors.noInternet, type: 'error'});
      } else if (actionType === InputActionType.Rewrite && isLink(input)) {
        showToast({message: toast.errors.rewriteLink, type: 'error'});
      } else if (!isLinkSupported(input)) {
        showToast({message: toast.errors.unsupportedLink, type: 'error'});
      } else {
        return true;
      }
      return false;
    },
    [internetState.isConnected, showToast, toast.errors],
  );

  const onActionButtonPress = async (actionType: InputActionType) => {
    ReactNativeHapticFeedback.trigger('soft', {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    });
    if (isValidInput({input, actionType})) {
      navigation.navigate(Screen.RESULT, {
        actionType,
        input,
      });
    }
  };

  const onActionButtonLongPress = (actionType: InputActionType) => {
    ReactNativeHapticFeedback.trigger('impactMedium', {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    });
    if (isValidInput({input, actionType})) {
      setShowMoreOptions(true);
      setMoreOptionsType(
        actionType === InputActionType.Summarize
          ? MoreOptionsType.Read
          : MoreOptionsType.Write,
      );
    }
  };

  return {
    onActionButtonPress,
    onActionButtonLongPress,
    showMoreOptions,
    setShowMoreOptions,
    moreOptionsType,
  };
};
