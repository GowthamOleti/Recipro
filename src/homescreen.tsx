import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {appLabels, fetchInputActionTitle} from '../labels';
import {InputActions} from './components/inputActions/inputActions';
import {InputSection} from './components/inputSection/inputSection';
import {ResultActions} from './components/resultActions/resultActions';
import {ResultSection} from './components/resultSection/resultSection';
import {HomeScreenProps} from './navigation/navigationTypes';
import {InputActionType} from './util/constants';
import {useFetchSharedItem} from './util/useFetchSharedItem';

const HomeScreen = ({navigation, route}: HomeScreenProps) => {
  const {mocks} = appLabels;

  const updatedInputText = route?.params?.updatedInputText;
  const sharedText = useFetchSharedItem();

  const [selectedActionType, setSelectedActionType] =
    useState<InputActionType>();

  const inputText = updatedInputText ?? sharedText ?? mocks.input;

  const resultText = mocks.output;
  const resultTitle =
    fetchInputActionTitle[selectedActionType ?? InputActionType.Default];

  return (
    <SafeAreaView style={styles.container}>
      <InputSection navigation={navigation} inputText={inputText} />
      <ResultSection
        navigation={navigation}
        resultText={resultText}
        resultTitle={resultTitle}
      />
      <ResultActions result={resultText} />
      <InputActions setSelectedInputActionType={setSelectedActionType} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: '7%',
  },
});

const testOpenAI = async (input: string) => {
  console.log('inside test block');
  const {Configuration, OpenAIApi} = require('openai');

  const configuration = new Configuration({
    apiKey: '',
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Rewrite - ${input}`,
  });
  console.log(JSON.stringify(completion.data.choices[0].text));
};
