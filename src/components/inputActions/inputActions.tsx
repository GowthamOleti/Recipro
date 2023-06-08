import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {appLabels} from '../../../labels';
import {InputActionType} from '../../util/constants';
import {styles} from './inputActions.styles';

interface Props {
  setSelectedInputActionType: (inputActionType?: InputActionType) => void;
}

export const InputActions = ({setSelectedInputActionType}: Props) => {
  const {homeScreenLabels} = appLabels;

  const onSummarizePress = () => {
    setSelectedInputActionType(InputActionType.Summarize);
  };

  const onRewritePress = () => {
    setSelectedInputActionType(InputActionType.Rewrite);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.actionButtonContainer}
        onPress={onSummarizePress}>
        <Text style={styles.actionButtonText}>
          {homeScreenLabels.action.summarize}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.actionButtonContainer}
        onPress={onRewritePress}>
        <Text style={styles.actionButtonText}>
          {homeScreenLabels.action.rewrite}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
