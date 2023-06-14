import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {appLabels} from '../../../appLabels';
import {Screen} from '../../navigation/navigationTypes';
import {InputActionType} from '../../util/constants';
import {styles} from './inputActions.styles';

interface Props {
  input: string;
  navigation: any;
}

export const InputActions = ({input, navigation}: Props) => {
  const {inputActions} = appLabels;

  const onActionButtonPress = async (actionType: InputActionType) => {
    navigation.navigate(Screen.RESULT, {
      actionType,
      input,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={input.length === 0}
        style={styles.actionButtonContainer}
        onPress={() => onActionButtonPress(InputActionType.Summarize)}>
        <Text style={styles.actionButtonText}>{inputActions.summarize}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={input.length === 0}
        style={styles.actionButtonContainer}
        onPress={() => onActionButtonPress(InputActionType.Rewrite)}>
        <Text style={styles.actionButtonText}>{inputActions.rewrite}</Text>
      </TouchableOpacity>
    </View>
  );
};
