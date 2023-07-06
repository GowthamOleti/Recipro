import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {appLabels} from '../../../appLabels';
import {
  ExplainerScreenProps,
  Screen,
  StackNavigation,
} from '../../navigation/navigationTypes';
import {useAppTheme} from '../../common/useAppTheme';
import {getStyles} from './explainerScreen.styles';
import InstructionsCarousel from './components/instructionsCarousel/instructionsCarousel';
import {ExplainerScreenType} from '../../common/constants';
import {SettingsContext} from '../../common/settingsContext';

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
      <>
        {showApiKeyInstructions ? (
          <View style={styles.instructionsCarouselContainer}>
            <InstructionsCarousel />
          </View>
        ) : (
          <ScrollView
            style={styles.aboutContainer}
            showsVerticalScrollIndicator={false}>
            <Text style={styles.aboutText}>
              {appLabels.explainer.about.intro}
            </Text>
            <Text style={styles.aboutText}>
              <Text
                style={[styles.aboutText, {fontFamily: theme.fonts.SansBold}]}>
                {appLabels.explainer.about.summarizePrefix}
              </Text>
              {appLabels.explainer.about.summarizeDescription}
            </Text>
            <Text style={styles.aboutText}>
              <Text
                style={[styles.aboutText, {fontFamily: theme.fonts.SansBold}]}>
                {appLabels.explainer.about.rewritePrefix}
              </Text>
              {appLabels.explainer.about.rewriteDescription}
            </Text>
            <Text style={styles.aboutText}>
              {appLabels.explainer.about.conclusion}
            </Text>
          </ScrollView>
        )}
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            showApiKeyInstructions
              ? navigation.goBack()
              : navigation.navigate(Screen.HOME);
          }}>
          <Text style={styles.buttonText}>
            {showApiKeyInstructions
              ? appLabels.explainer.button.goBack
              : appLabels.explainer.button.done}
          </Text>
        </TouchableOpacity>
      </>
    </SafeAreaView>
  );
};

export default ExplainerScreen;
