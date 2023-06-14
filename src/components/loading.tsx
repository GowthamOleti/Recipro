import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {color} from '../util/theme';

// TODO: Add text under loading indicator

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={color.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
