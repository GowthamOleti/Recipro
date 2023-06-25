import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../util/useTheme';

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
      borderWidth: 1,
      borderColor: colors.buttonBorder,
    },
    actionButtonText: {
      color: colors.common.buttonText,
      paddingHorizontal: '5%',
      paddingVertical: '3%',
      alignSelf: 'center',
      fontFamily: fonts.RobotoRegular,
      fontSize: 19,
    },
    summaryButtonColor: {
      backgroundColor: colors.summarizeButton,
    },
    rewriteButtonColor: {
      backgroundColor: colors.rewriteButton,
    },
  });
