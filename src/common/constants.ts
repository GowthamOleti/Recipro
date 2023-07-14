export enum InputActionType {
  Summarize = 'SUMMARIZE',
  Rewrite = 'REWRITE',
}

export enum ResultErrorType {
  INVALID_KEY = 'INVALID_KEY',
  PAYMENT_DETAILS_UNAVAILABLE = 'PAYMENT_DETAILS_UNAVAILABLE',
  GENERIC = 'GENERIC',
}

export enum ExplainerScreenType {
  KEY_INSTRUCTIONS = 'KEY_INSTRUCTIONS',
  ADD_PAYMENT = 'ADD_PAYMENT',
  ABOUT = 'ABOUT',
}

export const fetchPromptPrefix: Record<InputActionType, string> = {
  SUMMARIZE:
    'Summarize the text concisely while covering all key points and main ideas. Use relevant details and examples, avoid repetition, and ensure the length is appropriate for the complexity while conveying all important information. - ',
  REWRITE: 'Rewrite - ',
};

export enum AppSetting {
  // Toggle Settings
  QUICK_SUMMARIZE = 'QUICK_SUMMARIZE',
  SHOW_TWEET_MAIL = 'SHOW_TWITTER_MAIL',
  IS_DARK_MODE = 'IS_DARK_MODE',
  // Non-Toggle Settings
  RESET_API_KEY = 'RESET_API_KEY',
  KEY_INSTRUCTIONS = 'KEY_INSTRUCTIONS',
  FEEDBACK = 'FEEDBACK',
  HOW_TO_USE = 'HOW_TO_USE',
  // Non-Visible Settings
  IS_FIRST_TIME = 'IS_FIRST_TIME',
}
