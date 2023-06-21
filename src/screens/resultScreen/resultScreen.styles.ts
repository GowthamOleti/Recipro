import {StyleSheet} from 'react-native';
import {color, font} from '../../util/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.grey,
    paddingHorizontal: '5%',
  },
  resultContainer: {
    backgroundColor: color.black,
    borderRadius: 20,
    justifyContent: 'space-between',
    minHeight: '40%',
    maxHeight: '95%',
  },
  resultText: {
    color: color.white,
    padding: '5%',
    fontSize: 19,
    lineHeight: 25,
    fontFamily: font.Avenir,
  },
  retryButton: {
    paddingTop: '6%',
    paddingRight: '5%',
  },
  resultActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
