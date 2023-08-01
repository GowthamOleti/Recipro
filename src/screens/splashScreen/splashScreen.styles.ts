import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../common/useAppTheme';

export const getStyles = ({colors}: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    splashLoading: {
      alignSelf: 'center',
      transform: [{scaleX: 1}, {scaleY: 1}],
      marginBottom: '10%',
    },
  });
