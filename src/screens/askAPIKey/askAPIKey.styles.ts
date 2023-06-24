import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../util/useTheme';

export const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: '10%',
    },
    askApiKeyTitle: {
      fontFamily: fonts.Sans,
      fontSize: 20,
      color: colors.text,
      paddingBottom: '5%',
    },
    key: {
      borderRadius: 10,
      borderColor: colors.buttonBorder,
      borderWidth: 1,
      color: colors.text,
      fontFamily: fonts.Sans,
      fontSize: 18,
    },
    doneButtonContainer: {
      borderRadius: 25,
      alignSelf: 'flex-start',
      backgroundColor: colors.summarizeButton,
      marginTop: '5%',
      borderWidth: 1,
      borderColor: colors.buttonBorder,
    },
    doneButtonText: {
      color: colors.text,
      paddingVertical: '2%',
      paddingHorizontal: '5%',
      alignSelf: 'center',
      fontFamily: fonts.RobotoRegular,
      fontSize: 16,
    },
  });
