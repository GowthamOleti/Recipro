import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../../common/useAppTheme';

export const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      paddingVertical: '7%',
      paddingHorizontal: '7%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      color: colors.text,
      fontSize: 20,
      fontFamily: fonts.Sans,
    },
  });
