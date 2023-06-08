import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput} from 'react-native';
import {EditActions} from '../../components/editActions/editActions';
import {ResultActions} from '../../components/resultActions/resultActions';
import {ReadEditScreenProps} from '../../navigation/navigationTypes';
import {ReadEditScreenType} from '../../util/constants';
import {styles} from './readEditScreen.styles';

const ReadEditScreen = ({navigation, route}: ReadEditScreenProps) => {
  const resultText = route.params?.displayText;
  const type = route.params?.type;

  const backgroundColor =
    type === ReadEditScreenType.READ
      ? styles.greyBackground
      : styles.blackBackground;

  const [displayText, setDisplayText] = useState(route.params.displayText);

  return (
    <SafeAreaView style={[styles.container, backgroundColor]}>
      {type === ReadEditScreenType.READ ? (
        <>
          <ScrollView>
            <Text selectable style={styles.resultText}>
              {resultText}
            </Text>
          </ScrollView>
          <ResultActions result={resultText} />
        </>
      ) : (
        <>
          <ScrollView>
            <TextInput
              multiline
              style={styles.editableText}
              value={displayText}
              onChangeText={text => setDisplayText(text)}
              autoFocus
            />
          </ScrollView>
          <EditActions navigation={navigation} displayText={displayText} />
        </>
      )}
    </SafeAreaView>
  );
};

export default ReadEditScreen;
