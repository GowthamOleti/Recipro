import React from 'react';
import Lottie from 'lottie-react-native';
import {SafeAreaView, TextInput, TouchableOpacity, View} from 'react-native';
import {appLabels} from '../appLabels';
import {InputActions} from './components/inputActions/inputActions';
import {HomeScreenProps} from './navigation/navigationTypes';
import AskAPIKey from './screens/askAPIKey/askAPIKey';
import {color} from './util/theme';
import Clear from './../assets/icons/clear.svg';
import Paste from './../assets/icons/paste.svg';
import {styles} from './homescreen.styles';
import {useHomescreen} from './useHomescreen';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const {
    askApiKey,
    clipboardText,
    setAskApiKey,
    inputText,
    showPasteButton,
    setInputText,
    setShowPasteButton,
  } = useHomescreen({
    navigation,
  });

  // TODO: Clean this up. Rename HomeScreen

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
