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
    'You can either share any text or link to this app or you can simply type it here...',
  inputActions: {
    summarize: 'Summarize',
    rewrite: 'Rewrite',
  },
  readEditScreen: {
    editHeaderTitle: 'Edit Input',
  },
};

export const fetchResultScreenTitle: Record<InputActionType, string> = {
  SUMMARIZE: 'Summary',
  REWRITE: 'Rewritten Text',
};
