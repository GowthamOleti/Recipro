import {StyleSheet} from 'react-native';
import {color, font} from './util/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightMode.homeBackground,
    paddingHorizontal: '5%',
  },
  inputContainer: {
    borderRadius: 20,
    padding: '3%',
    maxHeight: '70%',
    minHeight: '65%',
    marginTop: '3%',
    backgroundColor: color.lightMode.textBackground,
    justifyContent: 'space-between',
    shadowColor: color.lightMode.shadow,
    elevation: 10,
  },
  inputText: {
    textAlignVertical: 'top',
    fontSize: 19,
    maxHeight: '90%',
    fontFamily: font.Sans,
    color: color.lightMode.text,
  },
  inputAnimation: {
    transform: [{scaleX: 0.9}, {scaleY: 0.9}],
    marginTop: '9%',
  },
  clearAndPaste: {
    alignSelf: 'flex-end',
    paddingRight: '2%',
    paddingBottom: '2%',
  },
});
