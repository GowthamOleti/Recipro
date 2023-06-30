import {StyleSheet, Animated, View} from 'react-native';
import React from 'react';
import {screenDimensions} from '../../../util/helpers';
import {useAppTheme} from '../../../common/useAppTheme';

interface PaginationProps {
  data: {
    title: string;
    body: string;
    link?: string;
  }[];
  scrollX: Animated.Value;
}

const Pagination = ({data, scrollX}: PaginationProps) => {
  const width = screenDimensions.width;
  const colors = useAppTheme().colors;
  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: [
            colors.paginationNotInFocus,
            colors.paginationInFocus,
            colors.paginationNotInFocus,
          ],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={index.toString()}
            style={[styles.dot, {width: dotWidth, backgroundColor}]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    bottom: '5%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: 12,
    borderRadius: 10,
    marginHorizontal: 3,
  },
});
