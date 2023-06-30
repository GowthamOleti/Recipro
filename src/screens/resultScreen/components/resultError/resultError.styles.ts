import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../../util/useAppTheme';

export const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginBottom: '10%',
      alignSelf: 'center',
    },
    errorAnimation: {
      transform: [{scaleX: 1}, {scaleY: 1}],
      marginBottom: '55%',
    },
    errorText: {
      color: 'black',
      fontFamily: fonts.Sans,
      fontSize: 18,
      textAlign: 'center',
      maxWidth: '70%',
    },
    errorButtonContainer: {
      borderRadius: 25,
      backgroundColor: colors.greenButton,
      marginTop: '5%',
      borderWidth: 1,
      borderColor: colors.buttonBorder,
      alignSelf: 'center',
    },
    errorButtonText: {
      color: colors.common.buttonText,
      paddingVertical: '2%',
      paddingHorizontal: '5%',
      alignSelf: 'center',
      fontFamily: fonts.RobotoRegular,
      fontSize: 16,
    },
  });
