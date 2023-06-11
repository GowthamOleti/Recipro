import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import globalState from '../global';
import {fetchInputActionTitle} from '../labels';
import {InputActions} from './components/inputActions/inputActions';
import {InputSection} from './components/inputSection/inputSection';
import {ResultActions} from './components/resultActions/resultActions';
import {ResultSection} from './components/resultSection/resultSection';
import {HomeScreenProps} from './navigation/navigationTypes';
import {useFetchSharedItem} from './util/useFetchSharedItem';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const sharedText = useFetchSharedItem();

  if (globalState.input.length === 0 && sharedText) {
    globalState.input = sharedText;
  }

  const resultTitle = fetchInputActionTitle[globalState.actionType];

  return (
    <SafeAreaView style={styles.container}>
      <InputSection navigation={navigation} />
      <ResultSection navigation={navigation} resultTitle={resultTitle} />
      <ResultActions />
      <InputActions />
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
