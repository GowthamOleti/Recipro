import {useAppTheme} from '../common/useAppTheme';

export const useNavigator = () => {
  const {colors, fonts} = useAppTheme();

  const commonScreenOptions = {
    headerStyle: {
      backgroundColor: colors.headerBackground,
    },
    headerTitleStyle: {
      fontFamily: fonts.SansBold,
    },
    headerTintColor: colors.text,
    headerShadowVisible: false,
    headerTitleAlign: 'center' as 'center',
    animation: 'slide_from_right' as 'slide_from_right',
    headerBackTitleVisible: false,
  };

  return {
    commonScreenOptions,
  };
};
