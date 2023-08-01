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
      width: 60,
      height: 60,
      alignSelf: 'center',
      borderRadius: 10,
      marginBottom: '7%',
    },
  });
