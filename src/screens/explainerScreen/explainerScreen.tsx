import React from 'react';
import {
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

const ExplainerScreen = ({route}: ExplainerScreenProps) => {
  const screenType = route?.params?.type ?? ExplainerScreenType.ABOUT;

  const {appSettings, theme, onExplainerButtonPress, firstTime} =
    useExplainerScreen({screenType, key: route?.params?.key ?? ''});

  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
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
        {screenType === ExplainerScreenType.ABOUT && <AboutTextCraft />}
        {screenType === ExplainerScreenType.ADD_PAYMENT && (
          <AddPaymentDetails />
        )}
        {firstTime && (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onExplainerButtonPress}>
            <Text style={styles.buttonText}>
              {screenType === ExplainerScreenType.ABOUT
                ? appLabels.explainer.button.next
                : appLabels.explainer.button.done}
            </Text>
          </TouchableOpacity>
        )}
      </>
    </SafeAreaView>
  );
};

export default ExplainerScreen;
