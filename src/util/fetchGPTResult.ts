import {GlobalContextType} from '../../globalContext';

export const fetchGPTResult = async (contextData: GlobalContextType) => {
  const {Configuration, OpenAIApi} = require('openai');

  const configuration = new Configuration({
    apiKey: '',
  });
  const openai = new OpenAIApi(configuration);

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Rewrite - ${contextData.input}`,
      max_tokens: 100,
    });
    console.log(completion.data);
    return String(completion.data.choices[0].text).trim();
  } catch (e) {
    console.log(e);
  }
  return '';
};
