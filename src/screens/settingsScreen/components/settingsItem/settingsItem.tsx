import React from 'react';
import {Pressable, Switch, Text, View} from 'react-native';
import {appLabels} from '../../../../../appLabels';
import {AppAlert, AppAlertType} from '../../../../common/appAlert';
import {AppSetting} from '../../../../common/constants';
import {useAppTheme} from '../../../../common/useAppTheme';
import {getStyles} from './settingsItem.styles';
import {useSettingsItem} from './useSettingsItem';

export interface SettingsItemProps {
  item: {
    id: AppSetting;
    title: string;
    subtext?: string;
    hasToggle?: boolean;
  };
}

export const SettingsItem = ({item}: SettingsItemProps) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const {title, body, okButton, cancelButton} = appLabels.resetKeyAlert;

  const {
    isEnabled,
    onSettingsItemPress,
    resetKey,
    showResetAlert,
    setShowResetAlert,
    toggleSwitch,
    truncatedApiKey,
  } = useSettingsItem({
    item,
  });

  return (
    <Pressable style={styles.container} onPress={onSettingsItemPress}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        {item.subtext && (
          <Text style={styles.subtext}>
            {truncatedApiKey
              ? item.subtext.replace('{key}', truncatedApiKey)
              : item.subtext}
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
      <AppAlert
        type={AppAlertType.ResetConfirmation}
        title={title}
        body={body}
        primaryButtonText={okButton}
        secondaryButtonText={cancelButton}
        onPrimaryButtonPress={resetKey}
        alertVisible={showResetAlert}
        setAlertVisible={setShowResetAlert}
      />
    </Pressable>
  );
};
