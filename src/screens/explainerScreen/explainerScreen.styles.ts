import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../common/useAppTheme';

export const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: '2%',
      backgroundColor: colors.background,
      paddingHorizontal: '5%',
    },
    instructionsCarouselContainer: {
      borderRadius: 30,
      padding: '3%',
      height: '75%',
      backgroundColor: colors.textBackground,
      justifyContent: 'center',
      elevation: 5,
      alignSelf: 'center',
    },
    buttonContainer: {
      borderRadius: 25,
      backgroundColor: colors.greenButton,
      borderWidth: 1,
      borderColor: colors.buttonBorder,
      width: '50%',
      bottom: '10%',
      position: 'absolute',
      alignSelf: 'center',
    },
    buttonText: {
      color: colors.common.buttonText,
      padding: '5%',
      alignSelf: 'center',
      fontFamily: fonts.RobotoRegular,
      fontSize: 18,
    },
  });
