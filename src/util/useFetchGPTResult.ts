import globalState from '../../global';

export const fetchGPTResult = async () => {
  const {Configuration, OpenAIApi} = require('openai');

  const configuration = new Configuration({
    apiKey: '',
  });
  const openai = new OpenAIApi(configuration);

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Rewrite - ${globalState.input}`,
    });
    globalState.output = String(completion.data.choices[0].text);
  } catch (e) {
    console.log(e);
  }
};
