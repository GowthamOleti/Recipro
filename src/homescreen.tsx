import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {InputActions} from './components/inputActions/inputActions';
import {getStyles} from './homescreen.styles';
import {InputCard} from './components/input/inputCard';
import {useTheme} from './util/useTheme';

const HomeScreen = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const [inputText, setInputText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.headerBackground}
        barStyle={theme.isDarkTheme ? 'light-content' : 'dark-content'}
      />
      <InputCard inputText={inputText} setInputText={setInputText} />
      <InputActions input={inputText} />
    </SafeAreaView>
  );
};

export default HomeScreen;
