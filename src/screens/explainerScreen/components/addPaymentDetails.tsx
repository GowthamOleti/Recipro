import React from 'react';
import {Linking, View, StyleSheet, Text} from 'react-native';
import {appLabels} from '../../../../appLabels';
import {ThemeProps, useAppTheme} from '../../../common/useAppTheme';

export const AddPaymentDetails = () => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const addPaymentContent = appLabels.explainer.addPayment;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{addPaymentContent.text}</Text>
      <Text
        style={[styles.text, {color: theme.colors.common.link}]}
        onPress={() => Linking.openURL(addPaymentContent.link)}>
        {addPaymentContent.link}
      </Text>
    </View>
  );
};

const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: '2%',
    },
    text: {
      fontFamily: fonts.Sans,
      fontSize: 18,
      color: colors.text,
    },
  });
