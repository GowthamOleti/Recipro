import {InputActionType} from './src/util/constants';

export const appLabels = {
  appName: 'GPT Tools',
  askAPIKey: {
    title: 'Enter your OpenAI API Key',
    doneButton: 'Done',
    errorMessage: 'Invalid API Key',
    instructions: 'Instructions',
  },
  errors: {
    noInternet: 'No internet connection',
    noInput: 'Please enter input',
  },
  inputHint:
    'You can either share any text or link to this app by using the Android share menu, or you can simply type it here.',
  inputActions: {
    summarize: 'Summarize',
    rewrite: 'Rewrite',
  },
  editActions: {
    closeButton: 'Close',
    doneButton: 'Done',
  },
  readEditScreen: {
    editHeaderTitle: 'Edit Input',
  },
  mocks: {
    input:
      "I'm sure it has the best tech to justify the price. But, I'm not really convinced about buying a Mixed Reality headset for $3500. I can't imagine paying more than what my phone/laptop costs when it is not offering more value than my phone/laptop.",
    output:
      'React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces.',
  },
  resultScreenHeader: 'Result',
  pasteFromClipboard: 'paste from clipboard',
};

export const fetchResultScreenTitle: Record<InputActionType, string> = {
  SUMMARIZE: 'Summary',
  REWRITE: 'Rewritten Text',
  DEFAULT: '',
};
