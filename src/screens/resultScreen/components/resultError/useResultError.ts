import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {fetchResultScreenErrorDetails} from '../../../../../appLabels';
import {
  ExplainerScreenType,
  ResultErrorType,
} from '../../../../common/constants';
import {useAppTheme} from '../../../../common/useAppTheme';
import {Screen} from '../../../../navigation/navigationTypes';
import {
  analyticsTags,
  fetchResultErrorTag,
  trackAction,
} from '../../../../util/analytics';
import {removeApiKey} from '../../../../util/handleApiKey';
import {ResultErrorProps} from './resultError';
import {getStyles} from './resultError.styles';

export const useResultError = ({errorType, fetchResult}: ResultErrorProps) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const errorDetails = fetchResultScreenErrorDetails[errorType];
  const navigation = useNavigation<any>();

  useEffect(() => {
    trackAction(analyticsTags.resultScreen.resultFailure);
    trackAction(fetchResultErrorTag[errorType]);
  }, [errorType]);

  const onErrorButtonPress = () => {
    if (errorType === ResultErrorType.InvalidKey) {
      trackAction(analyticsTags.resultScreen.errorButtons.reset);
      removeApiKey().finally(() => {
        navigation.reset({
          index: 0,
          routes: [{name: Screen.AskApiKey, params: {reset: true}}],
        });
      });
    } else if (errorType === ResultErrorType.KeyNotActivated) {
      trackAction(analyticsTags.resultScreen.errorButtons.instructions);
      navigation.navigate(Screen.Explainer, {
        type: ExplainerScreenType.AddPayment,
      });
    } else {
      trackAction(analyticsTags.resultScreen.errorButtons.retry);
      fetchResult();
    }
  };

  return {
    onErrorButtonPress,
    styles,
    theme,
    errorDetails,
  };
};
