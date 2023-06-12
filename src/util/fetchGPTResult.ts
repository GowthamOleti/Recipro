import {GlobalContextType} from '../../globalContext';
import {fetchPromptPrefix} from './constants';
import {getOpenAIApiKey} from './handleApiKeys';

export const fetchGPTResult = async (contextData: GlobalContextType) => {
  const {Configuration, OpenAIApi} = require('openai');

  const apiKey = await getOpenAIApiKey();

  const configuration = new Configuration({
    apiKey,
  });
  const openai = new OpenAIApi(configuration);
  const promptPrefix = fetchPromptPrefix[contextData.actionType];

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${promptPrefix}${contextData.input}`,
      max_tokens: 100,
    });
    console.log(completion.data);
    return String(completion.data.choices[0].text).trim();
  } catch (e) {
    console.log(e);
  }
  return '';
};
