import React from 'react';
import {Text, View} from 'react-native';
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
    <View style={{alignSelf: 'center'}}>
      <Text
        style={{
          color: theme.colors.text,
          fontSize: 20,
          fontFamily: theme.fonts.Sans,
          paddingLeft: '5%',
        }}>
        {item.title}
      </Text>
      <Text style={{color: theme.colors.text, paddingLeft: '5%'}}>
        {item.subtext}
      </Text>
    </View>
  );
};
