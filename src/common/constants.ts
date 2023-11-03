export enum InputActionType {
  // Expand = 'EXPAND',
  Explain = 'EXPLAIN',
  ExplainLikeTen = 'EXPLAIN_LIKE_TEN',
  // FixGrammar = 'FIX_GRAMMAR',
  // Rewrite = 'REWRITE',
  // RewriteCasual = 'REWRITE_CASUAL',
  // RewriteProfessional = 'REWRITE_PROFESSIONAL',
  // Shorten = 'SHORTEN',
  Summarize = 'SUMMARIZE',
  SummarizeInPoints = 'SUMMARIZE_IN_POINTS',
  Expand = 'Expand',
  FixGrammar = 'FixGrammar',
  // Rewrite = 'Rewrite',
  // RewriteProfessional = 'RewriteProfessional',
  // RewriteCasual = 'RewriteCasual',
  Shorten = 'Shorten',
}

export const appVersion = require('../../package.json').version;

export enum MoreOptionsType {
  Read = 'READ',
  Write = 'WRITE',
}

export enum ResultErrorType {
  Generic = 'GENERIC',
  InvalidKey = 'INVALID_KEY',
  KeyNotActivated = 'PAYMENT_DETAILS_UNAVAILABLE',
}

export enum ExplainerScreenType {
  About = 'ABOUT',
  AddPayment = 'ADD_PAYMENT',
  KeyInstructions = 'KEY_INSTRUCTIONS',
}

export const fetchPrompt: Record<InputActionType, string> = {
  // EXPAND: 'Expand this text into one paragraph - ',
  EXPLAIN_LIKE_TEN: 'provide a summarized version of the text, crisp - ',
  EXPLAIN:
    "Based on the traditional origin of the dish [USER_INPUT]. Then provide an extremely detailed recipe for [USER_INPUT]. If the dish isn't recognized or provided, please respond with 'Please provide a valid food item'. Additionally, suggest relevant YouTube videos, channels, and websites for further learning.- ",
  // FIX_GRAMMAR: 'Fix Grammar - ',
  // REWRITE_CASUAL: 'Rewrite in casual tone - ',
  // REWRITE_PROFESSIONAL: 'Rewrite in professional tone - ',
  // REWRITE: 'Rewrite - ',
  // SHORTEN:
  //   'Make this text shorter but it should preserve all the meaning and tone - ',
  SUMMARIZE_IN_POINTS:
    'Given that I am assisting an intermediate cook, please provide a moderately detailed recipe for [USER_INPUT]. If there is no provided dish, please respond with "Please provide a valid food item".- ',
  SUMMARIZE:
    'Given that I am assisting a pro cook, provide a concise yet comprehensive recipe for [USER_INPUT]. If there is no provided dish, please respond with "Please provide a valid food item".- ',
  [InputActionType.Expand]: '',
  [InputActionType.FixGrammar]: '',
  // [InputActionType.Rewrite]: '',
  // [InputActionType.RewriteCasual]: '',
  // [InputActionType.RewriteProfessional]: '',
  [InputActionType.Shorten]: '',
};

export enum AppSetting {
  // Toggle Settings
  QuickSummarize = 'QUICK_SUMMARIZE',
  ShowTweetEmail = 'SHOW_TWITTER_MAIL',
  IsDarkMode = 'IS_DARK_MODE',
  // Non-Toggle Settings
  ResetKey = 'RESET_API_KEY',
  KeyInstructions = 'KEY_INSTRUCTIONS',
  Feedback = 'FEEDBACK',
  About = 'ABOUT',
  // Non-Visible Settings
  IsFirstTime = 'IS_FIRST_TIME',
}
