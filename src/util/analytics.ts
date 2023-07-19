import analytics from '@react-native-firebase/analytics';

export const trackAction = (eventName: string) => {
  console.log(`Analytics Action: ${eventName}`);
  analytics().logEvent(eventName);
};

export const trackState = (screen: string) => {
  console.log(`Analytics State: ${screen}`);
  analytics().logScreenView({screen_name: screen});
};

export const analyticsTags = {
  init: {
    initScreen: 'Init - Init Screen - {initScreenName}',
    firstTime: 'Init - First Time',
    notFirstTime: 'Init - Not First Time',
    keyPresent: 'Init - API Key Present',
    keyNotPresent: 'Init - API Key Not Present',
  },
  homescreen: {
    sharedText: 'Home Screen - Shared Input',
    autoSummarizing: 'Home Screen - Auto Summarizing...',
    paste: 'Home Screen - Pasted from Clipboard',
    clear: 'Home Screen - Clear Text',
    inputActions: {
      rewrite: 'Home Screen - Input Actions - Rewrite',
      summarize: 'Home Screen - Input Actions - Summarize',
      rewriteLongPress: 'Home Screen - Input Actions - More Writing Actions',
      summarizeLongPress: 'Home Screen - Input Actions - More Reading Actions',
      professional: 'Home Screen - Input Actions - Professional Tone',
      casual: 'Home Screen - Input Actions - Casual Tone',
      fixGrammar: 'Home Screen - Input Actions - Fix Grammar',
    },
  },
  resultScreen: {
    resultSuccess: 'Result Screen - Result Success',
    resultFailure: 'Result Screen - Result Failure',
    actions: {
      share: 'Result Screen - Result Actions - Share',
      copy: 'Result Screen - Result Actions - Copy',
      tweet: 'Result Screen - Result Actions - Tweet',
      email: 'Result Screen - Result Actions - Email',
    },
    error: {
      invalidKey: 'Result Screen - Error - Invalid API Key',
      paymentDetailsError: 'Result Screen - Error - API Key not activated',
      genericError: 'Result Screen - Error - Generic API Error',
      retry: 'Result Screen - Error - Retry',
      reset: 'Result Screen - Error - Reset API Key',
      instructions: 'Result Screen - Error - View Instructions',
    },
  },
  settingsScreen: {
    autoSummarizeEnable: 'Settings Screen - Auto Summarize - Enable',
    autoSummarizeDisable: 'Settings - Auto Summarize - Disable',
    showTweetMail: 'Settings Screen - Tweet Email - Show',
    hideTweetMail: 'Settings Screen - Tweet Email - Hide',
    darkModeEnable: 'Settings Screen - Dark Mode - Enable',
    darkModeDisable: 'Settings Screen - Dark Mode - Disable',
    resetKey: 'Settings Screen - Reset Key',
    resetKeyModalYes: 'Settings Screen - Reset Key Modal - Yes',
    resetKeyModalCancel: 'Settings Screen - Reset Key Modal - Cancel',
    resetInstructions: 'Settings Screen - Reset Key Instructions',
    aboutTextCraft: 'Settings Screen - About TextCraft',
    feedback: 'Settings Screen - Feedback',
  },
  errorToast: {
    emptyInput: 'Home Screen - Error Toast - Empty Input',
    unsupportedLink: 'Home Screen - Error Toast - Unsupported Link',
    twitterNotInstalled: 'Result Screen - Error Toast - Twitter Not Installed',
    invalidKey: 'Ask API Key Screen - Error Toast - Invalid Key',
  },
  onboarding: {
    aboutScreenRead: 'Onboarding - About Screen - Read',
    aboutScreenNotRead: 'Onboarding - About Screen - Not Read',
    aboutScreenNext: 'Onboarding - About Screen - Next',
    apiKeyLink: 'Onboarding - Ask API Screen - Generate Key Link',
    apiKeyNext: 'Onboarding - Ask API Key Screen - Next Button',
    paymentDetailsLink: 'Onboarding - Add Payment Screen - Payment Link',
    usageLimitLink: 'Onboarding - Add Payment Screen - Usage Limit Link',
    done: 'Onboarding - Add Payment Screen - Done Button',
    apiKeyErrorPopup: {
      error: 'Onboarding - Generic API Key Error',
      paymentError: 'Onboarding - API Key Activation Error',
      invalidKeyError: 'Onboarding - Invalid API Key Error',
      okay: 'Onboarding - API Key Error Modal - Okay',
    },
    apiKeyTestSuccess: 'Onboarding - Key Test Success',
    apiKeyTestFailure: 'Onboarding - Key Test Failure',
  },
  askApiKeyScreen: {
    apiKeyTestSuccess: 'Ask API Key Screen - Key Test Success',
    apiKeyTestFailure: 'Ask API Key Screen - Key Test Failure',
    apiKeyErrorPopup: {
      error: 'Ask API Key Screen - Generic API Key Error',
      paymentError: 'Ask API Key Screen - API Key Activation Error',
      invalidKeyError: 'Ask API Key Screen - Invalid API Key Error',
      instructions: 'Ask API Key Screen - API Key Error Modal - Instructions',
      okay: 'Ask API Key Screen - API Key Error Modal - Okay',
    },
    saveAPIKey: 'Ask API Key Screen - Save Key',
  },
  apiKeyInstructions: {
    generateKeyLink: 'API Key Instructions Screen - Generate Key Link',
    addPaymentLink: 'API Key Instructions Screen - Payment Link',
    usageLimitLink: 'API Key Instructions Screen - Usage Limit Link',
  },
  headerActions: {
    resultBack: 'Result Screen - Go Back',
    settingsBack: 'Settings Screen - Go Back',
    aboutScreenBack: 'About Screen - Go Back',
    instructionsScreenBack: 'API Key Instructions Screen - Go Back',
    askAPIScreenBack: 'Ask API Key Screen - Go Back',
    addPaymentDetailsScreenBack: 'Add Payment Details Screen - Go Back',
    settingsButtonHome: 'Home Screen - Settings Button',
    settingsButtonResult: 'Result Screen - Settings Button',
  },
  privacyPolicy: 'About Screen - Privacy Policy',
  screens: {
    HOME: 'Home Screen',
    RESULT: 'Result Screen',
    ASK_API_KEY: 'Ask API Key Screen',
    ABOUT: 'About Screen',
    API_KEY_INSTRUCTIONS: 'API Key Instructions Screen',
    ADD_PAYMENT_DETAILS: 'Add Payment Screen',
  },
};
