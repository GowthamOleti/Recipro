import React from 'react';
import {StyleSheet, View} from 'react-native';
import Lottie from 'lottie-react-native';
import {Animations} from '../../../../assets/animations';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <Lottie
        style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
        source={Animations.Loading}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: '10%',
  },
});
