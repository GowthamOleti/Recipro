import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {color, font} from '../util/theme';

// TODO: Add text under loading indicator

interface Props {
  loadingText?: string;
}

export const Loading = ({loadingText}: Props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        style={{transform: [{scaleX: 1.7}, {scaleY: 1.7}]}}
        color={color.white}
      />
      {loadingText?.length && (
        <Text style={styles.loadingText}>{loadingText}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  loadingText: {
    fontFamily: font.Avenir,
    alignSelf: 'center',
    marginTop: '10%',
    fontSize: 17,
  },
});
