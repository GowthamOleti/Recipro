import EncryptedStorage from 'react-native-encrypted-storage';

const OPENAI_API_KEY = 'OPENAI_API_KEY';

export const saveOpenAIApiKey = async (apiKey: string) => {
  try {
    await EncryptedStorage.setItem(OPENAI_API_KEY, apiKey);
  } catch (error) {
    console.log(error);
  }
};

export const getOpenAIApiKey = async () => {
  try {
    const apiKey = await EncryptedStorage.getItem(OPENAI_API_KEY);
    return apiKey;
  } catch (error) {
    console.log(error);
  }
};

export const IsOpenAIApiKeyPresent = async () => {
  try {
    const apiKey = await EncryptedStorage.getItem(OPENAI_API_KEY);
    return apiKey && apiKey.length > 0 ? true : false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// TODO: After removing, user should navigate to ask openAI key screen
export const removeOpenAIApiKey = async () => {
  try {
    await EncryptedStorage.removeItem(OPENAI_API_KEY);
  } catch (error) {
    console.log(error);
  }
};
