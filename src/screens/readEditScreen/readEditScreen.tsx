import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {appLabels} from '../../../labels';
import {share, shareAsEmail, shareAsTweet} from '../../util/helpers';
import {readEditStyles} from './readEditScreen.styles';

const ReadEditScreen = () => {
  const {commonLabels, mocks} = appLabels;

  const resultText = mocks.output;
  return (
    <SafeAreaView style={readEditStyles.container}>
      <ScrollView>
        <Text style={readEditStyles.buttonText}>{resultText}</Text>
      </ScrollView>
      <View style={readEditStyles.actionsContainer}>
        <TouchableOpacity
          style={readEditStyles.buttonContainer}
          onPress={() => share(resultText)}>
          <Text style={readEditStyles.buttonContainer}>
            {commonLabels.resultAction.share}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={readEditStyles.buttonContainer}>
          <Text style={readEditStyles.buttonText}>
            {commonLabels.resultAction.copy}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => shareAsTweet(resultText)}
          style={readEditStyles.buttonContainer}>
          <Text style={readEditStyles.buttonText}>
            {commonLabels.resultAction.tweet}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => shareAsEmail(resultText)}
          style={readEditStyles.buttonContainer}>
          <Text style={readEditStyles.buttonText}>
            {commonLabels.resultAction.email}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ReadEditScreen;
