import {Linking} from 'react-native';
import {appLabels} from '../../../../../appLabels';
import {useAppTheme} from '../../../../common/useAppTheme';
import {analyticsTags, trackAction} from '../../../../util/analytics';
import {ApiKeyInstructionsProps} from './apiKeyInstructions';
import {getStyles} from './apiKeyInstructions.styles';

export const useApiKeyInstructions = ({
  isPaymentOnly,
}: ApiKeyInstructionsProps) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const onGenerateKeyLinkPress = () => {
    trackAction(analyticsTags.apiKeyInstructions.generateKeyLink);
    Linking.openURL(appLabels.askAPIKey.generateKeyLink);
  };

  const onAddPaymentLinkPress = () => {
    trackAction(
      isPaymentOnly
        ? analyticsTags.onboarding.addPaymentLink
        : analyticsTags.apiKeyInstructions.addPaymentLink,
    );
    Linking.openURL(appLabels.explainer.apiKeyInstructions.addPaymentLink);
  };

  const onUsageLimitLinkPress = () => {
    trackAction(
      isPaymentOnly
        ? analyticsTags.onboarding.usageLimitLink
        : analyticsTags.apiKeyInstructions.usageLimitLink,
    );
    Linking.openURL(appLabels.explainer.apiKeyInstructions.usageLimitLink);
  };
  return {
    theme,
    styles,
    onGenerateKeyLinkPress,
    onAddPaymentLinkPress,
    onUsageLimitLinkPress,
  };
};
