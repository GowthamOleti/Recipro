import React from 'react';
import {ScrollView, Text} from 'react-native';
import {appLabels} from '../../../../../appLabels';
import {useApiKeyInstructions} from './useApiKeyInstructions';

export interface ApiKeyInstructionsProps {
  isPaymentOnly?: boolean;
}

export const ApiKeyInstructions = ({
  isPaymentOnly,
}: ApiKeyInstructionsProps) => {
  const {
    theme,
    styles,
    onCheckUsageLinkPress,
    onGenerateKeyLinkPress,
    onAddPaymentLinkPress,
    onUsageLimitLinkPress,
  } = useApiKeyInstructions({isPaymentOnly});

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
            onPress={onGenerateKeyLinkPress}
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
        onPress={onAddPaymentLinkPress}>
        {appLabels.explainer.apiKeyInstructions.addPaymentLink}
      </Text>
      {isPaymentOnly ? (
        <Text style={styles.text}>
          <Text style={[styles.text, {fontFamily: theme.fonts.SansBold}]}>
            {appLabels.explainer.apiKeyInstructions.pricing}
          </Text>
          {appLabels.explainer.apiKeyInstructions.pricingBody}
          <Text
            style={[styles.text, {color: theme.colors.common.link}]}
            onPress={onUsageLimitLinkPress}>
            {appLabels.explainer.apiKeyInstructions.usageLimitLink}
          </Text>
        </Text>
      ) : (
        <Text style={[styles.text, {fontFamily: theme.fonts.SansBold}]}>
          {appLabels.explainer.apiKeyInstructions.additionalLinks}
          <Text
            style={[styles.text, {color: theme.colors.common.link}]}
            onPress={onCheckUsageLinkPress}>
            {appLabels.explainer.apiKeyInstructions.checkUsage}
          </Text>
          <Text
            style={[styles.text, {color: theme.colors.common.link}]}
            onPress={onUsageLimitLinkPress}>
            {appLabels.explainer.apiKeyInstructions.usageLimit}
          </Text>
        </Text>
      )}
    </ScrollView>
  );
};
