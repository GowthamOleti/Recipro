import {StyleSheet} from 'react-native';
import {color, font} from '../../util/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightMode.resultBackground,
  },
  resultContainer: {
    backgroundColor: color.lightMode.textBackground,
    height: '85%',
  },
  resultText: {
    color: color.lightMode.text,
    padding: '5%',
    fontSize: 19,
    lineHeight: 25,
    fontFamily: font.Sans,
  },
  resultActions: {
    backgroundColor: color.lightMode.resultFooter,
    height: '15%',
    justifyContent: 'center',
  },
});
