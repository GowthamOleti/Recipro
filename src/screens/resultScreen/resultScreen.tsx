import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Retry from './../../../assets/icons/retry.svg';

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
        <View style={styles.resultContainer}>
          <ScrollView>
            <TextInput
              style={styles.resultText}
              onChangeText={text => setOutputText(text)}
              value={outputText}
              multiline
            />
          </ScrollView>
          <View style={styles.resultActions}>
            <ResultActions output={outputText} />
            <TouchableOpacity onPress={fetchResult} style={styles.retryButton}>
              <Retry height={30} width={30} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ResultScreen;
