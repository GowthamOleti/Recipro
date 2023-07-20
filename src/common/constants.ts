export enum InputActionType {
  Summarize = 'SUMMARIZE',
  Rewrite = 'REWRITE',
  RewriteProfessional = 'REWRITE_PROFESSIONAL',
  RewriteCasual = 'REWRITE_CASUAL',
  FixGrammar = 'FIX_GRAMMAR',
  Expand = 'EXPAND',
  Explain = 'EXPLAIN',
  ExplainLikeFive = 'EXPLAIN_LIKE_FIVE',
  SummarizeInPoints = 'SUMMARIZE_IN_POINTS',
  Shorten = 'SHORTEN',
}

export const appVersion = require('../../package.json').version;

export enum MoreOptionsType {
  Read = 'READ',
  Write = 'WRITE',
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
  REWRITE_PROFESSIONAL: 'Rewrite in professional tone - ',
  REWRITE_CASUAL: 'Rewrite in casual tone - ',
  FIX_GRAMMAR: 'Fix Grammar - ',
  EXPAND: 'Expand - ',
  SHORTEN:
    'Make this text shorter but it should preserve all the meaning and tone - ',
  EXPLAIN:
    'Please provide a detailed explanation of the text provided, including any relevant background information or context that may help clarify the meaning. Also ensure your response is specific, concise, and avoids the use of any complex terminology or jargon. - ',
  EXPLAIN_LIKE_FIVE: "Explain Like I'm 5 - ",
  SUMMARIZE_IN_POINTS:
    'Summarize the text in points concisely while covering all key points and main ideas. Use relevant details and examples, avoid repetition, and ensure the length is appropriate for the complexity while conveying all important information. - ',
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
