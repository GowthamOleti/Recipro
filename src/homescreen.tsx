import React, {useContext} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {GlobalContext} from '../globalContext';
import {InputActions} from './components/inputActions/inputActions';
import {InputSection} from './components/inputSection/inputSection';
import {ResultActions} from './components/resultActions/resultActions';
import {ResultSection} from './components/resultSection/resultSection';
import {HomeScreenProps} from './navigation/navigationTypes';
import {useFetchSharedItem} from './util/useFetchSharedItem';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const sharedText = useFetchSharedItem();

  const {contextData, setContextData} = useContext(GlobalContext);

  // TODO: How to handle sharedData when app is minimized?
  if (contextData.input.length === 0 && sharedText) {
    setContextData({...contextData, input: sharedText});
  }

  return (
    <SafeAreaView style={styles.container}>
      <InputSection navigation={navigation} />
      {contextData.output.length > 0 && (
        <View>
          <ResultSection navigation={navigation} />
          <ResultActions />
        </View>
      )}
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
