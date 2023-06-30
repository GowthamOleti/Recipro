import React from 'react';
import {StyleSheet} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import {Animations} from '../../../../assets/animations';

export const HomeIllustration = () => {
  return (
    <AnimatedLottieView
      style={styles.container}
      source={Animations.Home}
      autoPlay
      loop={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    transform: [{scaleX: 0.9}, {scaleY: 0.9}],
    marginTop: '9%',
  },
});
