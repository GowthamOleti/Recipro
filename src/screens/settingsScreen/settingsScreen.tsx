import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {appLabels, settings} from '../../../appLabels';
import {SettingsItem} from './settingsItem/settingsItem';
import {appVersion} from '../../common/constants';
import {useSettingsScreen} from './useSettingsScreen';

const SettingsScreen = () => {
  const {styles} = useSettingsScreen();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.firstSection}>
        {settings.toggleSettings.map((item, index) => (
          <View key={item.id}>
            <SettingsItem settingsItem={item} />
            {index !== settings.toggleSettings.length - 1 && (
              <View style={styles.divider} />
            )}
          </View>
        ))}
      </View>
      <View style={styles.secondSection}>
        {settings.more.map((item, index) => (
          <View key={item.id}>
            <SettingsItem settingsItem={item} />
            {index !== settings.more.length - 1 && (
              <View style={styles.divider} />
            )}
          </View>
        ))}
      </View>
      <Text style={styles.version}>
        {appLabels.appVersion.replace('{version}', appVersion)}
      </Text>
    </ScrollView>
  );
};

export default SettingsScreen;
