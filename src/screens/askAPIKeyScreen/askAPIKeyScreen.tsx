import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {
  ActivityIndicator,
  Linking,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {appLabels} from '../../../appLabels';
import {AppAlert} from '../../common/appAlert';
import {ExplainerScreenType} from '../../common/constants';
import {SettingsContext} from '../../common/settingsContext';
import {useAppTheme} from '../../common/useAppTheme';
import {Screen, StackNavigation} from '../../navigation/navigationTypes';
import {getStyles} from './askAPIKeyScreen.styles';
import {useAskAPIKeyScreen} from './useAskAPIKeyScreen';

const AskAPIKeyScreen = () => {
  const {
    askAPIKey,
    key,
    onButtonPress,
    firstTime,
    setKey,
    setKeyError,
    isLoading,
    keyError,
  } = useAskAPIKeyScreen();
  const {appSettings} = useContext(SettingsContext);
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const navigation = useNavigation<StackNavigation>();

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
          maxLength={51}
          autoFocus
          multiline
        />
      </View>
      <View style={styles.ApiKeyInstructions}>
        <Text style={styles.ApiKeyInstructionsText}>
          {firstTime && (
            <Text
              style={[
                styles.ApiKeyInstructionsText,
                {fontFamily: theme.fonts.SansBold},
              ]}>
              {appLabels.askAPIKey.step}
            </Text>
          )}
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
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={isLoading ? () => {} : onButtonPress}>
        {isLoading ? (
          <ActivityIndicator
            style={styles.loading}
            color={theme.colors.common.black}
          />
        ) : (
          <Text style={styles.buttonText}>
            {firstTime ? askAPIKey.next : askAPIKey.saveKey}
          </Text>
        )}
      </TouchableOpacity>
      <AppAlert
        title={appLabels.keyError.title}
        body={appLabels.keyError.body}
        primaryButtonText={appLabels.keyError.primaryButton}
        secondaryButtonText={appLabels.keyError.secondaryButton}
        onPrimaryButtonPress={() => {
          setKeyError(false);
          navigation.navigate(Screen.EXPLAINER, {
            type: ExplainerScreenType.KEY_INSTRUCTIONS,
          });
        }}
        alertVisible={keyError}
        setAlertVisible={setKeyError}
      />
    </SafeAreaView>
  );
};

export default AskAPIKeyScreen;
