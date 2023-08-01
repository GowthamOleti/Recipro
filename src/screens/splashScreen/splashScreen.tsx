import React from 'react';
import {StatusBar, View} from 'react-native';
import {useSplashScreen} from './useSplashScreen';

const SplashScreen = () => {
  const {theme, styles} = useSplashScreen();
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.colors.statusBarContent}
      />
    </View>
  );
};

export default SplashScreen;
