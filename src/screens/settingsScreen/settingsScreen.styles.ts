import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../common/useAppTheme';

export const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: '5%',
    },
    firstSection: {
      backgroundColor: colors.textBackground,
      borderRadius: 30,
      marginBottom: '10%',
    },
    secondSection: {
      backgroundColor: colors.textBackground,
      borderRadius: 30,
    },
    divider: {
      borderBottomColor: colors.common.placeHolderText,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    version: {
      fontFamily: fonts.Sans,
      fontSize: 17,
      alignSelf: 'center',
      color: colors.text,
      marginTop: '20%',
    },
  });
