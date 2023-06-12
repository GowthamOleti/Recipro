import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Give an option to update/remove API Key
// Make it more secure

export const saveOpenAIApiKey = async (apiKey: string) => {
  try {
    await AsyncStorage.setItem('OPENAI_API_KEY', apiKey);
  } catch (error) {
    console.log(error);
  }
};

export const getOpenAIApiKey = async () => {
  try {
    const apiKey = await AsyncStorage.getItem('OPENAI_API_KEY');
    return apiKey;
  } catch (error) {
    console.log(error);
  }
};

export const IsOpenAIApiKeyPresent = async () => {
  try {
    const apiKey = await AsyncStorage.getItem('OPENAI_API_KEY');
    return apiKey && apiKey.length > 0 ? true : false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
