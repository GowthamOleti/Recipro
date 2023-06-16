import {StyleSheet} from 'react-native';
import {color, font} from '../../util/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: '6%',
    marginBottom: '5%',
  },
  copy: {
    marginLeft: '5%',
  },
  buttonContainer: {
    marginLeft: '6%',
    borderRadius: 25,
    backgroundColor: color.buttonBackground,
    width: '25%',
  },
  buttonText: {
    fontFamily: font.AvenirBold,
    color: color.black,
    alignSelf: 'center',
    paddingTop: '8%',
    fontSize: 16,
  },
  margin: {
    marginTop: '1%',
  },
});
