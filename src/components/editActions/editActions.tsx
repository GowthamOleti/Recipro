import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {appLabels} from '../../../labels';
import {Screens} from '../../util/constants';
import {styles} from './editActions.styles';

interface Props {
  navigation: any;
  displayText: string;
}

export const EditActions = ({navigation, displayText}: Props) => {
  const onDonePressed = () => {
    navigation.replace(Screens.HOME, {updatedInputText: displayText});

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: Screens.HOME, params: {updatedInputText: displayText}}],
      }),
    );
  };

  const {editActions} = appLabels;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.actionButtonContainer}
        onPress={() => navigation.goBack()}>
        <Text style={styles.actionButtonText}>{editActions.closeButton}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.actionButtonContainer}
        onPress={onDonePressed}>
        <Text style={styles.actionButtonText}>{editActions.doneButton}</Text>
      </TouchableOpacity>
    </View>
  );
};
