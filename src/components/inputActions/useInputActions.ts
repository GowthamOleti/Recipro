import {useNetInfo, NetInfoState} from '@react-native-community/netinfo';
import {useNavigation} from '@react-navigation/native';
import {ToastAndroid} from 'react-native';
import {appLabels} from '../../../appLabels';
import {Screen} from '../../navigation/navigationTypes';
import {InputActionType} from '../../util/constants';
import {InputActionsProps} from './inputActions';

export const useInputActions = ({input}: InputActionsProps) => {
  const internetState: NetInfoState = useNetInfo();
  const navigation = useNavigation<any>();

  const {errors} = appLabels;

  const onActionButtonPress = async (actionType: InputActionType) => {
    if (input.length === 0) {
      ToastAndroid.show(errors.noInput, ToastAndroid.SHORT);
    } else if (internetState.isConnected === false) {
      ToastAndroid.show(errors.noInternet, ToastAndroid.SHORT);
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
