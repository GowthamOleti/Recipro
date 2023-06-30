import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../util/useAppTheme';

export const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.resultBackground,
    },
    resultContainer: {
      backgroundColor: colors.textBackground,
      height: '85%',
    },
    resultText: {
      color: colors.text,
      padding: '5%',
      fontSize: 19,
      lineHeight: 25,
      fontFamily: fonts.Sans,
    },
    resultActions: {
      backgroundColor: colors.resultFooter,
      height: '15%',
      justifyContent: 'center',
      elevation: 10,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    },
  });
