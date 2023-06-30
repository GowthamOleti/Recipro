import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

import {Loading} from './components/loading';
import {ResultActions} from './components/resultActions/resultActions';
import {ResultError} from './components/resultError/resultError';
import {ResultScreenProps} from '../../navigation/navigationTypes';
import {InputActionType} from '../../util/constants';
import {useAppTheme} from '../../util/useAppTheme';
import {getStyles} from './resultScreen.styles';
import {useResultScreen} from './useResultScreen';

export interface Props {
  input: string;
  actionType: InputActionType;
}

const ResultScreen = ({route}: ResultScreenProps) => {
  const {actionType, input} = route.params;
  const {isLoading, fetchResult, errorType, outputText} = useResultScreen({
    input,
    actionType,
  });
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.headerBackground}
        barStyle={theme.isDarkTheme ? 'light-content' : 'dark-content'}
      />
      {isLoading && <Loading />}
      {outputText.length > 0 && (
        <View>
          <ScrollView style={styles.resultContainer}>
            <Text style={styles.resultText} selectable>
              {outputText}
            </Text>
          </ScrollView>
          <View style={styles.resultActions}>
            <ResultActions output={outputText} />
          </View>
        </View>
      )}
      {errorType && (
        <ResultError errorType={errorType} fetchResult={fetchResult} />
      )}
    </SafeAreaView>
  );
};

export default ResultScreen;
