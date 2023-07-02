import React from 'react';
import {ScrollView, View} from 'react-native';
import {settings} from '../../../appLabels';
import {SettingsItem} from './components/settingsItem/settingsItem';
import {useAppTheme} from '../../common/useAppTheme';
import {getStyles} from './settingsScreen.styles';

const SettingsScreen = () => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.firstSection}>
        {settings.toggleSettings.map((item, index) => (
          <>
            <SettingsItem item={item} />
            {index !== settings.toggleSettings.length - 1 && (
              <View style={styles.divider} />
            )}
          </>
        ))}
      </View>
      <View style={styles.secondSection}>
        {settings.more.map((item, index) => (
          <>
            <SettingsItem item={item} />
            {index !== settings.more.length - 1 && (
              <View style={styles.divider} />
            )}
          </>
        ))}
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
