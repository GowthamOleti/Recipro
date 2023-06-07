import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {appLabels} from '../labels';
import {ResultActions} from './components/resultActions/resultActions';
import {homeScreenStyles} from './homescreen.styles';
import {ReadEditScreenType, Screens} from './util/constants';
import {useFetchSharedItem} from './util/useFetchSharedItem';

const HomeScreen = ({navigation, route}) => {
  const {homeScreenLabels, mocks} = appLabels;
  const styles = homeScreenStyles;

  const updatedInputText = route?.params?.updatedInputText;
  const sharedText = useFetchSharedItem();

  const inputText = updatedInputText ?? sharedText ?? mocks.input;

  const resultText = mocks.output;

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
          <View style={styles.resultTitleContainer}>
            <Text style={styles.resultTitleText}>
              {homeScreenLabels.resultType.summary}
            </Text>
            <ScrollView>
              <Text
                style={styles.resultText}
                numberOfLines={12}
                onPress={() => {
                  navigation.navigate(Screens.READ_EDIT, {
                    type: ReadEditScreenType.READ,
                    displayText: resultText,
                  });
                }}>
                {resultText}
              </Text>
            </ScrollView>
            <ResultActions result={resultText} />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={homeScreenStyles.actionButtonContainer}>
          <Text style={styles.actionButtonText}>
            {homeScreenLabels.action.summarize}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButtonContainer}>
          <Text style={styles.actionButtonText}>
            {homeScreenLabels.action.rewrite}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
