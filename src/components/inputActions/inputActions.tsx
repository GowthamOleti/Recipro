import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {GlobalContext} from '../../../globalContext';
import {appLabels} from '../../../labels';
import {InputActionType} from '../../util/constants';
import {fetchGPTResult} from '../../util/fetchGPTResult';
import {styles} from './inputActions.styles';

export const InputActions = () => {
  const {inputActions} = appLabels;

  const {contextData, setContextData} = useContext(GlobalContext);

  const onSummarizePress = () => {
    setContextData({...contextData, actionType: InputActionType.Summarize});
  };

  const onRewritePress = async () => {
    const output = await fetchGPTResult(contextData);
    setContextData({
      ...contextData,
      output,
      actionType: InputActionType.Rewrite,
    });
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
