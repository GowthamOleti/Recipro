export enum InputActionType {
  Summarize = 'SUMMARIZE',
  Rewrite = 'REWRITE',
}

export enum ResultErrorType {
  INVALID_KEY = 'INVALID_KEY',
  GENERIC = 'GENERIC',
}

export enum ExplainerScreenType {
  API_KEY = 'API_KEY',
  GENERAL = 'GENERAL',
}

export const fetchPromptPrefix: Record<InputActionType, string> = {
  SUMMARIZE:
    'Summarize the text concisely while covering all key points and main ideas. Use relevant details and examples, avoid repetition, and ensure the length is appropriate for the complexity while conveying all important information. - ',
  REWRITE: 'Rewrite - ',
};

export enum AppSetting {
  // Toggle settings
  QUICK_SUMMARIZE = 'QUICK_SUMMARIZE',
  SHOW_TWEET_MAIL = 'SHOW_TWITTER_MAIL',
  IS_DARK_MODE = 'IS_DARK_MODE',
  // Non-Toggle settings
  RESET_API_KEY = 'RESET_API_KEY',
  FEEDBACK = 'FEEDBACK',
  HOW_TO_USE = 'HOW_TO_USE',
}
