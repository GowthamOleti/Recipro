import {StyleSheet, Text, View, Linking} from 'react-native';
import React from 'react';
import {ThemeProps, useAppTheme} from '../../../common/useAppTheme';
import {screenDimensions} from '../../../util/helpers';

interface CarouselPageProps {
  item: {
    title: string;
    body: string;
    link?: string;
  };
}

const CarouselPage = ({item}: CarouselPageProps) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.body}</Text>
      {item.link && (
        <Text
          onPress={() => Linking.openURL(item.link ?? '')}
          style={styles.link}>
          {item.link}
        </Text>
      )}
    </View>
  );
};

export default CarouselPage;

const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      width: screenDimensions.width,
      height: screenDimensions.height,
      paddingLeft: '2%',
      paddingTop: '2%',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.paginationInFocus,
      fontFamily: fonts.Sans,
    },
    description: {
      fontSize: 21,
      marginVertical: 12,
      color: colors.text,
      fontFamily: fonts.Sans,
      width: '85%',
    },
    link: {
      fontSize: 22,
      marginVertical: 12,
      color: colors.common.link,
      fontFamily: fonts.Sans,
      width: '85%',
    },
  });
