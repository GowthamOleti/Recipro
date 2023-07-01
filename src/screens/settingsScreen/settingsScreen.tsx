import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {settings} from '../../../appLabels';
import {SettingsItem} from './components/settingsItem/settingsItem';
import {useAppTheme} from '../../common/useAppTheme';
import {getStyles} from './settingsScreen.styles';

const SettingsScreen = () => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const renderSeparator = () => <View style={styles.divider} />;

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={settings.toggleSettings}
        style={styles.firstSection}
        renderItem={SettingsItem}
        scrollEnabled={false}
        ItemSeparatorComponent={renderSeparator}
      />
      <FlatList
        data={settings.more}
        style={styles.secondSection}
        renderItem={SettingsItem}
        scrollEnabled={false}
        ItemSeparatorComponent={renderSeparator}
      />
    </ScrollView>
  );
};

export default SettingsScreen;
