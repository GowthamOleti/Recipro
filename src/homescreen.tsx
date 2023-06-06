import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {appLabels} from '../labels';
import {homeScreenStyles} from './homescreen.styles';
import {share} from './util/helpers';
import {useFetchSharedItem} from './util/useFetchSharedItem';

const HomeScreen = ({navigation}) => {
  const {homeScreenLabels, commonLabels, mocks} = appLabels;
  const styles = homeScreenStyles;

  const inputText = useFetchSharedItem() || mocks.input;
  const resultText = mocks.output;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>{homeScreenLabels.appTitle}</Text>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.inputTextTitle}>{homeScreenLabels.input}</Text>
          <Text style={styles.inputText} numberOfLines={4}>
            {inputText}
          </Text>
          <View style={styles.resultTitleContainer}>
            <Text style={styles.resultTitleText}>
              {homeScreenLabels.resultType.summary}
            </Text>
            <ScrollView>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Read');
                }}>
                <Text style={styles.resultText} numberOfLines={12}>
                  {resultText}
                </Text>
              </TouchableWithoutFeedback>
            </ScrollView>
            <View style={styles.resultActionsContainer}>
              <TouchableOpacity
                style={styles.resultActionButtonContainer}
                onPress={() => share(resultText)}>
                <Text style={styles.resultActionButtonText}>
                  {commonLabels.resultAction.share}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.resultActionButtonContainer}>
                <Text style={styles.resultActionButtonText}>
                  {commonLabels.resultAction.copy}
                </Text>
              </TouchableOpacity>
            </View>
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
