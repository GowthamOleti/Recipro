import {
  AppSetting,
  ExplainerScreenType,
  InputActionType,
  ResultErrorType,
} from './src/common/constants';

export const appLabels = {
  appName: 'TextCraft',
  askAPIKey: {
    title: 'Enter your OpenAI API key',
    resetKeyTitle: 'Enter your new OpenAI API key',
    saveButton: 'Save API Key',
    errorMessage: 'Invalid API Key',
    getInstructions:
      "Not sure how to get your OpenAI API Key? Don't worry! Tap here for instructions.",
  },
  explainer: {
    about: {
      intro:
        'GPT Tools simplifies basic reading and writing tasks. The app currently offers two main features at launch - Summarize and Rewrite.',
      summarizePrefix: '\nSummarize: ',
      summarizeDescription:
        'One of the most practical applications of GPT algorithms is content summarization, which can be used in everyday scenarios. By simply inputting any text into the app, the algorithm can generate a concise and easy-to-understand summary. By enabling the "Auto-Summarize Links" option in settings, you can summarize shared article links without even instantly. No button taps needed.',
      rewritePrefix: '\nRewrite: ',
      rewriteDescription:
        "This app is also great for writing. If you're not confident about your English skills or how you've framed your message for work or social media, you can ask the app to rewrite it for you. It will give you a well-written output while preserving the meaning, tone, and essence of the original message. Additionally, you can use this app to organize your thoughts by jotting down rough ideas and having the app organize them into clear paragraphs by rewriting.",
      conclusion:
        "\nThe free version of ChatGPT doesn't include the option to summarize article links, which is a free feature on our app. Even though you can summarize & rewrite text using ChatGPT, our app aims to simplify the process by minimizing the number of steps required to complete these tasks.\n\nTo keep the app free for everyone, we've provided the option to use your own OpenAI Key. In the future, we plan to introduce more features to the app. But for now, we invite you to use the current features and provide us with your valuable feedback. Thank you!",
    },
    button: {
      goBack: 'Go Back',
      done: 'Done',
    },
  },
  errors: {
    noInternet: 'No Internet Connection!',
    noInput: 'Missing Input!',
    unsupportedLink: 'Unsupported Link!',
    invalidApiKey: 'Invalid API Key!',
    twitterNotInstalled: 'Twitter App is Not Installed!',
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

export const fetchExplainerScreenErrorDetails: Record<
  ExplainerScreenType,
  string
> = {
  GENERAL: 'About GPT Tools',
  API_KEY: 'Instructions',
};

export const apiKeyInstructions = [
  {
    title: 'Step 1',
    body: "Click on the link below and login to your Open AI account. Then create and copy the new secret key.\n\nDon't share this key with anyone. If your key is compromised, you can easily delete it and create a new key anytime. We store your key safely in your device's encrypted storage. We can't access your key.",
    link: 'https://platform.openai.com/account/api-keys',
  },
  {
    title: 'Step 2',
    body: 'Add your credit/debit card details here to enable your key. Before you worry about this step, read the next slides.',
    link: 'https://platform.openai.com/account/billing/payment-methods',
  },
  {
    title: 'Pricing',
    body: "The usage cost of the API Key is very cheap. Let's say you're a heavy user of the app and you make 40 requests/day (20 rewrites & 20 summarize requests) it will cost you around $0.004 (~ ₹0.3) per day, $0.12 (~ ₹10) per month and $1.44 (~ ₹120) per year. \n\nThese price estimates are for heavy users, if you use it occasionally it will cost way less.",
  },
  {
    title: 'Pro Tip',
    body: 'You can also set usage limits using below link. Setting this is a good idea for additional peace of mind. OpenAI will warn you when you hit the soft limit and block subsequent requests if you hit the hard limit. You can set it to as low as $1 per month which gives you around 250 requests.',
    link: 'https://platform.openai.com/account/billing/limits',
  },
];

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
      title: 'Reset OpenAI API Key',
      subtext: 'Current key ends with "{key}"',
    },
    {
      id: AppSetting.HOW_TO_USE,
      title: 'About GPT Tools',
    },
    {
      id: AppSetting.FEEDBACK,
      title: 'Feedback',
    },
  ],
};
