import {useContext} from 'react';
import {SettingsContext} from './settingsContext';

export const useAppTheme = () => {
  const {appSettings} = useContext(SettingsContext);

  const isDarkMode = appSettings.isDarkMode;

  const colors = {
    background: isDarkMode ? '#212121' : '#FAF4F2',
    border: isDarkMode ? 'white' : 'black',
    buttonBorder: isDarkMode ? '' : 'black',
    green: isDarkMode ? '#D1EDBF' : '#D1EDBF',
    greenText: isDarkMode ? '' : '#1C5621',
    headerBackground: isDarkMode ? '#212121' : '#FAF4F2',
    paginationInFocus: isDarkMode ? '' : '#787171',
    paginationNotInFocus: isDarkMode ? '' : '#CCCCCC',
    resultBackground: isDarkMode ? '#212121' : 'white',
    resultButtonBorder: isDarkMode ? '#BDBDBD' : 'black',
    resultFooter: isDarkMode ? '#212121' : '#FAF4F2',
    resultSvg: isDarkMode ? '#BDBDBD' : '#666666',
    shadow: isDarkMode ? 'black' : 'black',
    statusBarContent: isDarkMode
      ? ('light-content' as 'light-content')
      : ('dark-content' as 'dark-content'),
    text: isDarkMode ? 'white' : 'black',
    textBackground: isDarkMode ? 'black' : 'white',
    toggleThumb: isDarkMode ? '' : '#f4f3f4',
    toggleTrack: isDarkMode ? '' : '#767577',
    yellow: isDarkMode ? '#FFE7AB' : '#FFE7AB',
    yellowText: isDarkMode ? '' : '#6F4F01',
    common: {
      black: 'black',
      emailBackground: '#FB1C1C1A',
      emailBorder: '#D41B1B',
      errorToast: '#CD4848',
      homeSvg: '#7986cb',
      infoToast: '#0288D1',
      link: '#1976D2',
      modalBackground: 'rgba(0,0,0,0.5)',
      placeHolderText: '#757575',
      tweetBackground: '#03A9F41A',
      tweetBorder: '#03A9F4',
      white: 'white',
    },
  };
  const fonts = {
    Sans: 'Product-Sans-Regular',
    SansMedium: 'Product-Sans-Medium',
    SansBold: 'Product-Sans-Bold',
  };
  return {colors, fonts};
};

export interface ThemeProps {
  colors: {
    background: string;
    border: string;
    buttonBorder: string;
    green: string;
    greenText: string;
    headerBackground: string;
    paginationInFocus: string;
    paginationNotInFocus: string;
    resultBackground: string;
    resultButtonBorder: string;
    resultFooter: string;
    resultSvg: string;
    shadow: string;
    statusBarContent: any;
    text: string;
    textBackground: string;
    toggleThumb: string;
    toggleTrack: string;
    yellow: string;
    yellowText: string;
    common: {
      black: string;
      emailBackground: string;
      emailBorder: string;
      errorToast: string;
      homeSvg: string;
      link: string;
      modalBackground: string;
      placeHolderText: string;
      tweetBackground: string;
      tweetBorder: string;
      white: string;
    };
  };
  fonts: {
    Sans: string;
    SansBold: string;
    SansMedium: string;
  };
}
