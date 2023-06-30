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
import InstructionsSlider from '../../components/instructionsSlider/InstructionsSlider';
import {StackNavigation} from '../../navigation/navigationTypes';
import {useAppTheme} from '../../util/useAppTheme';
import {getStyles} from './explainerScreen.styles';

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
      <View style={styles.instructionsSliderContainer}>
        <InstructionsSlider />
      </View>
      <TouchableOpacity
        style={styles.saveButtonContainer}
        onPress={() => navigation.goBack()}>
        <Text style={styles.saveButtonText}>{appLabels.explainer.button}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ExplainerScreen;
