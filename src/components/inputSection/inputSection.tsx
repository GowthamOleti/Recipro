import React from 'react';
import {Text} from 'react-native';
import {styles} from './inputSection.styles';
import {ReadEditScreenType, Screens} from '../../util/constants';
import {appLabels} from '../../../labels';

export interface Props {
  navigation: any;
  inputText: string;
}

export const InputSection = ({navigation, inputText}: Props) => {
  const {inputSection} = appLabels;

  return (
    <>
      <Text style={styles.inputTextTitle}>{inputSection.title}</Text>
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
    </>
  );
};
