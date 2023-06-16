export enum InputActionType {
  Summarize = 'SUMMARIZE',
  Rewrite = 'REWRITE',
  Default = 'DEFAULT',
}

export const fetchPromptPrefix: Record<InputActionType, string> = {
  SUMMARIZE: 'Summarize this in bullet points - ',
  REWRITE: 'Rewrite - ',
  DEFAULT: '',
};
