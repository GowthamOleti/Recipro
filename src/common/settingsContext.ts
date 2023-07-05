import {createContext} from 'react';

export interface SettingsContextType {
  quickSummarize: boolean;
  showTweetMail: boolean;
  isDarkMode: boolean;
}

export const defaultSettings = {
  quickSummarize: false,
  showTweetMail: true,
  isDarkMode: false,
};

export const SettingsContext = createContext({
  appSettings: defaultSettings,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setAppSettings: (appSettings: SettingsContextType) => {},
});
