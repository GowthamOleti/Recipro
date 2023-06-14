import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Loading} from '../../components/loading';
import {ResultActions} from '../../components/resultActions/resultActions';
import {ResultScreenProps} from '../../navigation/navigationTypes';
import {fetchGPTResult} from '../../util/fetchGPTResult';
import {styles} from './resultScreen.styles';

const ResultScreen = ({route}: ResultScreenProps) => {
  const {actionType, input} = route.params;

  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (input && actionType) {
      setIsLoading(true);
      fetchGPTResult({input, actionType}).then(output => {
        setOutputText(output);
        setIsLoading(false);
      });
    }
  }, [input, actionType]);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ScrollView>
            <Text selectable style={styles.resultText}>
              {outputText}
            </Text>
          </ScrollView>
          <ResultActions output={outputText} />
        </>
      )}
    </SafeAreaView>
  );
};

export default ResultScreen;
