import {useClipboard} from '@react-native-community/clipboard';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {appLabels} from '../appLabels';
import {InputActions} from './components/inputActions/inputActions';
import {HomeScreenProps, Screen} from './navigation/navigationTypes';
import AskAPIKey from './screens/askAPIKey/askAPIKey';
import {InputActionType} from './util/constants';
import {IsOpenAIApiKeyPresent} from './util/handleApiKeys';
import {isLink} from './util/helpers';
import {color} from './util/theme';
import {useFetchSharedItem} from './util/useFetchSharedItem';

// Move logic to a hook

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const sharedText = useFetchSharedItem();

  const [askApiKey, setAskApiKey] = useState(false);
  const [inputText, setInputText] = useState('');

  const [clipboardText] = useClipboard();
  const [showInlineButton, setShowInlineButton] = useState(
    clipboardText.length > 0 ? true : false,
  );

  useEffect(() => {
    IsOpenAIApiKeyPresent().then(isOpenAIApiKeyPresent => {
      if (!isOpenAIApiKeyPresent) {
        setAskApiKey(true);
      }
    });
  }, []);

  useEffect(() => {
    if (sharedText) {
      if (isLink(sharedText)) {
        navigation.navigate(Screen.RESULT, {
          actionType: InputActionType.Summarize,
          input: sharedText,
        });
      }
      setInputText(sharedText);
    }
  }, [navigation, sharedText]);

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
            {true && (
              <TouchableOpacity
                style={styles.inlineButtonContainer}
                onPress={() => {
                  setInputText(clipboardText);
                  setShowInlineButton(false);
                }}>
                <Text style={styles.inlineButtonText}>
                  {appLabels.pasteFromClipboard}
                </Text>
              </TouchableOpacity>
            )}
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
    minHeight: '50%',
  },
  inputContainer: {
    borderRadius: 20,
    padding: '5%',
    maxHeight: '70%',
    minHeight: '66%',
    marginTop: '10%',
    backgroundColor: color.grey,
  },
  inlineButtonContainer: {
    borderColor: color.white,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
  },
  inlineButtonText: {
    alignSelf: 'center',
    padding: '3%',
  },
});
