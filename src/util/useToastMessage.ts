import {useTheme} from './useTheme';
import {useToast} from 'react-native-toast-notifications';

export const useToastMessage = () => {
  const toast = useToast();
  const theme = useTheme();

  const showHomeScreenToast = (message: string) => {
    toast.show(message, {
      type: 'danger',
      dangerColor: '#f2615f',
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
