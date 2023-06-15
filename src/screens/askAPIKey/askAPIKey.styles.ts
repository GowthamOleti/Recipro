import {StyleSheet} from 'react-native';
import {color, font} from '../../util/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '10%',
  },
  askApiKeyTitle: {
    fontFamily: font.Avenir,
    fontSize: 20,
    marginBottom: '5%',
    color: color.white,
  },
  key: {
    backgroundColor: color.grey,
    borderRadius: 5,
    color: color.white,
    fontFamily: font.Avenir,
    fontSize: 18,
  },
  doneButtonContainer: {
    borderRadius: 25,
    width: '20%',
    backgroundColor: color.buttonBackground,
    marginTop: '5%',
  },
  doneButtonText: {
    color: color.black,
    padding: '5%',
    alignSelf: 'center',
    fontFamily: font.Avenir,
  },
});
