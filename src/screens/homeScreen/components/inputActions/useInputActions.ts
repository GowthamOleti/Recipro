import {useNetInfo, NetInfoState} from '@react-native-community/netinfo';
import {useNavigation} from '@react-navigation/native';
import {appLabels} from '../../../../../appLabels';
import {Screen, StackNavigation} from '../../../../navigation/navigationTypes';
import {InputActionType} from '../../../../common/constants';
import {InputActionsProps} from './inputActions';
import {useToastMessage} from '../../../../common/useToastMessage';
import {isLinkSupported} from '../../../../util/helpers';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

export const useInputActions = ({input}: InputActionsProps) => {
  const internetState: NetInfoState = useNetInfo();
  const navigation = useNavigation<StackNavigation>();
  const {showToast} = useToastMessage();

  const {toast} = appLabels;

  const onActionButtonPress = async (actionType: InputActionType) => {
    ReactNativeHapticFeedback.trigger('soft', {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    });
    if (input.trim().length === 0) {
      showToast({message: toast.errors.noInput, type: 'error'});
    } else if (internetState.isConnected === false) {
      showToast({message: toast.errors.noInternet, type: 'error'});
    } else if (!isLinkSupported(input)) {
      showToast({message: toast.errors.unsupportedLink, type: 'error'});
    } else {
      navigation.navigate(Screen.RESULT, {
        actionType,
        input,
      });
    }
  };
  return {
    onActionButtonPress,
  };
};
