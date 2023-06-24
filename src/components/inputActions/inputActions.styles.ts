import {StyleSheet} from 'react-native';
import {color, font} from '../../util/theme';

export const styles = StyleSheet.create({
  container: {
    bottom: '5%',
    position: 'absolute',
    alignSelf: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButtonContainer: {
    borderRadius: 35,
    alignSelf: 'flex-start',
    minWidth: '47%',
    borderWidth: 1,
    borderColor: color.lightMode.buttonBorder,
  },
  actionButtonText: {
    color: color.lightMode.buttonText,
    paddingHorizontal: '5%',
    paddingVertical: '4%',
    alignSelf: 'center',
    fontFamily: font.RobotoRegular,
    fontSize: 19,
  },
  summaryButtonColor: {
    backgroundColor: color.lightMode.summarizeButton,
  },
  rewriteButtonColor: {
    backgroundColor: color.lightMode.rewriteButton,
  },
});
