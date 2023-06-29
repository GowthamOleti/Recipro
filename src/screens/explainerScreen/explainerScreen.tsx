import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import InstructionsSlider from '../../components/instructionSlider/InstructionsSlider';
import {useTheme} from '../../util/useTheme';
import {getStyles} from './explainerScreen.styles';

const ExplainerScreen = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const navigation = useNavigation<any>();
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
        <Text style={styles.saveButtonText}>{'Go Back'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ExplainerScreen;
