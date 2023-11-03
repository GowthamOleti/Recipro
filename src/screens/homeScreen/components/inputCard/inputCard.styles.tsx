import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../../common/useAppTheme';

export const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      borderRadius: 25,
      padding: '3%',
      maxHeight: '76%',
      minHeight: '65%',
      marginTop: '5%',
      backgroundColor: colors.textBackground,
      justifyContent: 'space-between',
      shadowColor: colors.shadow,
      elevation: 10,
    },
    inputText: {
      textAlignVertical: 'top',
      fontSize: 19,
      height: '88%',
      fontFamily: fonts.Sans,
      color: colors.text,
    },
    clearAndPaste: {
      alignSelf: 'flex-end',
      paddingRight: '2%',
      paddingBottom: '2%',
    },
    illustration: {
      transform: [{scaleX: 0.9}, {scaleY: 0.9}],
      marginTop: '3%',
    },
  });
