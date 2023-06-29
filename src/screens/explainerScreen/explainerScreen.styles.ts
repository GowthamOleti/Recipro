import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../util/useTheme';

export const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: '2%',
      backgroundColor: colors.homeBackground,
      paddingHorizontal: '5%',
    },
    instructionsSliderContainer: {
      borderRadius: 30,
      padding: '3%',
      height: '75%',
      backgroundColor: colors.textBackground,
      justifyContent: 'center',
      elevation: 5,
      alignSelf: 'center',
    },
    saveButtonContainer: {
      borderRadius: 25,
      backgroundColor: colors.summarizeButton,
      borderWidth: 1,
      borderColor: colors.buttonBorder,
      width: '50%',
      bottom: '10%',
      position: 'absolute',
      alignSelf: 'center',
    },
    saveButtonText: {
      color: colors.common.buttonText,
      padding: '5%',
      alignSelf: 'center',
      fontFamily: fonts.RobotoRegular,
      fontSize: 18,
    },
  });
