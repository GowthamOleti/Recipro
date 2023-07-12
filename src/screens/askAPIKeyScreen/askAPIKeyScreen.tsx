import React, {useContext} from 'react';
import {
  Linking,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SettingsContext} from '../../common/settingsContext';
import {useAppTheme} from '../../common/useAppTheme';
import {getStyles} from './askAPIKeyScreen.styles';
import {useAskAPIKeyScreen} from './useAskAPIKeyScreen';

const AskAPIKeyScreen = () => {
  const {askAPIKey, key, onButtonPress, firstTime, setKey} =
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
          placeholder={firstTime ? askAPIKey.title : askAPIKey.resetKeyTitle}
          placeholderTextColor={theme.colors.common.placeHolderText}
          onChangeText={text => setKey(text)}
          autoFocus
          multiline
        />
      </View>
      <View style={styles.ApiKeyInstructions}>
        <Text style={styles.ApiKeyInstructionsText}>
          {askAPIKey.instructions}
        </Text>
        <Text
          onPress={() => Linking.openURL(askAPIKey.instructionsLink)}
          style={[
            styles.ApiKeyInstructionsText,
            {color: theme.colors.common.link},
          ]}>
          {askAPIKey.instructionsLink}
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={onButtonPress}>
        <Text style={styles.buttonText}>
          {firstTime ? askAPIKey.next : askAPIKey.saveKey}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AskAPIKeyScreen;
