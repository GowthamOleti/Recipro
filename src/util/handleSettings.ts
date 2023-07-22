import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppSetting} from '../common/constants';
import {SettingsContextType} from '../common/settingsContext';
import {logError} from './helpers';

interface AsyncStorageProps {
  key: string;
  value: boolean;
}

export const saveSetting = async ({key, value}: AsyncStorageProps) => {
  try {
    await AsyncStorage.setItem(key, value ? 'true' : 'false');
  } catch (error) {
    logError(error);
  }
};

export const getSetting = async (key: AppSetting) => {
  try {
    const result = await AsyncStorage.getItem(key.toString());
    if (key === AppSetting.ShowTweetEmail && result === null) {
      return true;
    }
    return result === 'true' ? true : false;
  } catch (error) {
    logError(error);
    return false;
  }
};

export const isFirstTime = async () => {
  try {
    const value = await AsyncStorage.getItem(AppSetting.IsFirstTime);
    const result = value === null ? true : false;
    return result;
  } catch (error) {
    logError(error);
    return false;
  }
};

export const fetchAllSettings = async () => {
  try {
    const quickSummarizeItem = await AsyncStorage.getItem(
      AppSetting.QuickSummarize.toString(),
    );
    const showTweetEmailItem = await AsyncStorage.getItem(
      AppSetting.ShowTweetEmail.toString(),
    );
    const isDarkModeItem = await AsyncStorage.getItem(
      AppSetting.IsDarkMode.toString(),
    );
    const result: SettingsContextType = {
      quickSummarize: quickSummarizeItem === 'true' ? true : false,
      showTweetEmail: showTweetEmailItem === 'false' ? false : true,
      isDarkMode: isDarkModeItem === 'true' ? true : false,
    };
    return result;
  } catch (error) {
    logError(error);
  }
};
