export enum InputActionType {
  Expand = 'EXPAND',
  Explain = 'EXPLAIN',
  ExplainLikeFive = 'EXPLAIN_LIKE_FIVE',
  FixGrammar = 'FIX_GRAMMAR',
  Rewrite = 'REWRITE',
  RewriteCasual = 'REWRITE_CASUAL',
  RewriteProfessional = 'REWRITE_PROFESSIONAL',
  Shorten = 'SHORTEN',
  Summarize = 'SUMMARIZE',
  SummarizeInPoints = 'SUMMARIZE_IN_POINTS',
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
  EXPAND: 'Expand - ',
  EXPLAIN_LIKE_FIVE: "Explain Like I'm 5 - ",
  EXPLAIN:
    'Please provide a detailed explanation of the text provided, including any relevant background information or context that may help clarify the meaning. Also ensure your response is specific, concise, and avoids the use of any complex terminology or jargon. - ',
  FIX_GRAMMAR: 'Fix Grammar - ',
  REWRITE_CASUAL: 'Rewrite in casual tone - ',
  REWRITE_PROFESSIONAL: 'Rewrite in professional tone - ',
  REWRITE: 'Rewrite - ',
  SHORTEN:
    'Make this text shorter but it should preserve all the meaning and tone - ',
  SUMMARIZE_IN_POINTS:
    'Summarize the text in points concisely while covering all key points and main ideas. Use relevant details and examples, avoid repetition, and ensure the length is appropriate for the complexity while conveying all important information. - ',
  SUMMARIZE:
    'Summarize the text concisely while covering all key points and main ideas. Use relevant details and examples, avoid repetition, and ensure the length is appropriate for the complexity while conveying all important information. - ',
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
