import React, {useContext} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

import {Loading} from './components/loading';
import {ResultActions} from './components/resultActions/resultActions';
import {ResultError} from './components/resultError/resultError';
import {ResultScreenProps} from '../../navigation/navigationTypes';
import {InputActionType} from '../../common/constants';
import {useAppTheme} from '../../common/useAppTheme';
import {getStyles} from './resultScreen.styles';
import {useResultScreen} from './useResultScreen';
import Animated, {FadeIn} from 'react-native-reanimated';
import {SettingsContext} from '../../common/settingsContext';

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
  const {appSettings} = useContext(SettingsContext);

  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.headerBackground}
        barStyle={appSettings.isDarkMode ? 'light-content' : 'dark-content'}
      />
      {isLoading && <Loading />}
      {outputText.length > 0 && (
        <View>
          <Animated.ScrollView
            style={styles.resultContainer}
            entering={FadeIn.duration(1000)}>
            <Text style={styles.resultText} selectable>
              {outputText}
            </Text>
          </Animated.ScrollView>
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
