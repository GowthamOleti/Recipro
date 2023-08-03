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
      backgroundColor: colors.textBackground,
      elevation: 5,
    },
    key: {
      color: colors.text,
      fontFamily: fonts.Sans,
      fontSize: 18,
      paddingHorizontal: '5%',
      paddingTop: '4%',
      paddingBottom: '4%',
    },
    apiKeyInstructions: {
      alignSelf: 'center',
      maxWidth: '90%',
      marginTop: '8%',
    },
    apiKeyInstructionsText: {
      color: colors.text,
      fontFamily: fonts.Sans,
      fontSize: 20,
    },
    buttonContainer: {
      borderRadius: 25,
      backgroundColor: colors.green,
      width: '50%',
      bottom: '5%',
      position: 'absolute',
      alignSelf: 'center',
    },
    buttonText: {
      color: colors.greenText,
      padding: '5%',
      alignSelf: 'center',
      fontFamily: fonts.SansMedium,
      fontSize: 18,
    },
    loading: {
      alignSelf: 'center',
      padding: '7%',
    },
  });
