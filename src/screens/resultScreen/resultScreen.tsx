import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import {Loading} from '../../components/loading';
import {ResultActions} from '../../components/resultActions/resultActions';
import {ResultScreenProps} from '../../navigation/navigationTypes';
import {InputActionType} from '../../util/constants';
import {fetchGPTResult} from '../../util/fetchGPTResult';
import {styles} from './resultScreen.styles';

interface Props {
  input: string;
  actionType: InputActionType;
}

const useResultScreen = ({input, actionType}: Props) => {
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchResult = useCallback(() => {
    setIsLoading(true);
    fetchGPTResult({input, actionType}).then(output => {
      setOutputText(output);
      setIsLoading(false);
    });
  }, [actionType, input]);

  useEffect(() => {
    if (input && actionType) {
      fetchResult();
    }
  }, [input, actionType, fetchResult]);

  return {
    isLoading,
    outputText,
  };
};

const ResultScreen = ({route}: ResultScreenProps) => {
  const {actionType, input} = route.params;
  const {isLoading, outputText} = useResultScreen({input, actionType});

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
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
    </SafeAreaView>
  );
};

export default ResultScreen;
