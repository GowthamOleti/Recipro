import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import LottieAnimatedView from 'lottie-react-native';

import {ResultActions} from './components/resultActions/resultActions';
import {ResultError} from './components/resultError/resultError';
import {ResultScreenProps} from '../../navigation/navigationTypes';
import {InputActionType} from '../../common/constants';
import {useResultScreen} from './useResultScreen';
import Animated, {FadeIn} from 'react-native-reanimated';
import {Animations} from '../../assets/animations';

export interface ResultProps {
  input: string;
  actionType: InputActionType;
}

const ResultScreen = ({route}: ResultScreenProps) => {
  const {actionType, input} = route.params;
  const {isLoading, fetchResult, errorType, outputText, styles, theme} =
    useResultScreen({
      input,
      actionType,
    });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.headerBackground}
        barStyle={theme.colors.statusBarContent}
      />
      {isLoading && (
        <View style={styles.loading}>
          <LottieAnimatedView
            style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
            source={Animations.Loading}
            autoPlay
            loop
          />
        </View>
      )}
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
