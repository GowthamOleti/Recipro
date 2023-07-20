import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {appLabels} from '../../../appLabels';
import {ExplainerScreenProps} from '../../navigation/navigationTypes';
import {getStyles} from './explainerScreen.styles';
import {ExplainerScreenType} from '../../common/constants';
import {AboutTextCraft} from './components/aboutTextCraft';
import {useExplainerScreen} from './useExplainerScreen';
import {AppAlert} from '../../common/appAlert';
import {ApiKeyInstructions} from './components/apiKeyInstructions';
import Animated, {FadeInDown} from 'react-native-reanimated';

const ExplainerScreen = ({route}: ExplainerScreenProps) => {
  const screenType = route?.params?.type ?? ExplainerScreenType.ABOUT;

  const {
    appSettings,
    theme,
    onExplainerButtonPress,
    firstTime,
    isLoading,
    keyError,
    setKeyError,
  } = useExplainerScreen({screenType, key: route?.params?.key ?? ''});

  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.headerBackground}
        barStyle={appSettings.isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Animated.View entering={FadeInDown.duration(500)}>
        <View style={{marginBottom: firstTime ? '30%' : '5%'}}>
          {screenType === ExplainerScreenType.ABOUT ? (
            <AboutTextCraft />
          ) : (
            <ApiKeyInstructions
              isPaymentOnly={screenType === ExplainerScreenType.ADD_PAYMENT}
            />
          )}
        </View>
        {firstTime && (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={isLoading ? () => {} : onExplainerButtonPress}>
            {isLoading ? (
              <ActivityIndicator
                style={styles.loading}
                color={theme.colors.common.black}
              />
            ) : (
              <Text style={styles.buttonText}>
                {screenType === ExplainerScreenType.ABOUT
                  ? appLabels.explainer.button.next
                  : appLabels.explainer.button.done}
              </Text>
            )}
          </TouchableOpacity>
        )}
      </Animated.View>
      <AppAlert
        title={appLabels.keyError.title}
        body={appLabels.keyError.body}
        primaryButtonText={appLabels.keyError.primaryButton}
        secondaryButtonText={appLabels.keyError.okay}
        alertVisible={keyError}
        setAlertVisible={setKeyError}
      />
    </SafeAreaView>
  );
};

export default ExplainerScreen;
