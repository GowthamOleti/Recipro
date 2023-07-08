import React, {useContext} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Right} from '../../../assets/icons';
import {SettingsContext} from '../../common/settingsContext';
import {useAppTheme} from '../../common/useAppTheme';
import {AskApiScreenProps} from '../../navigation/navigationTypes';
import {getStyles} from './askAPIKeyScreen.styles';
import {useAskAPIKeyScreen} from './useAskAPIKeyScreen';

const AskAPIKeyScreen = ({route}: AskApiScreenProps) => {
  const {askAPIKey, key, onGetInstructionsPress, onSaveButtonPress, setKey} =
    useAskAPIKeyScreen();
  const {appSettings} = useContext(SettingsContext);
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.headerBackground}
        barStyle={appSettings.isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View style={styles.keyContainer}>
        <TextInput
          style={styles.key}
          value={key}
          placeholder={
            route?.params?.reset ? askAPIKey.resetKeyTitle : askAPIKey.title
          }
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
        <View style={styles.iconContainer}>
          <Right
            style={styles.rightArrow}
            height={40}
            width={40}
            fill={theme.colors.text}
          />
        </View>
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
