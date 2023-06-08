import {InputActionType} from './src/util/constants';

export const appLabels = {
  homeScreenLabels: {
    input: 'Input',
    resultType: {
      summary: 'Summary',
      rewritten: 'Rewritten',
    },
    action: {
      summarize: 'Summarize',
      rewrite: 'Rewrite',
    },
  },
  readEditScreenLabels: {
    closeButton: 'Close',
    doneButton: 'Done',
  },
  mocks: {
    input:
      'React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.',
    output:
      'React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces. React Native blends the finest elements of native app development with React, an exceptional JavaScript library utilized for constructing user interfaces.',
  },
};

export const fetchInputActionTitle: Record<InputActionType, string> = {
  SUMMARIZE: 'Summary',
  REWRITE: 'Rewritten',
  DEFAULT: 'Result',
};
