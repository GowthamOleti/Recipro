import React from 'react';
import {SafeAreaView} from 'react-native';
import {InputActions} from './components/inputActions/inputActions';
import AskAPIKey from './screens/askAPIKey/askAPIKey';
import {useHomeScreen} from './useHomescreen';
import {styles} from './homescreen.styles';
import {InputCard} from './components/input/inputCard';

const HomeScreen = () => {
  const {askApiKey, setAskApiKey, inputText, setInputText} = useHomeScreen();

  return (
    <SafeAreaView style={styles.container}>
      {askApiKey ? (
        <AskAPIKey setAskAPIKey={setAskApiKey} />
      ) : (
        <>
          <InputCard inputText={inputText} setInputText={setInputText} />
          <InputActions input={inputText} />
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
