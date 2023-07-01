import React from 'react';
import {Switch, Text, TouchableOpacity, View} from 'react-native';
import {useAppTheme} from '../../../../common/useAppTheme';
import {getStyles} from './settingsItem.styles';

interface SettingsItemProps {
  item: {
    id: string;
    title: string;
    subtext?: string;
    hasToggle?: boolean;
  };
}

export const SettingsItem = ({item}: SettingsItemProps) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        {item.subtext && (
          <Text style={{color: theme.colors.text}}>{item.subtext}</Text>
        )}
      </View>
      {item.hasToggle && (
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={true ? '#FFE7AB' : '#f4f3f4'}
          onValueChange={() => {}}
          value={true}
        />
      )}
    </TouchableOpacity>
  );
};
