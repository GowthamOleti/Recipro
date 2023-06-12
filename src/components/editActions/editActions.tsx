import {CommonActions} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {GlobalContext} from '../../../globalContext';
import {appLabels} from '../../../labels';
import {Screen} from '../../navigation/navigationTypes';
import {styles} from './editActions.styles';

interface Props {
  navigation: any;
  inputText: string;
}

export const EditActions = ({navigation, inputText}: Props) => {
  const {contextData, setContextData} = useContext(GlobalContext);

  const onDonePressed = () => {
    setContextData({...contextData, input: inputText});
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: Screen.HOME}],
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
