import {useNetInfo, NetInfoState} from '@react-native-community/netinfo';
import {useNavigation} from '@react-navigation/native';
import {appLabels} from '../../../appLabels';
import {Screen} from '../../navigation/navigationTypes';
import {InputActionType} from '../../util/constants';
import {InputActionsProps} from './inputActions';
import {useToastMessage} from '../../util/useToastMessage';

export const useInputActions = ({input}: InputActionsProps) => {
  const internetState: NetInfoState = useNetInfo();
  const navigation = useNavigation<any>();
  const {showHomeScreenToast} = useToastMessage();

  const {errors} = appLabels;

  const onActionButtonPress = async (actionType: InputActionType) => {
    if (input.length === 0) {
      showHomeScreenToast(errors.noInput);
    } else if (internetState.isConnected === false) {
      showHomeScreenToast(errors.noInternet);
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
