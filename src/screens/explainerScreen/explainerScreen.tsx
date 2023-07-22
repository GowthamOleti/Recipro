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
import {ExplainerScreenType} from '../../common/constants';
import {About} from './components/about/about';
import {useExplainerScreen} from './useExplainerScreen';
import {AppAlert, AppAlertType} from '../../common/appAlert';
import {ApiKeyInstructions} from './components/apiKeyInstructions/apiKeyInstructions';
import Animated, {FadeInDown} from 'react-native-reanimated';

const ExplainerScreen = ({route}: ExplainerScreenProps) => {
  const screenType = route?.params?.type ?? ExplainerScreenType.About;
  const key = route?.params?.key;

  const {
    firstTime,
    isLoading,
    keyError,
    onExplainerButtonPress,
    setKeyError,
    styles,
    theme,
  } = useExplainerScreen({screenType, key: key ?? ''});

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.headerBackground}
        barStyle={theme.colors.statusBarContent}
      />
      <Animated.View entering={FadeInDown.duration(500)}>
        <View style={firstTime ? styles.marginBottom30 : styles.marginBottom5}>
          {screenType === ExplainerScreenType.About ? (
            <About />
          ) : (
            <ApiKeyInstructions
              isPaymentOnly={screenType === ExplainerScreenType.AddPayment}
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
                {screenType === ExplainerScreenType.About
                  ? appLabels.explainer.button.next
                  : appLabels.explainer.button.done}
              </Text>
            )}
          </TouchableOpacity>
        )}
      </Animated.View>
      <AppAlert
        type={AppAlertType.OnboardingKeyError}
        alertVisible={keyError}
        setAlertVisible={setKeyError}
      />
    </SafeAreaView>
  );
};

export default ExplainerScreen;
