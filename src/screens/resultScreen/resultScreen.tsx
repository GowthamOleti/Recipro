import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import {Loading} from '../../components/loading';
import {ResultActions} from '../../components/resultActions/resultActions';
import {ResultScreenProps} from '../../navigation/navigationTypes';
import {fetchGPTResult} from '../../util/fetchGPTResult';
import {styles} from './resultScreen.styles';

const ResultScreen = ({route}: ResultScreenProps) => {
  const {actionType, input} = route.params;

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
