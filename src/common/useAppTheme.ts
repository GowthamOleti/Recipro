//import {useColorScheme} from 'react-native';

// import {useContext} from 'react';
// import {AppSetting} from './constants';
// import {SettingsContext} from './settingsContext';

export const useAppTheme = () => {
  //const isDarkTheme = useColorScheme() === 'dark';
  //const {appSettings} = useContext(SettingsContext);

  //const isDarkTheme = appSettings.get(AppSetting.IS_DARK_THEME);
  const isDarkTheme = false;

  const colors = {
    border: isDarkTheme ? 'white' : 'black',
    buttonBorder: isDarkTheme ? '' : 'black',
    headerBackground: isDarkTheme ? '#212121' : '#FAF4F2',
    background: isDarkTheme ? '#212121' : '#FAF4F2',
    resultBackground: isDarkTheme ? '#212121' : 'white',
    resultButtonBorder: isDarkTheme ? '#BDBDBD' : 'black',
    resultFooter: isDarkTheme ? '#212121' : '#FAF4F2',
    resultSvg: isDarkTheme ? '#BDBDBD' : '#666666',
    yellow: isDarkTheme ? '#FFE7AB' : '#FFE7AB',
    shadow: isDarkTheme ? 'black' : 'black',
    green: isDarkTheme ? '#D1EDBF' : '#D1EDBF',
    text: isDarkTheme ? 'white' : 'black',
    textBackground: isDarkTheme ? 'black' : 'white',
    paginationInFocus: isDarkTheme ? '' : '#787171',
    paginationNotInFocus: isDarkTheme ? '' : '#CCCCCC',
    toggleTrack: isDarkTheme ? '' : '#767577',
    toggleThumb: isDarkTheme ? '' : '#f4f3f4',
    common: {
      buttonText: 'black',
      emailBackground: '#FB1C1C1A',
      emailBorder: '#D41B1B',
      homeSvg: '#7986cb',
      placeHolderText: '#757575',
      tweetBackground: '#03A9F41A',
      tweetBorder: '#03A9F4',
      errorToast: '#CD4848',
      link: '#1976D2',
    },
  };
  const fonts = {
    RobotoMono: 'Roboto-Mono',
    Sans: 'Product-Sans',
    SansBold: 'Product-Sans-Bold',
    RobotoRegular: 'Roboto-Regular',
  };
  return {colors, fonts, isDarkTheme};
};

export interface ThemeProps {
  colors: {
    border: string;
    buttonBorder: string;
    headerBackground: string;
    background: string;
    resultBackground: string;
    resultButtonBorder: string;
    resultFooter: string;
    resultSvg: string;
    yellow: string;
    shadow: string;
    green: string;
    text: string;
    textBackground: string;
    paginationInFocus: string;
    paginationNotInFocus: string;
    toggleTrack: string;
    toggleThumb: string;
    common: {
      buttonText: string;
      emailBackground: string;
      emailBorder: string;
      homeSvg: string;
      placeHolderText: string;
      tweetBackground: string;
      tweetBorder: string;
      errorToast: string;
      link: string;
    };
  };
  fonts: {
    RobotoMono: string;
    Sans: string;
    SansBold: string;
    RobotoRegular: string;
  };
  isDarkTheme: boolean;
}
