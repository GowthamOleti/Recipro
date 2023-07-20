import {useAppTheme} from './useAppTheme';
import {useToast} from 'react-native-toast-notifications';

interface ToastProps {
  message: string;
  type: 'info' | 'error';
}

export const useToastMessage = () => {
  const toast = useToast();
  const theme = useAppTheme();

  const showToast = ({message, type}: ToastProps) => {
    toast.show(message, {
      type: 'danger',
      dangerColor:
        type === 'error'
          ? theme.colors.common.errorToast
          : theme.colors.common.infoToast,
      placement: 'bottom',
      duration: type === 'error' ? 2000 : 1000,
      animationType: 'zoom-in',
      style: {
        borderRadius: 15,
        marginBottom: '26%',
        width: '90%',
        height: '35%',
      },
      textStyle: {
        fontFamily: theme.fonts.Sans,
        alignSelf: 'center',
        fontSize: 17,
      },
    });
  };

  return {
    showToast,
  };
};
