import React, {useContext, useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput} from 'react-native';
import {GlobalContext} from '../../../globalContext';
import {EditActions} from '../../components/editActions/editActions';
import {ResultActions} from '../../components/resultActions/resultActions';
import {ReadEditScreenProps} from '../../navigation/navigationTypes';
import {ReadEditScreenType} from '../../util/constants';
import {styles} from './readEditScreen.styles';

// TODO: Move input editing to homescreen

const ReadEditScreen = ({navigation, route}: ReadEditScreenProps) => {
  const type = route.params?.type;

  const {contextData} = useContext(GlobalContext);

  const backgroundColor =
    type === ReadEditScreenType.READ
      ? styles.greyBackground
      : styles.blackBackground;

  const [inputText, setInputText] = useState(contextData.input);

  return (
    <SafeAreaView style={[styles.container, backgroundColor]}>
      {type === ReadEditScreenType.READ ? (
        <>
          <ScrollView>
            <Text selectable style={styles.resultText}>
              {contextData.output}
            </Text>
          </ScrollView>
          <ResultActions />
        </>
      ) : (
        <>
          <ScrollView>
            <TextInput
              multiline
              style={styles.editableText}
              value={inputText}
              onChangeText={text => setInputText(text)}
              autoFocus
            />
          </ScrollView>
          <EditActions navigation={navigation} inputText={inputText} />
        </>
      )}
    </SafeAreaView>
  );
};

export default ReadEditScreen;
