import {InputActionType} from './constants';

export const useFetchGPTResult = async (
  input: string,
  actionType: InputActionType,
) => {
  const {Configuration, OpenAIApi} = require('openai');

  const configuration = new Configuration({
    apiKey: '',
  });
  const openai = new OpenAIApi(configuration);

  console.log(actionType);

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Rewrite - ${input}`,
    });
    return String(completion.data.choices[0].text);
  } catch (e) {
    console.log(e);
  }
  return null;
};
