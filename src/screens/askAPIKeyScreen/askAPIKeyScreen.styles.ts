import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../common/useAppTheme';

export const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop: '2%',
      backgroundColor: colors.background,
      paddingHorizontal: '5%',
    },
    keyContainer: {
      borderRadius: 30,
      backgroundColor: colors.resultBackground,
      elevation: 5,
    },
    key: {
      color: colors.text,
      fontFamily: fonts.Sans,
      fontSize: 18,
      paddingHorizontal: '5%',
    },
    ApiKeyInstructions: {
      alignSelf: 'center',
      maxWidth: '90%',
      marginTop: '8%',
    },
    ApiKeyInstructionsText: {
      color: colors.text,
      fontFamily: fonts.Sans,
      fontSize: 20,
    },
    buttonContainer: {
      borderRadius: 25,
      backgroundColor: colors.green,
      borderWidth: 1,
      borderColor: colors.buttonBorder,
      width: '50%',
      bottom: '5%',
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
