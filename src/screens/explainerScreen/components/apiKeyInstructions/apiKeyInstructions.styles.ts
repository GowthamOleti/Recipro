import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../../common/useAppTheme';

export const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    contentContainer: {
      paddingRight: '4%',
      paddingBottom: '10%',
      marginBottom: '50%',
    },
    text: {
      fontFamily: fonts.Sans,
      fontSize: 18,
      color: colors.text,
    },
  });
