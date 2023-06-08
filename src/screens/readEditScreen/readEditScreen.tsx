import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput} from 'react-native';
import {EditActions} from '../../components/editActions/editActions';
import {ResultActions} from '../../components/resultActions/resultActions';
import {ReadEditScreenType} from '../../util/constants';
import {styles} from './readEditScreen.styles';

const ReadEditScreen = ({navigation, route}) => {
  const resultText = route.params?.displayText;
  const type = route.params?.type;

  const backgroundStyle =
    type === ReadEditScreenType.READ
      ? styles.greyBackground
      : styles.blackBackground;

  const [displayText, setDisplayText] = useState(route.params.displayText);

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <ScrollView>
        {type === ReadEditScreenType.EDIT ? (
          <TextInput
            multiline
            style={styles.editableText}
            value={displayText}
            onChangeText={text => setDisplayText(text)}
            autoFocus
          />
        ) : (
          <Text selectable style={styles.resultText}>
            {resultText}
          </Text>
        )}
      </ScrollView>
      {type === ReadEditScreenType.READ ? (
        <ResultActions result={resultText} />
      ) : (
        <EditActions navigation={navigation} displayText={displayText} />
      )}
    </SafeAreaView>
  );
};

export default ReadEditScreen;
