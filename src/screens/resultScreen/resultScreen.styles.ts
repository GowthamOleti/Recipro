import {StyleSheet} from 'react-native';
import {color, font} from '../../util/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
  resultText: {
    color: color.white,
    padding: '5%',
    fontSize: 20,
    lineHeight: 25,
    fontFamily: font.Avenir,
  },
});
