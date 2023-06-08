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
    padding: 15,
    fontSize: 18,
    lineHeight: 25,
    fontFamily: font.Avenir,
  },
  editableText: {
    color: color.white,
    fontSize: 20,
    padding: 20,
    fontFamily: font.Avenir,
    lineHeight: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    position: 'absolute',
    bottom: 35,
    alignSelf: 'center',
  },
  actionButtonContainer: {
    borderRadius: 25,
    width: '45%',
    borderColor: color.white,
    borderWidth: 2,
  },
  actionButtonText: {
    color: color.white,
    padding: 10,
    alignSelf: 'center',
    fontFamily: font.Avenir,
  },
});
