import {StyleSheet} from 'react-native';
import {color, font} from '../../util/theme';

export const styles = StyleSheet.create({
  container: {
    borderColor: color.white,
    marginTop: '10%',
    backgroundColor: color.grey,
    borderRadius: 27,
    paddingVertical: '3%',
  },
  resultTitleText: {
    color: color.sectionTitle,
    fontFamily: font.Avenir,
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  resultText: {
    color: 'white',
    fontFamily: font.Avenir,
    padding: '5%',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '600',
  },
});
