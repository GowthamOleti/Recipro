import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../../common/useAppTheme';

export const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      bottom: '5%',
      position: 'absolute',
      alignSelf: 'center',
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    actionButtonContainer: {
      borderRadius: 35,
      alignSelf: 'flex-start',
      minWidth: '47%',
    },
    actionButtonText: {
      paddingHorizontal: '5%',
      paddingVertical: '3%',
      alignSelf: 'center',
      fontFamily: fonts.SansMedium,
      fontSize: 19,
    },
    summaryButtonColor: {
      backgroundColor: colors.green,
    },
    rewriteButtonColor: {
      backgroundColor: colors.yellow,
    },
    summaryButtonTextColor: {
      color: colors.greenText,
    },
    rewriteButtonTextColor: {
      color: colors.yellowText,
    },
  });
