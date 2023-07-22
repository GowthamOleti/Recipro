import {createContext} from 'react';

export interface SettingsContextType {
  quickSummarize: boolean;
  showTweetEmail: boolean;
  isDarkMode: boolean;
}

export const defaultSettings = {
  quickSummarize: false,
  showTweetEmail: true,
  isDarkMode: false,
};

export const SettingsContext = createContext({
  appSettings: defaultSettings,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setAppSettings: (appSettings: SettingsContextType) => {},
});
