import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../common/useAppTheme';

export const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop: '5%',
      backgroundColor: colors.background,
      paddingHorizontal: '5%',
    },
    keyContainer: {
      borderRadius: 30,
      backgroundColor: colors.resultBackground,
      elevation: 5,
    },
    key: {
      color: colors.text,
      fontFamily: fonts.Sans,
      fontSize: 18,
      paddingHorizontal: '5%',
    },
    getInstructionsContainer: {
      alignSelf: 'center',
      maxWidth: '90%',
      marginTop: '10%',
    },
    getInstructionsText: {
      color: colors.common.placeHolderText,
      fontFamily: fonts.Sans,
      fontSize: 20,
      alignSelf: 'center',
    },
    rightArrow: {
      marginTop: '5%',
      alignSelf: 'center',
    },
    saveButtonContainer: {
      borderRadius: 25,
      backgroundColor: colors.greenButton,
      borderWidth: 1,
      borderColor: colors.buttonBorder,
      width: '50%',
      bottom: '10%',
      position: 'absolute',
      alignSelf: 'center',
    },
    saveButtonText: {
      color: colors.common.buttonText,
      padding: '5%',
      alignSelf: 'center',
      fontFamily: fonts.RobotoRegular,
      fontSize: 18,
    },
  });
