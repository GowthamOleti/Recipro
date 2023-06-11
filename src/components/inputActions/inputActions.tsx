import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import globalState from '../../../global';
import {appLabels} from '../../../labels';
import {InputActionType} from '../../util/constants';
import {fetchGPTResult} from '../../util/useFetchGPTResult';
import {styles} from './inputActions.styles';

export const InputActions = () => {
  const {inputActions} = appLabels;

  const onSummarizePress = () => {
    globalState.actionType = InputActionType.Summarize;
  };

  const onRewritePress = () => {
    globalState.actionType = InputActionType.Rewrite;
    fetchGPTResult();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.actionButtonContainer}
        onPress={onSummarizePress}>
        <Text style={styles.actionButtonText}>{inputActions.summarize}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.actionButtonContainer}
        onPress={onRewritePress}>
        <Text style={styles.actionButtonText}>{inputActions.rewrite}</Text>
      </TouchableOpacity>
    </View>
  );
};
