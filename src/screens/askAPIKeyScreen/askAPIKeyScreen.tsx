import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RightArrow} from '../../../assets/icons';
import {Screen} from '../../navigation/navigationTypes';
import {ExplainerScreenType} from '../../util/constants';
import {useTheme} from '../../util/useTheme';
import {getStyles} from './askAPIKeyScreen.styles';
import {useAskAPIKeyScreen} from './useAskAPIKeyScreen';

const AskAPIKeyScreen = () => {
  const {askAPIKey, key, onSaveButtonPress, setKey} = useAskAPIKeyScreen();
  const theme = useTheme();
  const styles = getStyles(theme);

  const navigation = useNavigation<any>();

  const onGetInstructionsPress = () => {
    navigation.navigate(Screen.EXPLAINER, {type: ExplainerScreenType.API_KEY});
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.headerBackground}
        barStyle={theme.isDarkTheme ? 'light-content' : 'dark-content'}
      />
      <View style={styles.keyContainer}>
        <TextInput
          style={styles.key}
          value={key}
          placeholder={askAPIKey.title}
          placeholderTextColor={theme.colors.common.placeHolderText}
          onChangeText={text => setKey(text)}
          autoFocus
          multiline
        />
      </View>
      <TouchableOpacity
        onPress={onGetInstructionsPress}
        style={styles.getInstructionsContainer}>
        <Text style={styles.getInstructionsText}>
          {askAPIKey.getInstructions}
        </Text>
        <RightArrow
          style={styles.rightArrow}
          height={50}
          width={50}
          fill={theme.colors.common.placeHolderText}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.saveButtonContainer}
        onPress={onSaveButtonPress}>
        <Text style={styles.saveButtonText}>{askAPIKey.saveButton}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AskAPIKeyScreen;
