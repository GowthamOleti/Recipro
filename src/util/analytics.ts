import analytics from '@react-native-firebase/analytics';

export const trackEvent = (eventName: string) => {
  analytics().logEvent(eventName);
};

export const trackScreen = (screen: string) => {
  analytics().logScreenView({screen_name: screen});
};

export const analyticEvents = {
  inputActions: {
    rewrite: 'Home Screen - Input Actions - Rewrite',
    summarize: 'Home Screen - Input Actions - Summarize',
    rewriteLongPress: 'Home Screen - Input Actions - More Writing Actions',
    summarizeLongPress: 'Home Screen - Input Actions - More Reading Actions',
    professional: 'Home Screen - Input Actions - Professional Tone',
    casual: 'Home Screen - Input Actions - Casual Tone',
    fixGrammar: 'Home Screen - Input Actions - Fix Grammar',
  },
  resultActions: {
    share: 'Result Screen - Result Actions - Share',
    copy: 'Result Screen - Result Actions - Copy',
    tweet: 'Result Screen - Result Actions - Tweet',
    email: 'Result Screen - Result Actions - Email',
  },
  settings: {
    settingsButtonHome: 'Home Screen - Settings Button',
    settingsButtonResult: 'Result Screen - Settings Button',
    autoSummarizeEnable: 'Settings Screen - Auto Summarize - Enable',
    autoSummarizeDisable: 'Settings - Auto Summarize - Disable',
    showTweetMail: 'Settings Screen - Tweet Email - Show',
    hideTweetMail: 'Settings Screen - Tweet Email - Hide',
    darkModeEnable: 'Settings Screen - Dark Mode - Enable',
    darkModeDisable: 'Settings Screen - Dark Mode - Disable',
    resetKey: 'Settings Screen - Reset Key',
    resetKeyModalYes: 'Settings Screen - Reset Key - Yes',
    resetKeyModalCancel: 'Settings Screen - Reset Key - Cancel',
    resetInstructions: 'Settings Screen - Reset Key Instructions',
    aboutTextCraft: 'Settings Screen - About TextCraft',
    feedback: 'Settings Screen - Feedback',
  },
  errorToast: {
    emptyInput: 'Error Toast - Input - Empty',
    unsupportedLink: 'Error Toast - Input - Unsupported Link',
    twitterNotInstalled: 'Error Toast - Result - Twitter Not Installed',
    invalidKey: 'Error Toast - API Key - Invalid Key',
  },
  infoToast: {
    copy: 'Info Toast - Copied to Clipboard',
    paste: 'Info Toast - Pasted from Clipboard',
  },
  apiKeySetup: {
    apiKeyNext: 'Ask API Key Screen - Next Button',
    done: 'Add Payment Details Screen - Done Button',
    saveKey: 'Ask API Key Screen - Save Button',
    apiKeyError: 'Ask API Key Screen Screen - API Key Error',
    apiKeyErrorPayment: 'Add Payment Details Screen - API Key Error',
  },
  about: {
    next: 'About Screen - Next',
    privacyPolicy: 'About Screen - Privacy Policy',
  },
  screens: {
    HOME: 'Home Screen',
    RESULT: 'Result Screen',
    ASK_API_KEY: 'Ask API Key Screen',
    ABOUT: 'About Screen',
    API_KEY_INSTRUCTIONS: 'API Key Instructions Screen',
    ADD_PAYMENT_DETAILS: 'Add Payment Details Screen',
  },
};
