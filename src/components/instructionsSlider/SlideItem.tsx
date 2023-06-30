import {StyleSheet, Text, View, Dimensions, Linking} from 'react-native';
import React from 'react';
import {ThemeProps, useAppTheme} from '../../util/useAppTheme';
import {isLink} from '../../util/helpers';

const {width, height} = Dimensions.get('screen');

interface SlideItemProps {
  item: {
    title: string;
    body: string;
    link?: string;
  };
}

const SlideItem = ({item}: SlideItemProps) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const onLinkPress = (link?: string) => {
    if (link && isLink(link ?? '')) {
      Linking.openURL(link);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.body}</Text>
      {item.link && (
        <Text onPress={() => onLinkPress(item.link)} style={styles.link}>
          {item.link}
        </Text>
      )}
    </View>
  );
};

export default SlideItem;

const getStyles = ({fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      width,
      height,
      paddingLeft: '2%',
      paddingTop: '2%',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#787171',
      fontFamily: fonts.Sans,
    },
    description: {
      fontSize: 22,
      marginVertical: 12,
      color: 'black',
      fontFamily: fonts.Sans,
      width: '85%',
    },
    link: {
      fontSize: 22,
      marginVertical: 12,
      color: '#1976D2',
      fontFamily: fonts.Sans,
      width: '85%',
    },
  });
