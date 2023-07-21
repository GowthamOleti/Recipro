import React from 'react';
import {Linking, ScrollView, StyleSheet, Text} from 'react-native';
import {appLabels} from '../../../../appLabels';
import {ThemeProps, useAppTheme} from '../../../common/useAppTheme';
import {analyticsTags, trackAction} from '../../../util/analytics';

interface Props {
  isPaymentOnly?: boolean;
}

export const ApiKeyInstructions = ({isPaymentOnly}: Props) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {!isPaymentOnly && (
        <>
          <Text style={styles.text}>
            <Text style={[styles.text, {fontFamily: theme.fonts.SansBold}]}>
              {appLabels.askAPIKey.step}
            </Text>
            {appLabels.askAPIKey.instructions}
          </Text>
          <Text
            onPress={() => {
              trackAction(analyticsTags.apiKeyInstructions.generateKeyLink);
              Linking.openURL(appLabels.askAPIKey.generateKeyLink);
            }}
            style={[styles.text, {color: theme.colors.common.link}]}>
            {appLabels.askAPIKey.generateKeyLink}
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
        onPress={() => {
          trackAction(
            isPaymentOnly
              ? analyticsTags.onboarding.addPaymentLink
              : analyticsTags.apiKeyInstructions.addPaymentLink,
          );
          Linking.openURL(
            appLabels.explainer.apiKeyInstructions.addPaymentLink,
          );
        }}>
        {appLabels.explainer.apiKeyInstructions.addPaymentLink}
      </Text>
      <Text style={styles.text}>
        <Text style={[styles.text, {fontFamily: theme.fonts.SansBold}]}>
          {appLabels.explainer.apiKeyInstructions.pricing}
        </Text>
        {appLabels.explainer.apiKeyInstructions.pricingBody}
      </Text>
      <Text
        style={[styles.text, {color: theme.colors.common.link}]}
        onPress={() => {
          trackAction(
            isPaymentOnly
              ? analyticsTags.onboarding.usageLimitLink
              : analyticsTags.apiKeyInstructions.usageLimitLink,
          );
          Linking.openURL(
            appLabels.explainer.apiKeyInstructions.usageLimitLink,
          );
        }}>
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
