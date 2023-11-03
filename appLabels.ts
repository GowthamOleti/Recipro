import {AppAlertType} from './src/common/appAlert';
import {
  AppSetting,
  InputActionType,
  ResultErrorType,
} from './src/common/constants';

export const appLabels = {
  appName: 'ReciPro AI',
  askAPIKey: {
    title: 'Paste your API key',
    resetKeyTitle: 'Enter your new API key',
    saveKey: 'Save API Key',
    next: 'Next',
    errorMessage: 'Invalid API Key',
    step: 'Step 1: ',
    instructions:
      'Click on the link below and login to your OpenAI™ account. Then create and copy the new secret key.\n',
    generateKeyLink: 'https://platform.openai.com/account/api-keys',
  },
  explainer: {
    about: {
      intro:
        'ReciPro helps you to restructure your recipes, and helps you to understand it better. Remember, A good recipe is not just enough to make a dish taste good :) ',
      // summarizePrefix: '\nBeginner: ',
      // summarizeDescription:
      //   'This feature is useful for explaining lengthy recipes. ReciPro can generate a detailed and easy-to-understand version of the recipe, which will be very helpful if your a beginner! ',
      // rewritePrefix: '\nPro: ',
      // rewriteDescription:
      //   'ReciPro can also help with cooking skill. Hey Pro cooks out there, instead of reading the whole recipe, get a short and crisp summarised version!',
      dataCollection:
        "\nNote: To keep the app free for everyone, we've provided the option to use your own API Key. We store this key locally in your device's encrypted storage. Apart from analytics, we do not collect any other data. We use analytics to improve the user experience. For information regarding how we handle your data, read our ",
      // privacyPolicy: 'Privacy Policy',
      // privacyPolicyLink:
      //   'https://medium.com/@textcraft.app/textcraft-privacy-policy-b1aa01d20c00',
      conclusionNewUser: '\n\nThank you for downloading ReciPro! ❤️',
      feedbackLink: 'feedback',
      conclusion1: '\n\nFeel free to share your feedback ',
      conclusion2: '. Thank you for using ReciPro! ❤️',
    },
    apiKeyInstructions: {
      step: '\nStep 2: ',
      text: 'Add your payment details in the link below to activate your key. You will get charged based on your usage. If you are living outside the US, use a card that supports international transactions.\n',
      pricing: '\nPricing: ',
      pricingBody:
        "It's pretty cheap. It roughly costs around $0.004 (~ ₹0.30) for every 50 requests (Summarize/Rewrite). The cost per month for even the most heavy users will not exceed $0.12 (₹10), while casual users can expect an even lower cost. You can also set usage limits for your key using the link below.\n\n",
      addPaymentLink:
        'https://platform.openai.com/account/billing/payment-methods',
      additionalLinks: '\nAdditional Links:',
      checkUsage: '\n\nCheck your API Key usage & cost',
      checkUsageLink: 'https://platform.openai.com/account/usage',
      usageLimit: '\n\nSet usage limits\n\n',
      usageLimitLink: 'https://platform.openai.com/account/billing/limits',
    },
    button: {
      done: 'Done',
      next: "Let's Cook!",
    },
  },
  toast: {
    errors: {
      noInternet: 'No Internet Connection!',
      noInput: 'Missing Input. Kindly paste a link above!',
      unsupportedLink: 'Unsupported Link!',
      rewriteLink: 'Rewrite Does Not Support Links!',
      invalidApiKey: 'Invalid API Key!',
      twitterNotInstalled: 'Twitter App is Not Installed!',
    },
    info: {
      paste: 'Pasted from Clipboard',
      copy: 'Copied to Clipboard',
    },
  },
  inputHint: 'Enter the name of food item to get the recipe 👨🏽‍🍳',
  inputActions: {
    Summarize: '🍴Help me cook! 🍜',
    // rewrite: 'Rewrite',
  },
  appVersion: 'Version {version}',
  settingsScreenTitle: 'Preferences',
  apiKeyScreenTitle: 'API Key Setup',
  aboutScreenTitle: 'About ReciPro',
  apiKeyInstructionsScreenTitle: 'API Key Instructions',
};

export const fetchResultScreenTitle: Record<InputActionType, string> = {
  SUMMARIZE: 'Summary',
  // REWRITE: 'Rewritten Text',
  // REWRITE_PROFESSIONAL: 'Rewritten Text',
  // REWRITE_CASUAL: 'Rewritten Text',
  // FIX_GRAMMAR: 'Rewritten Text',
  // SHORTEN: 'Rewritten Text',
  // EXPAND: 'Expanded Text',
  EXPLAIN: 'Beginner',
  EXPLAIN_LIKE_TEN: 'Intermediate',
  SUMMARIZE_IN_POINTS: 'Pro',
  [InputActionType.Expand]: '',
  [InputActionType.FixGrammar]: '',
  [InputActionType.Rewrite]: '',
  [InputActionType.RewriteCasual]: '',
  [InputActionType.RewriteProfessional]: '',
  [InputActionType.Shorten]: '',
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

export const fetchAlertData: Record<
  AppAlertType,
  {
    title: string;
    body: string;
    primaryButtonText?: string;
    secondaryButtonText: string;
  }
> = {
  ONBOARDING_KEY_ERROR: {
    title: 'API Key Error',
    body: 'The key you provided is not working. Please make sure that you have followed all the instructions correctly.',
    secondaryButtonText: 'Okay',
  },
  KEY_ERROR: {
    title: 'API Key Error',
    body: 'The key you provided is not working. Please make sure that you have followed all the instructions correctly.',
    primaryButtonText: 'Instructions',
    secondaryButtonText: 'Close',
  },
  RESET_CONFIRMATION: {
    title: 'Are You Sure?',
    body: 'Please confirm if you want to reset your API Key.',
    primaryButtonText: 'Yes',
    secondaryButtonText: 'Cancel',
  },
};

export const moreActions = {
  // write: [
  //   {
  //     id: InputActionType.Expand,
  //     title: 'Expand',
  //   },
  //   {
  //     id: InputActionType.Shorten,
  //     title: 'Make it Shorter',
  //   },
  //   {
  //     id: InputActionType.RewriteCasual,
  //     title: 'Casual Tone',
  //   },
  //   {
  //     id: InputActionType.RewriteProfessional,
  //     title: 'Professional Tone',
  //   },
  //   {
  //     id: InputActionType.FixGrammar,
  //     title: 'Fix Grammar',
  //   },
  // ],
  read: [
    {
      id: InputActionType.Explain,
      title: '🍴 Beginner Cook 👶🏽',
    },
    {
      id: InputActionType.ExplainLikeTen,
      title: '🍴 Intermediate Cook 🧑🏻',
    },
    {
      id: InputActionType.SummarizeInPoints,
      title: '🍴 Pro Cook 👨🏻',
    },
  ],
};

export const settings = {
  toggleSettings: [
    {
      id: AppSetting.QuickSummarize,
      title: 'Auto-Summarize Links',
      subtext: 'Quickly Summarize Shared Recipe links',
      hasToggle: true,
    },
    {
      id: AppSetting.ShowTweetEmail,
      title: 'Sharing via Tweet & Email',
      subtext: 'Show These Options in Result Screen',
      hasToggle: true,
    },
    {
      id: AppSetting.IsDarkMode,
      title: 'Dark Mode (Beta)',
      subtext: 'For Better Reading Experience.',
      hasToggle: true,
    },
  ],
  more: [
    {
      id: AppSetting.ResetKey,
      title: 'Reset API Key',
      subtext: 'Current key ends with "{key}"',
    },
    {
      id: AppSetting.KeyInstructions,
      title: 'API Key Instructions',
      subtext: 'Understand how to get API Key',
    },
    {
      id: AppSetting.About,
      title: 'About ReciPro AI',
    },
    {
      id: AppSetting.Feedback,
      title: 'Feedback',
    },
  ],
};
