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
    body: 'The key you provided is not working. Please make sure that you have followed all the instructions correctly.',
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
        'This feature is particularly useful to summarize lengthy texts or article links. TextCraft can generate a concise and easy-to-understand summary. By enabling the "Auto-Summarize Links" option in settings, you can summarize shared article links instantly. You can also long-press on summarize for more options like Explain etc.',
      rewritePrefix: '\nRewrite: ',
      rewriteDescription:
        'TextCraft can also help with writing English content for work or social media. Just give any rough text as input and it will give you a well-written output while preserving the meaning, tone, and essence of the original text. Additionally, you can also set required tone (professional / casual) or choose to just fix grammar by long-pressing the Rewrite button.',
      dataCollection:
        "\nTo keep the app free for everyone, we've provided the option to use your own OpenAI API Key. We do not send any of your data to our servers. For more information, read our ",
      privacyPolicy: 'Privacy Policy',
      privacyPolicyLink:
        'https://medium.com/@textcraft.app/textcraft-privacy-policy-b1aa01d20c00',
      conclusion:
        '\n\nFeel free to share your feedback using the option in settings. Thank you for using TextCraft! ❤️',
    },
    apiKeyInstructions: {
      step: '\nStep 2: ',
      text: 'Add your payment details in the link below to activate your key. You will get charged based on your usage. If you are living outside the US, use a card that supports international transactions.\n',
      pricing: '\nPricing: ',
      pricingBody:
        "It's pretty cheap. It roughly costs around $0.004 (~ ₹0.30) for every 50 requests (Summarize/Rewrite). The cost per month for even the most heavy users will not exceed $0.12 (₹10), while casual users can expect an even lower cost. You can also set usage limits for your key using the link below.\n",
      link: 'https://platform.openai.com/account/billing/payment-methods',
      usageLimitLink: 'https://platform.openai.com/account/billing/limits',
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
      rewriteLink: 'Rewrite does not support links!',
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
  moreInputActions: {
    rewrite: {
      fixGrammar: 'Fix Grammar',
      professional: 'Professional Tone',
      casual: 'Casual Tone',
    },
    summarize: {},
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
  REWRITE_PROFESSIONAL: 'Rewritten Text',
  REWRITE_CASUAL: 'Rewritten Text',
  FIX_GRAMMAR: 'Rewritten Text',
  SHORTEN: 'Rewritten Text',
  EXPAND: 'Expanded Text',
  EXPLAIN: 'Explanation',
  EXPLAIN_LIKE_FIVE: 'Explanation',
  SUMMARIZE_IN_POINTS: 'Summary',
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
  PAYMENT_DETAILS_UNAVAILABLE: {
    errorTitle:
      'Oops! Looks like your API Key is not activated. Did you setup your payment details?',
    buttonText: 'Instructions',
  },
};

export const moreActions = {
  write: [
    {
      id: InputActionType.Expand,
      title: 'Expand',
    },
    {
      id: InputActionType.Shorten,
      title: 'Make it Shorter',
    },
    {
      id: InputActionType.RewriteCasual,
      title: 'Casual Tone',
    },
    {
      id: InputActionType.RewriteProfessional,
      title: 'Professional Tone',
    },
    {
      id: InputActionType.FixGrammar,
      title: 'Fix Grammar',
    },
  ],
  read: [
    {
      id: InputActionType.Explain,
      title: 'Explain',
    },
    {
      id: InputActionType.ExplainLikeFive,
      title: "Explain Like I'm 5",
    },
    {
      id: InputActionType.SummarizeInPoints,
      title: 'Summarize in Points',
    },
  ],
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
