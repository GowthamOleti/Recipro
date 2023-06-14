import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import {appLabels} from '../appLabels';
import {InputActions} from './components/inputActions/inputActions';
import {HomeScreenProps} from './navigation/navigationTypes';
import AskAPIKey from './screens/askAPIKey/askAPIKey';
import {IsOpenAIApiKeyPresent} from './util/handleApiKeys';
import {color} from './util/theme';
import {useFetchSharedItem} from './util/useFetchSharedItem';

// TODO: Add option to Summarize directly when link is detected

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const sharedText = useFetchSharedItem();

  const [askApiKey, setAskApiKey] = useState(false);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    IsOpenAIApiKeyPresent().then(isOpenAIApiKeyPresent => {
      if (!isOpenAIApiKeyPresent) {
        setAskApiKey(true);
      }
    });
  }, []);

  useEffect(() => {
    if (sharedText) {
      setInputText(sharedText);
    }
  }, [sharedText]);

  return (
    <SafeAreaView style={styles.container}>
      {askApiKey ? (
        <AskAPIKey setAskAPIKey={setAskApiKey} />
      ) : (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              multiline
              autoFocus
              placeholder={appLabels.inputHint}
              style={styles.inputText}
              onChangeText={text => setInputText(text)}
              value={inputText}
            />
          </View>
          <InputActions input={inputText} navigation={navigation} />
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
    paddingHorizontal: '7%',
  },
  inputText: {
    textAlignVertical: 'top',
    fontSize: 19,
  },
  inputContainer: {
    borderRadius: 20,
    padding: '5%',
    maxHeight: '70%',
    minHeight: '50%',
    marginTop: '10%',
    backgroundColor: color.grey,
  },
});
