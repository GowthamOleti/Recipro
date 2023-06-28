import React from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '../../util/useTheme';
import {getStyles} from './askAPIKeyScreen.styles';
import {useAskAPIKeyScreen} from './useAskAPIKeyScreen';

const AskAPIKeyScreen = () => {
  const {askAPIKey, key, onDonePress, setKey} = useAskAPIKeyScreen();
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

export default AskAPIKeyScreen;
