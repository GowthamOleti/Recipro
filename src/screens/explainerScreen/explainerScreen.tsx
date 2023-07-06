import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {appLabels} from '../../../appLabels';
import {
  ExplainerScreenProps,
  StackNavigation,
} from '../../navigation/navigationTypes';
import {useAppTheme} from '../../common/useAppTheme';
import {getStyles} from './explainerScreen.styles';
import InstructionsCarousel from './components/instructionsCarousel/instructionsCarousel';
import {ExplainerScreenType} from '../../common/constants';
import {SettingsContext} from '../../common/settingsContext';

// TODO: How to use - content & UI
const ExplainerScreen = ({route}: ExplainerScreenProps) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);
  const navigation = useNavigation<StackNavigation>();
  const {appSettings} = useContext(SettingsContext);

  const showApiKeyInstructions =
    route.params.type === ExplainerScreenType.API_KEY ? true : false;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.headerBackground}
        barStyle={appSettings.isDarkMode ? 'light-content' : 'dark-content'}
      />
      {showApiKeyInstructions ? (
        <>
          <View style={styles.instructionsCarouselContainer}>
            <InstructionsCarousel />
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>{appLabels.explainer.button}</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View />
      )}
    </SafeAreaView>
  );
};

export default ExplainerScreen;
