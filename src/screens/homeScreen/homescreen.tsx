import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {ThemeProps, useAppTheme} from '../../common/useAppTheme';
import {analyticsTags, trackState} from '../../util/analytics';
import {InputActions} from './components/inputActions/inputActions';
import {InputCard} from './components/inputCard/inputCard';

const HomeScreen = () => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const [inputText, setInputText] = useState('');

  useEffect(() => {
    trackState(analyticsTags.screens.home);
  }, []);

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

export const getStyles = ({colors}: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: '5%',
    },
  });
