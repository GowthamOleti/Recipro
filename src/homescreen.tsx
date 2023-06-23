import {useClipboard} from '@react-native-community/clipboard';
import React, {useEffect, useState} from 'react';
import Lottie from 'lottie-react-native';
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
import {color, font} from './util/theme';
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
              placeholderTextColor={color.lightMode.hintText}
              style={styles.inputText}
              onChangeText={text => setInputText(text)}
              value={inputText}
            />
            {inputText.length === 0 && (
              <Lottie
                style={styles.inputAnimation}
                source={require('../assets/animations/input.json')} // TODO: Create Index file
                autoPlay
                loop
              />
            )}
            <TouchableOpacity style={styles.clearAndPaste}>
              {inputText.length > 0 && (
                <Clear
                  height={25}
                  width={25}
                  onPress={() => setInputText('')}
                />
              )}
              {showPasteButton && (
                <Paste
                  height={26}
                  width={26}
                  onPress={() => {
                    setInputText(clipboardText);
                    setShowPasteButton(false);
                  }}
                  fill={color.lightMode.homeSvg}
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
    backgroundColor: color.lightMode.homeBackground,
    paddingHorizontal: '5%',
  },
  inputContainer: {
    borderRadius: 20,
    padding: '3%',
    maxHeight: '70%',
    minHeight: '65%',
    marginTop: '3%',
    backgroundColor: color.lightMode.textBackground,
    justifyContent: 'space-between',
    shadowColor: color.lightMode.shadow,
    elevation: 10,
  },
  inputText: {
    textAlignVertical: 'top',
    fontSize: 19,
    minHeight: '50%',
    maxHeight: '85%',
    fontFamily: font.Sans,
    color: color.lightMode.text,
  },
  inputAnimation: {
    transform: [{scaleX: 0.9}, {scaleY: 0.9}],
    marginTop: '9%',
  },
  clearAndPaste: {
    alignSelf: 'flex-end',
    paddingRight: '2%',
    paddingBottom: '2%',
  },
});
