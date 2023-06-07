import {CommonActions} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ResultActions} from '../../components/resultActions/resultActions';
import {ReadEditScreenType, Screens} from '../../util/constants';
import {readEditStyles} from './readEditScreen.styles';

const ReadEditScreen = ({navigation, route}) => {
  const styles = readEditStyles;
  const resultText = route.params?.displayText;
  const type = route.params?.type;

  const backgroundStyle =
    type === ReadEditScreenType.READ
      ? styles.greyBackground
      : styles.blackBackground;

  const [displayText, setDisplayText] = useState(route.params.displayText);

  const onDonePressed = () => {
    navigation.replace(Screens.HOME, {updatedInputText: displayText});

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: Screens.HOME, params: {updatedInputText: displayText}}],
      }),
    );
  };

  return (
    <SafeAreaView style={[readEditStyles.container, backgroundStyle]}>
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
          <Text style={styles.resultText}>{resultText}</Text>
        )}
      </ScrollView>
      {type === ReadEditScreenType.READ ? (
        <ResultActions result={resultText} />
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.actionButtonContainer}
            onPress={() => navigation.goBack()}>
            <Text style={styles.actionButtonText}>{'Close'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButtonContainer}
            onPress={onDonePressed}>
            <Text style={styles.actionButtonText}>{'Done'}</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ReadEditScreen;
