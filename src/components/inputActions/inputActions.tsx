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

  // TODO: Make this more simpler

  const onSummarizePress = () => {
    setContextData({
      ...contextData,
      isLoading: true,
    });
    fetchGPTResult({
      input: contextData.input,
      actionType: InputActionType.Summarize,
    }).then(output => {
      setContextData({
        ...contextData,
        output,
        actionType: InputActionType.Summarize,
        isLoading: false,
      });
    });
  };

  const onRewritePress = async () => {
    setContextData({
      ...contextData,
      isLoading: true,
    });
    fetchGPTResult({
      input: contextData.input,
      actionType: InputActionType.Rewrite,
    }).then(output => {
      setContextData({
        ...contextData,
        output,
        actionType: InputActionType.Rewrite,
        isLoading: false,
      });
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
