import {StyleSheet} from 'react-native';
import {color, font} from '../../util/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greyBackground: {
    backgroundColor: color.grey,
  },
  blackBackground: {
    backgroundColor: color.black,
  },
  resultText: {
    color: color.white,
    padding: '5%',
    fontSize: 18,
    lineHeight: 25,
    fontFamily: font.Avenir,
  },
  editableText: {
    color: color.white,
    fontSize: 20,
    padding: '5%',
    fontFamily: font.Avenir,
    lineHeight: 25,
  },
});
