export enum InputActionType {
  Summarize = 'SUMMARIZE',
  Rewrite = 'REWRITE',
  Default = 'DEFAULT',
}

export const fetchPromptPrefix: Record<InputActionType, string> = {
  SUMMARIZE:
    'Summarize the text concisely while covering all key points and main ideas. Use relevant details and examples, avoid repetition, and ensure the length is appropriate for the complexity while conveying all important information. - ',
  REWRITE: 'Rewrite - ',
  DEFAULT: '',
};
