import {StyleSheet} from 'react-native';
import {color, font} from '../../util/theme';

export const styles = StyleSheet.create({
  container: {
    bottom: '5%',
    position: 'absolute',
    alignSelf: 'center',
  },
  upArrow: {
    alignSelf: 'center',
    bottom: '25%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButtonContainer: {
    borderRadius: 35,
    backgroundColor: color.buttonBackground,
    alignSelf: 'flex-start',
    minWidth: '45%',
  },
  actionButtonText: {
    color: color.black,
    paddingHorizontal: '5%',
    paddingVertical: '4%',
    alignSelf: 'center',
    fontFamily: font.AvenirBold,
    fontSize: 17,
  },
});
