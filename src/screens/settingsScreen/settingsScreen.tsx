import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {settings} from '../../../appLabels';
import {SettingsItem} from './components/settingsItem/settingsItem';
import {useAppTheme} from '../../common/useAppTheme';
import {getStyles} from './settingsScreen.styles';
import {appVersion} from '../../common/constants';
import {analyticsTags, trackState} from '../../util/analytics';

const SettingsScreen = () => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  useEffect(() => {
    trackState(analyticsTags.screens.Settings);
  }, []);

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
      <Text style={styles.version}>{`Version ${appVersion}`}</Text>
    </ScrollView>
  );
};

export default SettingsScreen;
