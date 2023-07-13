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
          <Text style={styles.text}>
            <Text style={[styles.text, {fontFamily: theme.fonts.SansBold}]}>
              {appLabels.askAPIKey.step}
            </Text>
            {appLabels.askAPIKey.instructions}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(appLabels.askAPIKey.instructionsLink)
            }
            style={[styles.text, {color: theme.colors.common.link}]}>
            {appLabels.askAPIKey.instructionsLink}
          </Text>
        </>
      )}
      <Text style={styles.text}>
        <Text style={[styles.text, {fontFamily: theme.fonts.SansBold}]}>
          {appLabels.explainer.apiKeyInstructions.step}
        </Text>
        {appLabels.explainer.apiKeyInstructions.text}
      </Text>
      <Text
        style={[styles.text, {color: theme.colors.common.link}]}
        onPress={() =>
          Linking.openURL(appLabels.explainer.apiKeyInstructions.link)
        }>
        {appLabels.explainer.apiKeyInstructions.link}
      </Text>
      <Text style={styles.text}>
        <Text style={[styles.text, {fontFamily: theme.fonts.SansBold}]}>
          {appLabels.explainer.apiKeyInstructions.pricing}
        </Text>
        {appLabels.explainer.apiKeyInstructions.pricingBody}
      </Text>
      <Text
        style={[styles.text, {color: theme.colors.common.link}]}
        onPress={() =>
          Linking.openURL(appLabels.explainer.apiKeyInstructions.usageLimitLink)
        }>
        {appLabels.explainer.apiKeyInstructions.usageLimitLink}
      </Text>
    </ScrollView>
  );
};

const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    contentContainer: {
      paddingRight: '4%',
      paddingBottom: '10%',
      marginBottom: '50%',
    },
    text: {
      fontFamily: fonts.Sans,
      fontSize: 18,
      color: colors.text,
    },
  });
