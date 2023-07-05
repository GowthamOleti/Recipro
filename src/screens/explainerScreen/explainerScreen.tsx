import {useNavigation} from '@react-navigation/native';
import React from 'react';
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

// TODO: How to use guide UI
const ExplainerScreen = ({route}: ExplainerScreenProps) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);
  const navigation = useNavigation<StackNavigation>();

  const showApiKeyInstructions =
    route.params.type === ExplainerScreenType.API_KEY ? true : false;

  return showApiKeyInstructions ? (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.headerBackground}
        barStyle={theme.isDarkTheme ? 'light-content' : 'dark-content'}
      />
      <View style={styles.instructionsCarouselContainer}>
        <InstructionsCarousel />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>{appLabels.explainer.button}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.headerBackground}
        barStyle={theme.isDarkTheme ? 'light-content' : 'dark-content'}
      />
    </SafeAreaView>
  );
};

export default ExplainerScreen;
