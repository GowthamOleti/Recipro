import {useAppTheme} from './useAppTheme';
import {useToast} from 'react-native-toast-notifications';

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
  return {
    showHomeScreenToast,
  };
};
