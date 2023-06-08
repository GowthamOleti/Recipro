import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './resultSection.styles';
import {ReadEditScreenType} from '../../util/constants';
import {Screen} from '../../navigation/navigationTypes';

export interface Props {
  navigation: any;
  resultTitle: string;
  resultText: string;
}

export const ResultSection = ({navigation, resultTitle, resultText}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.resultTitleText}>{resultTitle}</Text>
      <Text
        style={styles.resultText}
        numberOfLines={12}
        onPress={() => {
          navigation.navigate(Screen.READ_EDIT, {
            type: ReadEditScreenType.READ,
            displayText: resultText,
            title: resultTitle,
          });
        }}>
        {resultText}
      </Text>
    </View>
  );
};
