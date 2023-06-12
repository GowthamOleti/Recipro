import {StyleSheet} from 'react-native';
import {color, font} from '../../util/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '10%',
  },
  askApiKeyTitle: {
    color: color.sectionTitle,
    fontFamily: font.Avenir,
    fontSize: 20,
    marginBottom: '5%',
    fontWeight: '800',
  },
  key: {
    backgroundColor: color.white,
    borderRadius: 5,
    color: color.black,
  },
  doneButtonContainer: {
    borderRadius: 25,
    width: '20%',
    borderColor: color.white,
    borderWidth: 2,
    marginTop: '5%',
  },
  doneButtonText: {
    color: color.white,
    padding: '5%',
    alignSelf: 'center',
  },
});
