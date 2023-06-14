import {StyleSheet} from 'react-native';
import {color, font} from '../../util/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: '5%',
    alignSelf: 'center',
  },
  // TODO: Fix Truncated Text
  actionButtonContainer: {
    borderRadius: 25,
    width: '45%',
    backgroundColor: color.buttonBackground,
  },
  actionButtonText: {
    color: color.black,
    padding: '7%',
    alignSelf: 'center',
    fontFamily: font.Avenir,
    fontSize: 17,
  },
});
