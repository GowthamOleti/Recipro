import {useColorScheme} from 'react-native';

export const useTheme = () => {
  const isDarkTheme = useColorScheme() === 'dark';
  //const isDarkTheme = false;

  const colors = {
    border: isDarkTheme ? 'white' : 'black',
    buttonBorder: isDarkTheme ? '' : 'black',
    headerBackground: isDarkTheme ? '#212121' : '#FAF4F2',
    homeBackground: isDarkTheme ? '#212121' : '#FAF4F2',
    resultBackground: isDarkTheme ? '#212121' : 'white',
    resultButtonBorder: isDarkTheme ? '#BDBDBD' : 'black',
    resultFooter: isDarkTheme ? '#212121' : '#FAF4F2',
    resultSvg: isDarkTheme ? '#BDBDBD' : '#666666',
    rewriteButton: isDarkTheme ? '#FFE7AB' : '#FFE7AB',
    shadow: isDarkTheme ? 'black' : 'black',
    summarizeButton: isDarkTheme ? '#D1EDBF' : '#D1EDBF',
    text: isDarkTheme ? 'white' : 'black',
    textBackground: isDarkTheme ? 'black' : 'white',
    common: {
      buttonText: 'black',
      emailBackground: '#FB1C1C1A',
      emailBorder: '#D41B1B',
      homeSvg: '#7986cb',
      placeHolderText: '#757575',
      tweetBackground: '#03A9F41A',
      tweetBorder: '#03A9F4',
    },
  };
  const fonts = {
    RobotoMono: 'Roboto-Mono',
    Sans: 'Product-Sans',
    RobotoRegular: 'Roboto-Regular',
  };
  return {colors, fonts, isDarkTheme};
};

export interface ThemeProps {
  colors: {
    border: string;
    buttonBorder: string;
    headerBackground: string;
    homeBackground: string;
    resultBackground: string;
    resultButtonBorder: string;
    resultFooter: string;
    resultSvg: string;
    rewriteButton: string;
    shadow: string;
    summarizeButton: string;
    text: string;
    textBackground: string;
    common: {
      buttonText: string;
      emailBackground: string;
      emailBorder: string;
      homeSvg: string;
      placeHolderText: string;
      tweetBackground: string;
      tweetBorder: string;
    };
  };
  fonts: {
    RobotoMono: string;
    Sans: string;
    RobotoRegular: string;
  };
  isDarkTheme: boolean;
}
