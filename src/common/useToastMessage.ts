import {useAppTheme} from './useAppTheme';
import {useToast} from 'react-native-toast-notifications';

export const useToastMessage = () => {
  const toast = useToast();
  const theme = useAppTheme();

  const showErrorToast = (message: string) => {
    toast.show(message, {
      type: 'danger',
      dangerColor: theme.colors.common.errorToast,
      placement: 'bottom',
      duration: 3000,
      animationType: 'slide-in',
      style: {
        borderRadius: 15,
        marginBottom: '30%',
        width: '90%',
        height: '32%',
      },
      textStyle: {
        fontFamily: theme.fonts.Sans,
        alignSelf: 'center',
        fontSize: 17,
      },
    });
  };

  return {
    showErrorToast,
  };
};
