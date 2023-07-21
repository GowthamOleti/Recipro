import React from 'react';
import {StyleSheet} from 'react-native';
import {SettingsIcon} from '../../../assets/icons';
import {analyticsTags, trackAction} from '../../util/analytics';
import {Screen} from '../navigationTypes';

const SettingsButton = (navigation: any, screen: Screen) => {
  return (
    <SettingsIcon
      height={25}
      width={25}
      style={styles.container}
      onPress={() => {
        trackAction(
          screen === Screen.HOME
            ? analyticsTags.headerActions.settingsButtonHome
            : analyticsTags.headerActions.settingsButtonResult,
        );
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
