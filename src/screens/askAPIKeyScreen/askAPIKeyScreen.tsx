import React from 'react';
import {
  ActivityIndicator,
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {appLabels} from '../../../appLabels';
import {AppAlert, AppAlertType} from '../../common/appAlert';
import {useAskApiKeyScreen} from './useAskApiKeyScreen';

const AskApiKeyScreen = () => {
  const {
    askAPIKey,
    firstTime,
    isLoading,
    key,
    keyError,
    onAlertPrimaryButtonPress,
    onApiKeyLinkPress,
    onButtonPress,
    setKey,
    setKeyError,
    styles,
    theme,
  } = useAskApiKeyScreen();

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.headerBackground}
        barStyle={theme.colors.statusBarContent}
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
      <View style={styles.apiKeyInstructions}>
        <Text style={styles.apiKeyInstructionsText}>
          {firstTime && (
            <Text
              style={[
                styles.apiKeyInstructionsText,
                {fontFamily: theme.fonts.SansBold},
              ]}>
              {appLabels.askAPIKey.step}
            </Text>
          )}
          {askAPIKey.instructions}
        </Text>
        <Text
          onPress={onApiKeyLinkPress}
          style={[
            styles.apiKeyInstructionsText,
            {color: theme.colors.common.link},
          ]}>
          {askAPIKey.generateKeyLink}
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
        type={AppAlertType.KeyError}
        onPrimaryButtonPress={onAlertPrimaryButtonPress}
        alertVisible={keyError}
        setAlertVisible={setKeyError}
      />
    </View>
  );
};

export default AskApiKeyScreen;
