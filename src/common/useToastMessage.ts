import {useAppTheme} from './useAppTheme';
import {useToast} from 'react-native-toast-notifications';

// TODO: Clean up

export const useToastMessage = () => {
  const toast = useToast();
  const theme = useAppTheme();

  const showHomeScreenToast = (message: string) => {
    toast.show(message, {
      type: 'danger',
      dangerColor: theme.colors.common.errorToast,
      placement: 'top',
      duration: 3000,
      animationType: 'slide-in',
      style: {
        borderRadius: 30,
        marginTop: '25%',
        width: '90%',
        height: '58%',
      },
      textStyle: {
        fontFamily: theme.fonts.Sans,
        alignSelf: 'center',
        fontSize: 17,
      },
    });
  };

  const showAskApiKeyScreenToast = () => {
    toast.show('Invalid API Key', {
      type: 'danger',
      dangerColor: theme.colors.common.errorToast,
      placement: 'top',
      duration: 3000,
      animationType: 'slide-in',
      style: {
        borderRadius: 30,
        marginTop: '60%',
        width: '90%',
        height: '45%',
      },
      textStyle: {
        fontFamily: theme.fonts.Sans,
        alignSelf: 'center',
        fontSize: 17,
      },
    });
  };

  const showResultScreenToast = () => {
    toast.show('Twitter app is not installed.', {
      type: 'danger',
      dangerColor: theme.colors.common.errorToast,
      placement: 'bottom',
      duration: 3000,
      animationType: 'slide-in',
      style: {
        borderRadius: 30,
        marginBottom: '60%',
        width: '90%',
        height: '45%',
      },
      textStyle: {
        fontFamily: theme.fonts.Sans,
        alignSelf: 'center',
        fontSize: 17,
      },
    });
  };

  return {
    showHomeScreenToast,
    showAskApiKeyScreenToast,
    showResultScreenToast,
  };
};
