import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {appLabels} from '../../../labels';
import {ReadEditScreenType} from '../../util/constants';
import {share, shareAsEmail, shareAsTweet} from '../../util/helpers';
import {readEditStyles} from './readEditScreen.styles';

const ReadEditScreen = ({route}) => {
  const {commonLabels} = appLabels;
  const styles = readEditStyles;
  const resultText = route.params.displayText;
  const type = route.params.type;

  const backgroundStyle =
    type === ReadEditScreenType.INPUT
      ? styles.blackBackground
      : styles.greyBackground;

  return (
    <SafeAreaView style={[readEditStyles.container, backgroundStyle]}>
      <ScrollView>
        <Text style={styles.buttonText}>{resultText}</Text>
      </ScrollView>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => share(resultText)}>
          <Text style={styles.buttonContainer}>
            {commonLabels.resultAction.share}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            {commonLabels.resultAction.copy}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => shareAsTweet(resultText)}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            {commonLabels.resultAction.tweet}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => shareAsEmail(resultText)}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            {commonLabels.resultAction.email}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ReadEditScreen;
