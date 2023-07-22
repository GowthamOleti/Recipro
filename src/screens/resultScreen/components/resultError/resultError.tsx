import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ErrorIcon} from '../../../../../assets/icons';
import {ResultErrorType} from '../../../../common/constants';
import {useResultError} from './useResultError';

export interface ResultErrorProps {
  errorType: ResultErrorType;
  fetchResult: () => void;
}

export const ResultError = ({errorType, fetchResult}: ResultErrorProps) => {
  const {styles, theme, errorDetails, onErrorButtonPress} = useResultError({
    errorType,
    fetchResult,
  });

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
