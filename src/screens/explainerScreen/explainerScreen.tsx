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
import InstructionsCarousel from './components/instructionsCarousel/InstructionsCarousel';
import {AboutTextCraft} from './components/aboutTextCraft';
import {AddPaymentDetails} from './components/addPaymentDetails';
import {useExplainerScreen} from './useExplainerScreen';
import {AppAlert} from '../../common/appAlert';

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

  const aboutMarginBottom = {marginBottom: firstTime ? '30%' : '5%'};
  const containerPaddingRight = {
    paddingRight: screenType === ExplainerScreenType.ABOUT ? '1%' : '5%',
  };

  return (
    <SafeAreaView style={[styles.container, containerPaddingRight]}>
      <StatusBar
        backgroundColor={theme.colors.headerBackground}
        barStyle={appSettings.isDarkMode ? 'light-content' : 'dark-content'}
      />
      <>
        {screenType === ExplainerScreenType.KEY_INSTRUCTIONS && (
          <View style={styles.instructionsCarouselContainer}>
            <InstructionsCarousel />
          </View>
        )}
        {screenType === ExplainerScreenType.ABOUT && (
          <View style={aboutMarginBottom}>
            <AboutTextCraft />
          </View>
        )}
        {screenType === ExplainerScreenType.ADD_PAYMENT && (
          <AddPaymentDetails />
        )}
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
      </>
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
