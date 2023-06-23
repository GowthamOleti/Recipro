import {StyleSheet} from 'react-native';
import {color, font} from '../../util/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '10%',
  },
  askApiKeyTitle: {
    fontFamily: font.Sans,
    fontSize: 20,
    color: color.lightMode.text,
    paddingBottom: '5%',
  },
  key: {
    borderRadius: 10,
    borderColor: color.lightMode.buttonBorder,
    borderWidth: 1,
    color: color.lightMode.text,
    fontFamily: font.Sans,
    fontSize: 18,
  },
  doneButtonContainer: {
    borderRadius: 25,
    alignSelf: 'flex-start',
    backgroundColor: color.lightMode.summarizeButton,
    marginTop: '5%',
    borderWidth: 1,
    borderColor: color.lightMode.buttonBorder,
  },
  doneButtonText: {
    color: color.lightMode.text,
    paddingVertical: '2%',
    paddingHorizontal: '5%',
    alignSelf: 'center',
    fontFamily: font.RobotoRegular,
    fontSize: 16,
  },
});
