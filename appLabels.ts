import {InputActionType, ResultErrorType} from './src/util/constants';

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

export const fetchResultScreenErrorDetails: Record<
  ResultErrorType,
  {
    errorTitle: string;
    buttonText: string;
  }
> = {
  GENERIC: {errorTitle: 'Oops! Something went wrong...', buttonText: 'Retry'},
  INVALID_KEY: {
    errorTitle: 'Oops! Something is wrong with your API Key...',
    buttonText: 'Reset API Key',
  },
};
