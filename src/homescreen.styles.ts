import {StyleSheet} from 'react-native';
import {ThemeProps} from './util/useAppTheme';

export const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: '5%',
    },
    inputContainer: {
      borderRadius: 20,
      padding: '3%',
      maxHeight: '70%',
      minHeight: '65%',
      marginTop: '3%',
      backgroundColor: colors.textBackground,
      justifyContent: 'space-between',
      shadowColor: colors.shadow,
      elevation: 10,
    },
    inputText: {
      textAlignVertical: 'top',
      fontSize: 19,
      maxHeight: '90%',
      fontFamily: fonts.Sans,
      color: colors.text,
    },
    clearAndPaste: {
      alignSelf: 'flex-end',
      paddingRight: '2%',
      paddingBottom: '2%',
    },
  });
