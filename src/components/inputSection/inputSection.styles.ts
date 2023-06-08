import {StyleSheet} from 'react-native';
import {color, font} from '../../util/theme';

export const styles = StyleSheet.create({
  inputTextTitle: {
    color: color.sectionTitle,
    fontFamily: font.Avenir,
    fontSize: 20,
    marginBottom: '2%',
    fontWeight: '800',
  },
  inputText: {
    color: color.white,
    fontFamily: font.Avenir,
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '700',
  },
});
