import {useContext} from 'react';
import {SettingsContext} from './settingsContext';

export const useAppTheme = () => {
  const {appSettings} = useContext(SettingsContext);

  const isDarkMode = appSettings.isDarkMode;

  const colors = {
    isDarkMode,
    background: isDarkMode ? '#000000' : '#FAF4F2',
    border: isDarkMode ? 'black' : 'white',
    buttonBorder: isDarkMode ? 'black' : 'black',
    divider: isDarkMode ? 'white' : '#757575',
    green: isDarkMode ? '#FF772B' : '#FF772B',
    greenText: isDarkMode ? '#FFFFFF' : '#FFFFFF',
    headerBackground: isDarkMode ? 'black' : '#FAF4F2',
    placeHolderText: isDarkMode ? '#939393' : '#757575',
    resultBackground: isDarkMode ? 'black' : 'white',
    resultButtonBorder: isDarkMode ? '#BDBDBD' : 'black',
    resultFooter: isDarkMode ? '#212121' : '#FAF4F2',
    resultSvg: isDarkMode ? '#BDBDBD' : '#666666',
    shadow: isDarkMode ? 'black' : 'black',
    statusBarContent: isDarkMode
      ? ('light-content' as 'light-content')
      : ('dark-content' as 'dark-content'),
    text: isDarkMode ? 'white' : 'black',
    textBackground: isDarkMode ? '#212121' : 'white',
    toggleTrackOff: isDarkMode ? 'black' : '#767577',
    toggleTrackOn: isDarkMode ? '#133917' : '#D1EDBF',
    // yellow: isDarkMode ? '#CAAD2A' : '#FFE7AB',
    // yellowText: isDarkMode ? '#523C00' : '#6F4F01',
    common: {
      black: 'black',
      emailBackground: '#FB1C1C1A',
      emailBorder: '#D41B1B',
      errorToast: '#CD4848',
      homeSvg: '#7986cb',
      infoToast: '#0288D1',
      link: '#1976D2',
      modalBackground: 'rgba(0,0,0,0.5)',
      toggleThumbOff: '#f4f3f4',
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
    isDarkMode: boolean;
    background: string;
    border: string;
    buttonBorder: string;
    divider: string;
    green: string;
    greenText: string;
    headerBackground: string;
    placeHolderText: string;
    resultBackground: string;
    resultButtonBorder: string;
    resultFooter: string;
    resultSvg: string;
    shadow: string;
    statusBarContent: any;
    text: string;
    textBackground: string;
    toggleTrackOn: string;
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
      toggleThumbOff: string;
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
