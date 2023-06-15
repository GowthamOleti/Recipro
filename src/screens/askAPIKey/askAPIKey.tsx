import React, {useState} from 'react';
import {
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './askAPIKey.styles';
import {appLabels} from '../../../appLabels';
import {saveOpenAIApiKey} from '../../util/handleApiKeys';

interface Props {
  setAskAPIKey: (value: boolean) => void;
}

export const AskAPIKey = ({setAskAPIKey}: Props) => {
  const {askAPIKey} = appLabels;

  const [key, setKey] = useState('');

  const onDonePress = () => {
    if (key.length !== 51 || !key.startsWith('sk-')) {
      ToastAndroid.show(askAPIKey.errorMessage, ToastAndroid.LONG); // TODO: Change position.
    } else {
      saveOpenAIApiKey(key).finally(() => {
        setAskAPIKey(false);
      });
    }
  };

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
