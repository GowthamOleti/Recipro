import React from 'react';
import {Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {appLabels} from '../../../appLabels';
import {Screen} from '../../navigation/navigationTypes';
import {InputActionType} from '../../util/constants';
import {styles} from './inputActions.styles';
import {useNetInfo, NetInfoState} from '@react-native-community/netinfo';
import Up from './../../../assets/icons/up-arrow.svg';
import {color} from '../../util/theme';

interface Props {
  input: string;
  navigation: any;
  bottomDrawerRef: any;
}

export const InputActions = ({input, bottomDrawerRef, navigation}: Props) => {
  const {inputActions, errors} = appLabels;
  const internetState: NetInfoState = useNetInfo();

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

  const onUpArrowPress = () => {
    bottomDrawerRef?.current?.open();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onUpArrowPress} style={styles.upArrow}>
        <Up height={15} width={15} fill={color.white} />
      </TouchableOpacity>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.actionButtonContainer}
          onPress={() => onActionButtonPress(InputActionType.Summarize)}>
          <Text style={styles.actionButtonText}>{inputActions.summarize}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButtonContainer}
          onPress={() => onActionButtonPress(InputActionType.Rewrite)}>
          <Text style={styles.actionButtonText}>{inputActions.rewrite}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
