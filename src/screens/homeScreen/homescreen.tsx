import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {InputActions} from './components/inputActions/inputActions';
import {InputCard} from './components/inputCard/inputCard';
import {useHomeScreen} from './useHomeScreen';

const HomeScreen = () => {
  const {inputText, setInputText, styles, theme} = useHomeScreen();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.headerBackground}
        barStyle={theme.colors.statusBarContent}
      />
      <InputCard inputText={inputText} setInputText={setInputText} />
      <InputActions input={inputText} />
    </SafeAreaView>
  );
};

export default HomeScreen;
