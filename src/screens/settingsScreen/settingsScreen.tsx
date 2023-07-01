import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {settings} from '../../../appLabels';
import {SettingsItem} from './components/settingsItem/settingsItem';
import {useAppTheme} from '../../common/useAppTheme';
import {getStyles} from './settingsScreen.styles';

const SettingsScreen = () => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={settings.toggleSettings}
        style={styles.firstSection}
        renderItem={SettingsItem}
        scrollEnabled={false}
        ItemSeparatorComponent={
          <View
            style={{
              backgroundColor: theme.colors.common.placeHolderText,
              height: 0.5,
            }}
          />
        }
      />
      <FlatList
        data={settings.other}
        style={styles.secondSection}
        renderItem={SettingsItem}
        scrollEnabled={false}
        ItemSeparatorComponent={
          <View
            style={{
              backgroundColor: theme.colors.common.placeHolderText,
              height: 0.5,
            }}
          />
        }
      />
    </ScrollView>
  );
};

export default SettingsScreen;
