import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../util/useTheme';

export const getStyles = ({colors}: ThemeProps) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    shareCopyContainer: {
      borderWidth: 1,
      borderColor: colors.resultButtonBorder,
      borderRadius: 25,
      justifyContent: 'center',
    },
    shareCopy: {
      alignSelf: 'center',
      paddingHorizontal: '12%',
      paddingVertical: '25%',
    },
    tweetContainer: {
      borderWidth: 1,
      borderColor: colors.common.tweetBorder,
      justifyContent: 'center',
      borderRadius: 30,
      backgroundColor: colors.common.tweetBackground,
    },
    emailContainer: {
      borderWidth: 1,
      borderColor: colors.common.emailBorder,
      justifyContent: 'center',
      borderRadius: 30,
      backgroundColor: colors.common.emailBackground,
    },
    tweetEmail: {
      alignSelf: 'center',
      paddingHorizontal: '6%',
    },
  });
