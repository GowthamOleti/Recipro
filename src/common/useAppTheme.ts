import {useContext} from 'react';
import {SettingsContext} from './settingsContext';

export const useAppTheme = () => {
  const {appSettings} = useContext(SettingsContext);

  const isDarkMode = appSettings.isDarkMode;

  const colors = {
    border: isDarkMode ? 'white' : 'black',
    buttonBorder: isDarkMode ? '' : 'black',
    headerBackground: isDarkMode ? '#212121' : '#FAF4F2',
    background: isDarkMode ? '#212121' : '#FAF4F2',
    resultBackground: isDarkMode ? '#212121' : 'white',
    resultButtonBorder: isDarkMode ? '#BDBDBD' : 'black',
    resultFooter: isDarkMode ? '#212121' : '#FAF4F2',
    resultSvg: isDarkMode ? '#BDBDBD' : '#666666',
    yellow: isDarkMode ? '#FFE7AB' : '#FFE7AB',
    shadow: isDarkMode ? 'black' : 'black',
    green: isDarkMode ? '#D1EDBF' : '#D1EDBF',
    text: isDarkMode ? 'white' : 'black',
    greenText: isDarkMode ? '' : '#1C5621',
    yellowText: isDarkMode ? '' : '#6F4F01',
    textBackground: isDarkMode ? 'black' : 'white',
    paginationInFocus: isDarkMode ? '' : '#787171',
    paginationNotInFocus: isDarkMode ? '' : '#CCCCCC',
    toggleTrack: isDarkMode ? '' : '#767577',
    toggleThumb: isDarkMode ? '' : '#f4f3f4',
    common: {
      emailBackground: '#FB1C1C1A',
      emailBorder: '#D41B1B',
      homeSvg: '#7986cb',
      placeHolderText: '#757575',
      tweetBackground: '#03A9F41A',
      tweetBorder: '#03A9F4',
      errorToast: '#CD4848',
      infoToast: '#0288D1',
      link: '#1976D2',
      white: 'white',
      black: 'black',
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
    greenText: string;
    yellowText: string;
    textBackground: string;
    paginationInFocus: string;
    paginationNotInFocus: string;
    toggleTrack: string;
    toggleThumb: string;
    common: {
      emailBackground: string;
      emailBorder: string;
      homeSvg: string;
      placeHolderText: string;
      tweetBackground: string;
      tweetBorder: string;
      errorToast: string;
      link: string;
      white: string;
      black: string;
    };
  };
  fonts: {
    Sans: string;
    SansBold: string;
    SansMedium: string;
  };
}
