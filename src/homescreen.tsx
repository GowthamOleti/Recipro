import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {appLabels, fetchInputActionTitle} from '../labels';
import {InputActions} from './components/inputActions/inputActions';
import {ResultActions} from './components/resultActions/resultActions';
import {styles} from './homescreen.styles';
import {InputActionType, ReadEditScreenType, Screens} from './util/constants';
import {useFetchSharedItem} from './util/useFetchSharedItem';

const HomeScreen = ({navigation, route}) => {
  const {homeScreenLabels, mocks} = appLabels;

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
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.inputTextTitle}>{homeScreenLabels.input}</Text>
          <Text
            style={styles.inputText}
            numberOfLines={4}
            onPress={() => {
              navigation.navigate(Screens.READ_EDIT, {
                type: ReadEditScreenType.EDIT,
                displayText: inputText,
              });
            }}>
            {inputText}
          </Text>
          <View style={styles.resultContainer}>
            <Text style={styles.resultTitleText}>{resultTitle}</Text>
            <Text
              style={styles.resultText}
              numberOfLines={12}
              onPress={() => {
                navigation.navigate(Screens.READ_EDIT, {
                  type: ReadEditScreenType.READ,
                  displayText: resultText,
                  title: resultTitle,
                });
              }}>
              {resultText}
            </Text>
          </View>
          <View style={styles.resultActions}>
            <ResultActions result={resultText} />
          </View>
        </View>
      </View>
      <InputActions setSelectedInputActionType={setSelectedActionType} />
    </SafeAreaView>
  );
};

export default HomeScreen;
