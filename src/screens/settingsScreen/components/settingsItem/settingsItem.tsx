import React from 'react';
import {Switch, Text, View} from 'react-native';
import {useAppTheme} from '../../../../common/useAppTheme';
import {getStyles} from './settingsItem.styles';

interface SettingsItemProps {
  item: {
    id: string;
    title: string;
    subtext?: string;
  };
}

export const SettingsItem = ({item}: SettingsItemProps) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            color: theme.colors.text,
            fontSize: 20,
            fontFamily: theme.fonts.Sans,
          }}>
          {item.title}
        </Text>
        {item.subtext && (
          <Text style={{color: theme.colors.text}}>{item.subtext}</Text>
        )}
      </View>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => {}}
        value={true}
      />
    </View>
  );
};
