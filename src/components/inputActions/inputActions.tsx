import React from 'react';
import {Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {appLabels} from '../../../appLabels';
import {Screen} from '../../navigation/navigationTypes';
import {InputActionType} from '../../util/constants';
import {styles} from './inputActions.styles';
import {useNetInfo, NetInfoState} from '@react-native-community/netinfo';

interface Props {
  input: string;
  navigation: any; // TODO: Can I remove this?
}

const useInputActions = ({input, navigation}: Props) => {
  const internetState: NetInfoState = useNetInfo();
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

export const InputActions = ({input, navigation}: Props) => {
  const {onActionButtonPress} = useInputActions({input, navigation});
  const {inputActions} = appLabels;

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.actionButtonContainer, styles.summaryButtonColor]}
          onPress={() => onActionButtonPress(InputActionType.Summarize)}>
          <Text style={styles.actionButtonText}>{inputActions.summarize}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButtonContainer, styles.rewriteButtonColor]}
          onPress={() => onActionButtonPress(InputActionType.Rewrite)}>
          <Text style={styles.actionButtonText}>{inputActions.rewrite}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
