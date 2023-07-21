import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fetchAlertSecondaryBtnTag, trackAction} from '../util/analytics';
import {ThemeProps, useAppTheme} from './useAppTheme';

export enum AppAlertType {
  KeyError = 'KEY_ERROR',
  ResetConfirmation = 'RESET_CONFIRMATION',
  OnboardingKeyError = 'ONBOARDING_KEY_ERROR',
}

export interface AppAlertProps {
  type: AppAlertType;
  title: string;
  body: string;
  alertVisible: boolean;
  setAlertVisible: (visible: boolean) => void;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryButtonPress?: () => void;
}

export const AppAlert = ({
  type,
  title,
  body,
  alertVisible,
  primaryButtonText,
  secondaryButtonText,
  setAlertVisible,
  onPrimaryButtonPress,
}: AppAlertProps) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={alertVisible}
      onRequestClose={() => {
        setAlertVisible(!alertVisible);
      }}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.body}>{body}</Text>
          <View style={styles.buttonsContainer}>
            {onPrimaryButtonPress && (
              <TouchableOpacity
                style={styles.button}
                onPress={onPrimaryButtonPress}>
                <Text style={styles.buttonText}>{primaryButtonText}</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={[
                styles.button,
                onPrimaryButtonPress
                  ? {backgroundColor: theme.colors.common.white}
                  : null,
              ]}
              onPress={() => {
                trackAction(fetchAlertSecondaryBtnTag[type]);
                setAlertVisible(false);
              }}>
              <Text style={styles.buttonText}>{secondaryButtonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    contentContainer: {
      backgroundColor: colors.textBackground,
      borderRadius: 25,
      padding: '7%',
      elevation: 5,
      alignSelf: 'center',
      width: '90%',
      marginTop: '70%',
    },
    title: {
      marginBottom: '5%',
      textAlign: 'center',
      color: colors.text,
      fontSize: 22,
      fontFamily: fonts.SansBold,
    },
    body: {
      marginBottom: '5%',
      textAlign: 'center',
      color: colors.text,
      fontSize: 19,
      fontFamily: fonts.Sans,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    button: {
      borderRadius: 35,
      minWidth: '40%',
      marginTop: '5%',
      backgroundColor: colors.green,
    },
    buttonText: {
      color: colors.greenText,
      paddingHorizontal: '8%',
      paddingVertical: '3%',
      alignSelf: 'center',
      fontFamily: fonts.SansMedium,
      fontSize: 18,
    },
  });
