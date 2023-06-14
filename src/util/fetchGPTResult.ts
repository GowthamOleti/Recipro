import {fetchPromptPrefix, InputActionType} from './constants';
import {getOpenAIApiKey} from './handleApiKeys';

interface Props {
  input: string;
  actionType: InputActionType;
}

// TODO: Handle Invalid api key

export const fetchGPTResult = async ({input, actionType}: Props) => {
  const {Configuration, OpenAIApi} = require('openai');

  const apiKey = await getOpenAIApiKey();

  const configuration = new Configuration({
    apiKey,
  });
  const openai = new OpenAIApi(configuration);
  const promptPrefix = fetchPromptPrefix[actionType];

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${promptPrefix}${input}`,
      max_tokens: 100,
    });
    console.log(completion.data);
    return String(completion.data.choices[0].text).trim();
  } catch (e) {
    console.log(e);
  }
  return '';
};
