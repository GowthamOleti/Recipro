import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ThemeProps, useAppTheme} from './useAppTheme';

export interface AppAlertProps {
  title: string;
  body: string;
  alertVisible: boolean;
  setAlertVisible: (visible: boolean) => void;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryButtonPress?: () => void;
}

export const AppAlert = ({
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

  const borderWidth = onPrimaryButtonPress ? 0 : 1;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={alertVisible}
      onRequestClose={() => {
        setAlertVisible(!alertVisible);
      }}>
      <View style={styles.container}>
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
            onPress={() => setAlertVisible(false)}>
            <Text style={styles.buttonText}>{secondaryButtonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.textBackground,
      borderRadius: 25,
      padding: '7%',
      elevation: 5,
      alignSelf: 'center',
      width: '90%',
      marginTop: '70%',
      borderWidth: 1,
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
      color: colors.common.buttonText,
      paddingHorizontal: '8%',
      paddingVertical: '3%',
      alignSelf: 'center',
      fontFamily: fonts.RobotoRegular,
      fontSize: 18,
    },
  });
