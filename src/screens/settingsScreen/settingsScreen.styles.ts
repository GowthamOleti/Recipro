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
      marginBottom: '10%',
    },
    secondSection: {
      backgroundColor: colors.textBackground,
      borderRadius: 30,
    },
    divider: {
      backgroundColor: colors.common.placeHolderText,
      height: 0.5,
    },
  });
