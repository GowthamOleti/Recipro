import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {InputActions} from './components/inputActions/inputActions';
import {getStyles} from './homescreen.styles';
import {InputCard} from './components/inputCard/inputCard';
import {useAppTheme} from '../../common/useAppTheme';
import {SettingsContext} from '../../common/settingsContext';
import {analyticsTags, trackState} from '../../util/analytics';

const HomeScreen = () => {
  const theme = useAppTheme();
  const styles = getStyles(theme);
  const {appSettings} = useContext(SettingsContext);

  const [inputText, setInputText] = useState('');

  useEffect(() => {
    trackState(analyticsTags.screens.Home);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.headerBackground}
        barStyle={appSettings.isDarkMode ? 'light-content' : 'dark-content'}
      />
      <InputCard inputText={inputText} setInputText={setInputText} />
      <InputActions input={inputText} />
    </SafeAreaView>
  );
};

export default HomeScreen;
