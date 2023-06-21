import React from 'react';
import {StyleSheet, View} from 'react-native';
import {font} from '../util/theme';
import Lottie from 'lottie-react-native';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <Lottie
        style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
        source={require('../../assets/animations/loading.json')}
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
  },
  loadingText: {
    fontFamily: font.Sans,
    alignSelf: 'center',
    marginTop: '10%',
    fontSize: 17,
  },
});
