import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './askAPIKey.styles';
import {useAskAPIKey} from './useAskAPIKey';

export interface AskAPIKeyProps {
  setAskAPIKey: (value: boolean) => void;
}

export const AskAPIKey = ({setAskAPIKey}: AskAPIKeyProps) => {
  const {askAPIKey, key, onDonePress, setKey} = useAskAPIKey({setAskAPIKey});
  return (
    <View style={styles.container}>
      <Text style={styles.askApiKeyTitle}>{askAPIKey.title}</Text>
      <TextInput
        style={styles.key}
        value={key}
        onChangeText={text => setKey(text)}
        autoFocus
        multiline
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
