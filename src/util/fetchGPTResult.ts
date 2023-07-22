import {fetchPrompt, InputActionType} from '../common/constants';
import {getOpenAIApiKey} from './handleApiKey';
import {logError} from './helpers';

interface Props {
  input: string;
  actionType: InputActionType;
  key?: string;
}

export const fetchGPTResult = async ({input, actionType, key}: Props) => {
  const {Configuration, OpenAIApi} = require('openai');

  const apiKey = key ?? (await getOpenAIApiKey());

  const configuration = new Configuration({
    apiKey,
  });
  const openAI = new OpenAIApi(configuration);
  const promptPrefix = fetchPrompt[actionType];
  const inputWithPrompt = `${promptPrefix}${input}`;
  console.log('API Input: ', inputWithPrompt);

  try {
    const response = await openAI.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{role: 'user', content: inputWithPrompt}],
    });

    console.log('API Response: ', JSON.stringify(response.data));
    return String(response.data.choices[0].message.content).trim();
  } catch (error) {
    logError(error);
    if (String(error).includes('401')) {
      return 'ERR401';
    } else if (String(error).includes('429')) {
      return 'ERR429';
    } else {
      return '';
    }
  }
};

export const isKeyWorking = async (key: string) => {
  const result = await fetchGPTResult({
    input: 'Test',
    actionType: InputActionType.Rewrite,
    key,
  });
  return result === '' || result === 'ERR401' || result === 'ERR429'
    ? false
    : true;
};
