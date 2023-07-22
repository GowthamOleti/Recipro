import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../common/useAppTheme';

export const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      padding: '7%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      color: colors.text,
      fontSize: 17,
      fontFamily: fonts.SansMedium,
    },
    subtext: {
      color: colors.common.placeHolderText,
      fontSize: 13,
      fontFamily: fonts.Sans,
      marginTop: '2%',
    },
  });
