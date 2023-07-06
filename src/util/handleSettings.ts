import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppSetting} from '../common/constants';
import {SettingsContextType} from '../common/settingsContext';

interface AsyncStorageProps {
  key: string;
  value: boolean;
}

export const saveSetting = async ({key, value}: AsyncStorageProps) => {
  try {
    await AsyncStorage.setItem(key, value ? 'true' : 'false');
  } catch (error) {
    console.log(error);
  }
};

export const getSetting = async (key: AppSetting) => {
  try {
    const result = await AsyncStorage.getItem(key.toString());
    if (key === AppSetting.SHOW_TWEET_MAIL && result === null) {
      return true;
    }
    return result === 'true' ? true : false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const isFirstTime = async () => {
  try {
    const value = await AsyncStorage.getItem('IS_FIRST_TIME');
    const result = value === null ? true : false;
    if (result) {
      await AsyncStorage.setItem('IS_FIRST_TIME', 'true');
    }
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const fetchAllSettings = async () => {
  try {
    const quickSummarizeItem = await AsyncStorage.getItem(
      AppSetting.QUICK_SUMMARIZE.toString(),
    );
    const showTweetMailItem = await AsyncStorage.getItem(
      AppSetting.SHOW_TWEET_MAIL.toString(),
    );
    const isDarkModeItem = await AsyncStorage.getItem(
      AppSetting.IS_DARK_MODE.toString(),
    );
    const result: SettingsContextType = {
      quickSummarize: quickSummarizeItem === 'true' ? true : false,
      showTweetMail: showTweetMailItem === 'false' ? false : true,
      isDarkMode: isDarkModeItem === 'true' ? true : false,
    };
    return result;
  } catch (error) {
    console.log(error);
  }
};
