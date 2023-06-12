import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {styles} from './resultSection.styles';
import {ReadEditScreenType} from '../../util/constants';
import {Screen} from '../../navigation/navigationTypes';
import {GlobalContext} from '../../../globalContext';
import {fetchInputActionTitle} from '../../../labels';

// TODO: Find a way to remove this prop
export interface Props {
  navigation: any;
}

export const ResultSection = ({navigation}: Props) => {
  const {contextData} = useContext(GlobalContext);

  const resultTitle = fetchInputActionTitle[contextData.actionType];

  return (
    <View style={styles.container}>
      <Text style={styles.resultTitleText}>{resultTitle}</Text>
      <Text
        style={styles.resultText}
        numberOfLines={12}
        onPress={() => {
          navigation.navigate(Screen.READ_EDIT, {
            type: ReadEditScreenType.READ,
            displayText: contextData.output,
            title: resultTitle,
          });
        }}>
        {contextData.output}
      </Text>
    </View>
  );
};
