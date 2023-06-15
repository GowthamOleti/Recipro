import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {fetchLoadingText} from '../../../appLabels';
import {Loading} from '../../components/loading';
import {ResultActions} from '../../components/resultActions/resultActions';
import {ResultScreenProps} from '../../navigation/navigationTypes';
import {fetchGPTResult} from '../../util/fetchGPTResult';
import {styles} from './resultScreen.styles';

// TODO: Add option to edit on long press

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
        <Loading loadingText={fetchLoadingText[actionType]} />
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
