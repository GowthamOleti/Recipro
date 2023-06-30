import Lottie from 'lottie-react-native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {fetchResultScreenErrorDetails} from '../../../../../appLabels';
import {Animations} from '../../../../../assets/animations';
import {ResultErrorType} from '../../../../common/constants';
import {useAppTheme} from '../../../../common/useAppTheme';
import {getStyles} from './resultError.styles';

export interface ResultErrorProps {
  errorType: ResultErrorType;
  fetchResult: () => void;
}

export const ResultError = ({errorType, fetchResult}: ResultErrorProps) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const errorDetails = fetchResultScreenErrorDetails[errorType];

  const onErrorButtonPress = () => {
    if (errorType === ResultErrorType.INVALID_KEY) {
      // TODO: Navigate to reset api key screen
    } else {
      fetchResult();
    }
  };

  return (
    <View style={styles.container}>
      <Lottie
        style={styles.errorAnimation}
        source={Animations.Error}
        autoPlay
        loop={false}
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
