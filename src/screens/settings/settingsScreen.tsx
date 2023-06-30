import React from 'react';
import {View} from 'react-native';
import {useAppTheme} from '../../util/useAppTheme';
import {getStyles} from './settingsScreen.styles';

const SettingsScreen = () => {
  const theme = useAppTheme();
  const styles = getStyles(theme);
  return <View />;
};

export default SettingsScreen;
