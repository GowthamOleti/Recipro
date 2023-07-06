import React from 'react';
import {StyleSheet} from 'react-native';
import {SettingsIcon} from '../../../assets/icons';
import {Screen} from '../navigationTypes';

const SettingsButton = (navigation: any) => {
  return (
    <SettingsIcon
      height={25}
      width={25}
      style={styles.container}
      onPress={() => {
        navigation.navigate(Screen.SETTINGS);
      }}
      title="Settings"
    />
  );
};

export default SettingsButton;

const styles = StyleSheet.create({
  container: {
    marginRight: '3%',
  },
});
