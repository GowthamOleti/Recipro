import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput} from 'react-native';
import {ResultActions} from '../../components/resultActions/resultActions';
import {ReadEditScreenType} from '../../util/constants';
import {readEditStyles} from './readEditScreen.styles';

const ReadEditScreen = ({route}) => {
  const styles = readEditStyles;
  const resultText = route.params.displayText;
  const type = route.params.type;

  const backgroundStyle =
    type === ReadEditScreenType.READ
      ? styles.greyBackground
      : styles.blackBackground;

  const [inputText, setInputText] = useState(route.params.displayText);

  return (
    <SafeAreaView style={[readEditStyles.container, backgroundStyle]}>
      <ScrollView>
        {type === ReadEditScreenType.EDIT ? (
          <TextInput
            multiline
            style={styles.editableText}
            value={inputText}
            onChangeText={text => setInputText(text)}
            autoFocus
          />
        ) : (
          <Text style={styles.buttonText}>{resultText}</Text>
        )}
      </ScrollView>
      {type === ReadEditScreenType.READ && (
        <ResultActions result={resultText} />
      )}
    </SafeAreaView>
  );
};

export default ReadEditScreen;
