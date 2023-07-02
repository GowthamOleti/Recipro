import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../../common/useAppTheme';

export const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      padding: '7%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      color: colors.text,
      fontSize: 20,
      fontFamily: fonts.Sans,
    },
  });
