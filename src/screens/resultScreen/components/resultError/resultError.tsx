import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {fetchResultScreenErrorDetails} from '../../../../../appLabels';
import {ErrorIcon} from '../../../../../assets/icons';
import {
  ExplainerScreenType,
  ResultErrorType,
} from '../../../../common/constants';
import {useAppTheme} from '../../../../common/useAppTheme';
import {Screen} from '../../../../navigation/navigationTypes';
import {removeApiKey} from '../../../../util/handleApiKey';
import {getStyles} from './resultError.styles';

export interface ResultErrorProps {
  errorType: ResultErrorType;
  fetchResult: () => void;
}

export const ResultError = ({errorType, fetchResult}: ResultErrorProps) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const errorDetails = fetchResultScreenErrorDetails[errorType];
  const navigation = useNavigation<any>();

  const onErrorButtonPress = () => {
    if (errorType === ResultErrorType.INVALID_KEY) {
      removeApiKey().finally(() => {
        navigation.reset({
          index: 0,
          routes: [{name: Screen.ASK_API_KEY, params: {reset: true}}],
        });
      });
    } else if (errorType === ResultErrorType.PAYMENT_DETAILS_UNAVAILABLE) {
      navigation.navigate(Screen.EXPLAINER, {
        type: ExplainerScreenType.ADD_PAYMENT,
      });
    } else {
      fetchResult();
    }
  };

  return (
    <View style={styles.container}>
      <ErrorIcon
        style={styles.errorAnimation}
        height={100}
        width={100}
        fill={theme.colors.resultSvg}
      />
      <Text style={styles.errorText}>{errorDetails.errorTitle}</Text>
      <TouchableOpacity
        style={styles.errorButtonContainer}
        onPress={onErrorButtonPress}>
        <Text style={styles.errorButtonText}>{errorDetails.buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};
