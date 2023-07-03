import {createContext} from 'react';
import {AppSetting} from './constants';

export const SettingsContext = createContext({
  appSettings: new Map<AppSetting, boolean>(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setAppSettings: (appSettings: Map<AppSetting, boolean>) => {},
});
