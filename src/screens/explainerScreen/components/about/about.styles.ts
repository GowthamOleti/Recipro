import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../../common/useAppTheme';

export const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    contentContainer: {
      paddingRight: '3%',
      paddingBottom: '8%',
    },
    text: {
      fontFamily: fonts.Sans,
      fontSize: 18,
      color: colors.text,
      flexDirection: 'row',
    },
    logo: {
      alignSelf: 'center',
      marginBottom: '6%',
    },
  });
