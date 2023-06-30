import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RoundedRight} from '../../../assets/icons';
import {useAppTheme} from '../../common/useAppTheme';
import {getStyles} from './askAPIKeyScreen.styles';
import {useAskAPIKeyScreen} from './useAskAPIKeyScreen';

const AskAPIKeyScreen = () => {
  const {askAPIKey, key, onGetInstructionsPress, onSaveButtonPress, setKey} =
    useAskAPIKeyScreen();
  const theme = useAppTheme();
  const styles = getStyles(theme);

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
        <RoundedRight
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
