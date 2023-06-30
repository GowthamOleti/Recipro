import {InputActionType, ResultErrorType} from './src/common/constants';

export const appLabels = {
  appName: 'GPT Tools',
  askAPIKey: {
    title: 'Enter your OpenAI API Key',
    saveButton: 'Save API Key',
    errorMessage: 'Invalid API Key',
    getInstructions:
      "Don't know how to get your Open AI API Key? Tap here for instructions.",
  },
  explainer: {
    button: 'Go Back',
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

export const apiKeyInstructions = [
  {
    title: 'Step 1',
    body: 'Click on the link below and generate a new API secret key for yourself. Make sure you are logged in to your Open AI account',
    link: 'https://platform.openai.com/account/api-keys',
  },
  {
    title: 'Step 2',
    body: 'Add your credit/debit card details here',
    link: 'https://platform.openai.com/account/billing/payment-methods',
  },
  {
    title: 'Note',
    body: 'It is cheap, very cheap. Upon our testing, if you put 40 requests per day (20 rewrites and 20 summarizing) it costs you 3 paise. Which mean it will cost you just over 9/- per month',
  },
  {
    title: 'Pro Tip',
    body: 'You can set your usage limit. You can set it to as low as $1 per month. $1 usage is almost 250 requests per month!',
  },
];

export const settings = {
  toggleSettings: [
    {
      id: 'QUICK_SUMMARIZE',
      title: 'Instant Summarizing',
      subtext: 'Summarize links quickly',
    },
    {
      id: 'TWEET_MAIL',
      title: 'Show Twitter & Mail',
      subtext: 'Show Twitter & Mail in Result screen',
    },
  ],
  other: [
    {
      id: 'RESET_KEY',
      title: 'Reset OpenAI API Key',
      subtext: '',
    },
    {
      id: 'HOW_TO_USE',
      title: 'How to Use',
      subtext: '',
    },
    {
      id: 'FEEDBACK',
      title: 'Feedback',
      subtext: '',
    },
  ],
};
