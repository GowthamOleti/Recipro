import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppSetting} from '../common/constants';

interface AsyncStorageProps {
  key: string;
  value: string;
}

export const saveSetting = async ({key, value}: AsyncStorageProps) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllSettings = async () => {
  try {
    const result = new Map<AppSetting, boolean>([
      [
        AppSetting.QUICK_SUMMARIZE,
        Boolean(
          (await AsyncStorage.getItem(AppSetting.QUICK_SUMMARIZE)) ?? false,
        ),
      ],
      [
        AppSetting.SHOW_TWEET_MAIL,
        Boolean(
          (await AsyncStorage.getItem(AppSetting.SHOW_TWEET_MAIL)) ?? false,
        ),
      ],
      [
        AppSetting.IS_DARK_THEME,
        Boolean(
          (await AsyncStorage.getItem(AppSetting.IS_DARK_THEME)) ?? false,
        ),
      ],
    ]);
    return result;
  } catch (error) {
    console.log(error);
  }
};
