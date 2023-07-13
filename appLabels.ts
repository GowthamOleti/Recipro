import {
  AppSetting,
  InputActionType,
  ResultErrorType,
} from './src/common/constants';

export const appLabels = {
  appName: 'TextCraft',
  askAPIKey: {
    title: 'Paste your OpenAI API key',
    resetKeyTitle: 'Enter your new OpenAI API key',
    saveKey: 'Save API Key',
    next: 'Next',
    errorMessage: 'Invalid API Key',
    step: 'Step 1: ',
    instructions:
      'Click on the link below and login to your Open AI account. Then create and copy the new secret key.\n',
    instructionsLink: 'https://platform.openai.com/account/api-keys',
  },
  keyError: {
    title: 'API Key Error',
    body: 'The key you provided is not working. Please make sure you followed all the instructions.',
    primaryButton: 'Instructions',
    secondaryButton: 'Close',
    okay: 'Okay',
  },
  explainer: {
    about: {
      intro:
        "TextCraft simplifies reading and writing tasks by using OpenAI's GPT algorithms. The app currently offers two main features - Summarize and Rewrite.",
      summarizePrefix: '\nSummarize: ',
      summarizeDescription:
        'This is a great feature for those who are looking to summarize article links or any lengthy text. TextCraft can generate a concise and easy-to-understand summary. By enabling the "Auto-Summarize Links" option in settings, you can summarize shared article links instantly without any button taps.',
      rewritePrefix: '\nRewrite: ',
      rewriteDescription:
        'TextCraft can also help with writing English content for work or social media. Just give any rough text as input and it will give you a well-written output while preserving the meaning, tone, and essence of the original text. Additionally, you can also set required tone (professional / casual) or choose to just fix grammar.',
      conclusion:
        "\nEven though you can summarize & rewrite text using ChatGPT, our app aims to simplify the process by minimizing the number of steps required to complete these tasks. To keep the app free for everyone, we've provided the option to use your own OpenAI Key.\n\nFeel free to share your feedback using the option in settings. Thank you for downloading TextCraft! ❤️",
    },
    apiKeyInstructions: {
      step: '\nStep 2: ',
      text: "Add your payment details to activate your key. You will get charged based on your usage.\n\nIt is very cheap. It'll roughly cost around $0.004 (~ ₹0.30) for every 50 requests (Summarize/Rewrite). Even if you are a heavy user of the app, it won't cost more than $0.12 (₹10) per month. For casual users, it'll cost much lesser than that.\n\nIf you are living outside the US, make sure to use a card that supports international transactions. Update your payment details using the below link.\n",
      link: 'https://platform.openai.com/account/billing/payment-methods',
      additionalText:
        '\nTIP: You can also set usage limits for your key. Setting this is a good idea for additional peace of mind. OpenAI will warn you when you hit the soft limit and block subsequent requests if you hit the hard limit. You can set it to as low as $1 per month. Use below link to set it up.\n',
      additionalLink: 'https://platform.openai.com/account/billing/limits',
    },
    button: {
      done: 'Done',
      next: 'Next',
    },
  },
  toast: {
    errors: {
      noInternet: 'No Internet Connection!',
      noInput: 'Missing Input!',
      unsupportedLink: 'Unsupported Link!',
      invalidApiKey: 'Invalid API Key!',
      twitterNotInstalled: 'Twitter App is Not Installed!',
    },
    info: {
      paste: 'Pasted from Clipboard',
      copy: 'Copied to Clipboard',
    },
  },
  inputHint:
    'You can either share any text or link to this app or you can simply type it here...',
  inputActions: {
    summarize: 'Summarize',
    rewrite: 'Rewrite',
  },
  resetKeyAlert: {
    title: 'Are You Sure?',
    body: 'Please confirm if you want to reset your OpenAI API Key.',
    cancelButton: 'Cancel',
    okButton: 'Yes',
  },
  settingsScreenTitle: 'Settings',
  apiKeyScreenTitle: 'API Key Setup',
  aboutScreenTitle: 'About TextCraft',
  apiKeyInstructionsScreenTitle: 'API Key Instructions',
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

export const settings = {
  toggleSettings: [
    {
      id: AppSetting.QUICK_SUMMARIZE,
      title: 'Auto-Summarize Links',
      subtext: 'Quickly Summarize Shared Article links',
      hasToggle: true,
    },
    {
      id: AppSetting.SHOW_TWEET_MAIL,
      title: 'Sharing via Tweet & Email',
      subtext: 'Show These Options in Result Screen',
      hasToggle: true,
    },
    // {
    //   id: AppSetting.IS_DARK_MODE,
    //   title: 'Dark Mode',
    //   hasToggle: true,
    // },
  ],
  more: [
    {
      id: AppSetting.RESET_API_KEY,
      title: 'Reset API Key',
      subtext: 'Current key ends with "{key}"',
    },
    {
      id: AppSetting.KEY_INSTRUCTIONS,
      title: 'API Key Setup Instructions',
    },
    {
      id: AppSetting.HOW_TO_USE,
      title: 'About TextCraft',
    },
    {
      id: AppSetting.FEEDBACK,
      title: 'Feedback',
    },
  ],
};
