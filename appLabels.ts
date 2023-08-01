import {AppAlertType} from './src/common/appAlert';
import {
  AppSetting,
  InputActionType,
  ResultErrorType,
} from './src/common/constants';

export const appLabels = {
  appName: 'TextCraft',
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
        'TextCraft simplifies the way you read and write by utilizing Al technology. The app currently offers two main features - Summarize and Rewrite.',
      summarizePrefix: '\nSummarize: ',
      summarizeDescription:
        'This feature is useful to summarize lengthy texts or article links. TextCraft can generate a concise and easy-to-understand summary. Long-pressing on summarize will show more options. Also, by enabling the "Auto-Summarize Links" option in settings, you can summarize shared article links instantly.',
      rewritePrefix: '\nRewrite: ',
      rewriteDescription:
        'TextCraft can also help with writing English content for work or social media. Just give any rough text as input and it will give you a well-written output while preserving the meaning, tone, and essence of the original text. By long-pressing on Rewrite you can access additional options like setting the tone, fixing grammar, expanding and shortening any text.',
      dataCollection:
        "\nNote: To keep the app free for everyone, we've provided the option to use your own API Key. We store this key locally in your device's encrypted storage. Apart from analytics, we do not collect any other data. We use analytics to improve the user experience. For information regarding how we handle your data, read our ",
      privacyPolicy: 'Privacy Policy',
      privacyPolicyLink:
        'https://medium.com/@textcraft.app/textcraft-privacy-policy-b1aa01d20c00',
      conclusionNewUser: '\n\nThank you for downloading TextCraft! ❤️',
      feedbackLink: 'feedback',
      conclusion1: '\n\nFeel free to share your ',
      conclusion2: '. Thank you for using TextCraft! ❤️',
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
      checkUsage: '\n\nCheck your API Key usage & cost details',
      checkUsageLink: 'https://platform.openai.com/account/usage',
      usageLimit: '\n\nSet usage limits for your API Key\n\n',
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
      rewriteLink: 'Rewrite Does Not Support Links!',
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
  appVersion: 'Version {version}',
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
  EXPLAIN_LIKE_TEN: 'Explanation',
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
      id: InputActionType.ExplainLikeTen,
      title: "Explain Like I'm 10",
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
      id: AppSetting.QuickSummarize,
      title: 'Auto-Summarize Links',
      subtext: 'Quickly Summarize Shared Article links',
      hasToggle: true,
    },
    {
      id: AppSetting.ShowTweetEmail,
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
      id: AppSetting.ResetKey,
      title: 'Reset API Key',
      subtext: 'Current key ends with "{key}"',
    },
    {
      id: AppSetting.KeyInstructions,
      title: 'API Key Instructions',
    },
    {
      id: AppSetting.About,
      title: 'About TextCraft',
    },
    {
      id: AppSetting.Feedback,
      title: 'Feedback',
    },
  ],
};
