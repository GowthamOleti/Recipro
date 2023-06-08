import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './resultSection.styles';
import {ReadEditScreenType, Screens} from '../../util/constants';

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
          navigation.navigate(Screens.READ_EDIT, {
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
