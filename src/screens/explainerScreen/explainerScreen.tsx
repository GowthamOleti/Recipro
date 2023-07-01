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
import {StackNavigation} from '../../navigation/navigationTypes';
import {useAppTheme} from '../../common/useAppTheme';
import {getStyles} from './explainerScreen.styles';
import InstructionsCarousel from './components/instructionsCarousel/instructionsCarousel';

const ExplainerScreen = () => {
  const theme = useAppTheme();
  const styles = getStyles(theme);
  const navigation = useNavigation<StackNavigation>();

  return (
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
  );
};

export default ExplainerScreen;
