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
  actionButtonContainer: {
    borderRadius: 25,
    backgroundColor: color.buttonBackground,
    alignSelf: 'flex-start',
    minWidth: '45%',
  },
  actionButtonText: {
    color: color.black,
    padding: '7%',
    alignSelf: 'center',
    fontFamily: font.AvenirBold,
    fontSize: 17,
  },
});
