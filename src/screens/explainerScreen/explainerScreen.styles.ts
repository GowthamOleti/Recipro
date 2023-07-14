import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../common/useAppTheme';

export const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: '2%',
      backgroundColor: colors.background,
      paddingLeft: '5%',
      paddingRight: '1%',
    },
    buttonContainer: {
      borderRadius: 25,
      backgroundColor: colors.yellow,
      borderWidth: 1,
      borderColor: colors.buttonBorder,
      width: '50%',
      bottom: '5%',
      position: 'absolute',
      alignSelf: 'center',
    },
    buttonText: {
      color: colors.common.buttonText,
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
