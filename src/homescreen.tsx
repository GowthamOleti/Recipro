import React, {useContext, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {GlobalContext} from '../globalContext';
import {InputActions} from './components/inputActions/inputActions';
import {InputSection} from './components/inputSection/inputSection';
import {ResultActions} from './components/resultActions/resultActions';
import {ResultSection} from './components/resultSection/resultSection';
import {HomeScreenProps} from './navigation/navigationTypes';
import AskAPIKey from './screens/askAPIKey/askAPIKey';
import {IsOpenAIApiKeyPresent} from './util/handleApiKeys';
import {color} from './util/theme';
import {useFetchSharedItem} from './util/useFetchSharedItem';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const sharedText = useFetchSharedItem();

  const {contextData, setContextData} = useContext(GlobalContext);

  useEffect(() => {
    IsOpenAIApiKeyPresent().then(isOpenAIApiKeyPresent => {
      if (!isOpenAIApiKeyPresent) {
        setContextData({...contextData, isOpenAIApiKeyPresent: false});
      }
    });
  }, [contextData, navigation, setContextData]);

  // TODO: How to handle sharedData when app is minimized?
  if (contextData.input.length === 0 && sharedText) {
    setContextData({...contextData, input: sharedText});
  }

  return (
    <SafeAreaView style={styles.container}>
      {contextData.isOpenAIApiKeyPresent ? (
        <>
          <InputSection navigation={navigation} />
          {contextData.output.length > 0 && (
            <>
              <ResultSection navigation={navigation} />
              <ResultActions />
            </>
          )}
          <InputActions />
        </>
      ) : (
        <AskAPIKey />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
    paddingHorizontal: '7%',
  },
});
