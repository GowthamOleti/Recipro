import {fetchPromptPrefix, InputActionType} from '../common/constants';
import {getOpenAIApiKey} from './handleApiKey';

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
  const promptPrefix = fetchPromptPrefix[actionType];

  try {
    const response = await openAI.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{role: 'user', content: `${promptPrefix}${input}`}],
    });

    console.log(JSON.stringify(response.data));
    return String(response.data.choices[0].message.content).trim();
  } catch (e) {
    console.log(e);
    return String(e).includes('401') ? '401' : '';
  }
};

export const isKeyWorking = async (key: string) => {
  const result = await fetchGPTResult({
    input: 'Rewrite - Test',
    actionType: InputActionType.Rewrite,
    key,
  });
  return result === '' || result.includes('401') ? false : true;
};
