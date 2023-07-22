import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../../common/useAppTheme';

export const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.common.modalBackground,
    },
    contentContainer: {
      backgroundColor: colors.textBackground,
      borderRadius: 30,
      alignSelf: 'center',
      width: '90%',
      paddingVertical: '10%',
    },
    buttonContainer: {
      borderRadius: 25,
      marginVertical: '3%',
      marginHorizontal: '15%',
    },
    text: {
      marginVertical: '5%',
      textAlign: 'center',
      fontSize: 17,
      fontFamily: fonts.SansMedium,
    },
    readButtonColor: {
      backgroundColor: colors.green,
    },
    writeButtonColor: {
      backgroundColor: colors.yellow,
    },
  });
