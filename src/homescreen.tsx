import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {InputActions} from './components/inputActions/inputActions';
import AskAPIKey from './screens/askAPIKey/askAPIKey';
import {useHomeScreen} from './useHomescreen';
import {getStyles} from './homescreen.styles';
import {InputCard} from './components/input/inputCard';
import {useTheme} from './util/useTheme';

const HomeScreen = () => {
  const {askApiKey, setAskApiKey, inputText, setInputText} = useHomeScreen();
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.headerBackground}
        barStyle={theme.isDarkTheme ? 'light-content' : 'dark-content'}
      />
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
