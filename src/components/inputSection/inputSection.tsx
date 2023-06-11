import React from 'react';
import {Text} from 'react-native';
import {styles} from './inputSection.styles';
import {ReadEditScreenType} from '../../util/constants';
import {appLabels} from '../../../labels';
import {Screen} from '../../navigation/navigationTypes';
import globalState from '../../../global';

export interface Props {
  navigation: any;
}

export const InputSection = ({navigation}: Props) => {
  const {inputSection} = appLabels;

  return (
    <>
      <Text style={styles.inputTextTitle}>{inputSection.title}</Text>
      <Text
        style={styles.inputText}
        numberOfLines={4}
        onPress={() => {
          navigation.navigate(Screen.READ_EDIT, {
            type: ReadEditScreenType.EDIT,
            displayText: globalState.input,
          });
        }}>
        {globalState.input}
      </Text>
    </>
  );
};
