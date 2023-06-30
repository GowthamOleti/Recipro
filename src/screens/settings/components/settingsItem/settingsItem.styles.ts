import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../../common/useAppTheme';

export const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginBottom: '10%',
      alignSelf: 'center',
    },
  });
