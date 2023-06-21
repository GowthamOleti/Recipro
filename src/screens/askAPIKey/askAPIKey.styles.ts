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
    color: color.white,
  },
  instructions: {
    fontFamily: font.Avenir,
    fontSize: 20,
    marginBottom: '5%',
    color: color.blue,
  },
  key: {
    backgroundColor: color.black,
    borderRadius: 10,
    borderColor: color.white,
    borderWidth: 1,
    color: color.white,
    fontFamily: font.Avenir,
    fontSize: 18,
  },
  doneButtonContainer: {
    borderRadius: 25,
    alignSelf: 'flex-start',
    backgroundColor: color.buttonBackground,
    marginTop: '5%',
  },
  doneButtonText: {
    color: color.black,
    paddingVertical: '2%',
    paddingHorizontal: '5%',
    alignSelf: 'center',
    fontFamily: font.AvenirBold,
    fontSize: 16,
  },
});
