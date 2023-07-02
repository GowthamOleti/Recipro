import React, {useState} from 'react';
import {Pressable, Switch, Text, View} from 'react-native';
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

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Pressable style={styles.container}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        {item.subtext?.length && (
          <Text style={{color: theme.colors.common.placeHolderText}}>
            {item.subtext}
          </Text>
        )}
      </View>
      {item.hasToggle && (
        <Switch
          trackColor={{
            false: theme.colors.toggleTrack,
            true: theme.colors.green,
          }}
          thumbColor={
            isEnabled ? theme.colors.yellow : theme.colors.toggleThumb
          }
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      )}
    </Pressable>
  );
};
