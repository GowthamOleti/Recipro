import AsyncStorage from '@react-native-async-storage/async-storage';

interface AsyncStorageProps {
  key: string;
  value: string;
}

export enum Settings {
  THEME,
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
    const keys = await AsyncStorage.getAllKeys();
    const items = await AsyncStorage.multiGet(keys);

    return items;
  } catch (error) {
    console.log(error);
  }
};
