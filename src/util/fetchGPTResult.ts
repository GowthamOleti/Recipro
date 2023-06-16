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
  const openAI = new OpenAIApi(configuration);
  const promptPrefix = fetchPromptPrefix[actionType];

  try {
    const response = await openAI.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{role: 'user', content: `${promptPrefix}${input}`}],
    });

    console.log(response.data);
    return String(response.data.choices[0].message.content).trim();
  } catch (e) {
    console.log(e);
  }
  return '';
};
