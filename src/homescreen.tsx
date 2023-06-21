import {useClipboard} from '@react-native-community/clipboard';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
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
import Clear from './../assets/icons/clear.svg';
import Paste from './../assets/icons/paste.svg';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const sharedText = useFetchSharedItem();

  const [askApiKey, setAskApiKey] = useState(false);
  const [inputText, setInputText] = useState('');

  const [clipboardText] = useClipboard();
  const [showPasteButton, setShowPasteButton] = useState(false);

  useEffect(() => {
    if (clipboardText.length > 0 && inputText.length === 0) {
      setShowPasteButton(true);
    } else {
      setShowPasteButton(false);
    }
  }, [clipboardText, inputText]);

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
            <TouchableOpacity style={styles.clearAndPaste}>
              {inputText.length > 0 && (
                <Clear
                  height={30}
                  width={30}
                  onPress={() => setInputText('')}
                />
              )}
              {showPasteButton && (
                <Paste
                  height={30}
                  width={30}
                  onPress={() => {
                    setInputText(clipboardText);
                    setShowPasteButton(false);
                  }}
                />
              )}
            </TouchableOpacity>
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
    backgroundColor: color.grey,
    paddingHorizontal: '5%',
  },
  inputContainer: {
    borderRadius: 20,
    padding: '5%',
    maxHeight: '70%',
    minHeight: '65%',
    marginTop: '5%',
    backgroundColor: color.black,
    justifyContent: 'space-between',
    borderColor: color.lightGrey,
    borderWidth: 1,
  },
  inputText: {
    textAlignVertical: 'top',
    fontSize: 19,
    minHeight: '50%',
  },
  clearAndPaste: {
    alignSelf: 'flex-end',
  },
});
