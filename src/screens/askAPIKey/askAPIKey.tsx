import React, {useContext, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './askAPIKey.styles';
import {appLabels} from '../../../labels';
import {saveOpenAIApiKey} from '../../util/handleApiKeys';
import {GlobalContext} from '../../../globalContext';

// TODO: key validation

export const AskAPIKey = () => {
  const {askAPIKey} = appLabels;

  const [key, setKey] = useState('');

  const {contextData, setContextData} = useContext(GlobalContext);

  const onDonePress = () => {
    saveOpenAIApiKey(key).finally(() => {
      setContextData({...contextData, isOpenAIApiKeyPresent: true});
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.askApiKeyTitle}>{askAPIKey.title}</Text>
      <TextInput
        style={styles.key}
        value={key}
        onChangeText={text => setKey(text)}
        autoFocus
      />
      <TouchableOpacity
        style={styles.doneButtonContainer}
        onPress={onDonePress}>
        <Text style={styles.doneButtonText}>{askAPIKey.doneButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AskAPIKey;
