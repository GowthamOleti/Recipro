import React from 'react';
import {Linking, ScrollView, StyleSheet, Text} from 'react-native';
import {appLabels} from '../../../../appLabels';
import {ThemeProps, useAppTheme} from '../../../common/useAppTheme';

interface Props {
  isPaymentOnly?: boolean;
}

export const ApiKeyInstructions = ({isPaymentOnly}: Props) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const marginTop = isPaymentOnly ? '-8%' : '0%';

  return (
    <ScrollView
      contentContainerStyle={[styles.contentContainer, {marginTop: marginTop}]}>
      {!isPaymentOnly && (
        <>
          <Text style={styles.text}>{appLabels.askAPIKey.instructions}</Text>
          <Text
            onPress={() =>
              Linking.openURL(appLabels.askAPIKey.instructionsLink)
            }
            style={[styles.text, {color: theme.colors.common.link}]}>
            {appLabels.askAPIKey.instructionsLink}
          </Text>
        </>
      )}
      <Text style={styles.text}>{appLabels.explainer.addPayment.text}</Text>
      <Text
        style={[styles.text, {color: theme.colors.common.link}]}
        onPress={() => Linking.openURL(appLabels.explainer.addPayment.link)}>
        {appLabels.explainer.addPayment.link}
      </Text>
      {!isPaymentOnly && (
        <>
          <Text style={styles.text}>
            {appLabels.explainer.addPayment.additionalText}
          </Text>
          <Text
            style={[styles.text, {color: theme.colors.common.link}]}
            onPress={() =>
              Linking.openURL(appLabels.explainer.addPayment.additionalLink)
            }>
            {appLabels.explainer.addPayment.additionalLink}
          </Text>
        </>
      )}
    </ScrollView>
  );
};

const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    contentContainer: {
      paddingRight: '4%',
      marginBottom: '50%',
    },
    text: {
      fontFamily: fonts.Sans,
      fontSize: 18,
      color: colors.text,
    },
  });
