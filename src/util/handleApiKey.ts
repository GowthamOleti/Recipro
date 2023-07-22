import EncryptedStorage from 'react-native-encrypted-storage';
import {logError} from './helpers';

const OPENAI_API_KEY = 'OPENAI_API_KEY';

export const saveOpenAIApiKey = async (apiKey: string) => {
  try {
    await EncryptedStorage.setItem(OPENAI_API_KEY, apiKey);
  } catch (error) {
    logError(error);
  }
};

export const getOpenAIApiKey = async () => {
  try {
    const apiKey = await EncryptedStorage.getItem(OPENAI_API_KEY);
    return apiKey;
  } catch (error) {
    logError(error);
  }
  return;
};

export const IsOpenAIApiKeyPresent = async () => {
  try {
    const apiKey = await EncryptedStorage.getItem(OPENAI_API_KEY);
    return apiKey && apiKey.length > 0 ? true : false;
  } catch (error) {
    logError(error);
    return false;
  }
};

export const removeApiKey = async () => {
  try {
    await EncryptedStorage.removeItem(OPENAI_API_KEY);
  } catch (error) {
    logError(error);
  }
};
