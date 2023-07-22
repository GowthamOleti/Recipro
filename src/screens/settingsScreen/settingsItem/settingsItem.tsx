import React from 'react';
import {Pressable, Switch, Text, View} from 'react-native';
import {AppAlert, AppAlertType} from '../../../common/appAlert';
import {AppSetting} from '../../../common/constants';
import {useSettingsItem} from './useSettingsItem';

export interface SettingsItemProps {
  settingsItem: {
    id: AppSetting;
    title: string;
    subtext?: string;
    hasToggle?: boolean;
  };
}

export const SettingsItem = ({settingsItem}: SettingsItemProps) => {
  const {
    isEnabled,
    onSettingsItemPress,
    resetKey,
    setShowResetAlert,
    showResetAlert,
    styles,
    theme,
    toggleSwitch,
    truncatedApiKey,
  } = useSettingsItem({
    settingsItem,
  });

  return (
    <Pressable style={styles.container} onPress={onSettingsItemPress}>
      <View>
        <Text style={styles.title}>{settingsItem.title}</Text>
        {settingsItem.subtext && (
          <Text style={styles.subtext}>
            {truncatedApiKey
              ? settingsItem.subtext.replace('{key}', truncatedApiKey)
              : settingsItem.subtext}
          </Text>
        )}
      </View>
      {settingsItem.hasToggle && (
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
      <AppAlert
        type={AppAlertType.ResetConfirmation}
        onPrimaryButtonPress={resetKey}
        alertVisible={showResetAlert}
        setAlertVisible={setShowResetAlert}
      />
    </Pressable>
  );
};
