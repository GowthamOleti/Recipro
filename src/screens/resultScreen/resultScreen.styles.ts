import {StyleSheet} from 'react-native';
import {color, font} from '../../util/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.darkGrey,
    paddingHorizontal: '3%',
  },
  resultContainer: {
    backgroundColor: color.black,
    borderRadius: 15,
    justifyContent: 'space-between',
    minHeight: '45%',
    maxHeight: '96%',
    marginTop: '2%',
    shadowColor: color.yellow,
    elevation: 5,
  },
  resultText: {
    color: color.white,
    padding: '5%',
    fontSize: 19,
    lineHeight: 25,
    fontFamily: font.Sans,
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
