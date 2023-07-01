import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../common/useAppTheme';

export const getStyles = ({colors}: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: '5%',
    },
    firstSection: {
      backgroundColor: colors.textBackground,
      borderRadius: 30,
    },
    secondSection: {
      backgroundColor: colors.textBackground,
      borderRadius: 30,
      marginTop: '10%',
    },
    divider: {
      backgroundColor: colors.common.placeHolderText,
      height: 0.5,
    },
  });
