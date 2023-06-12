import {createContext} from 'react';
//import {appLabels} from './labels';
import {InputActionType} from './src/util/constants';

export type GlobalContextType = {
  input: string;
  output: string;
  actionType: InputActionType;
  isOpenAIApiKeyPresent: boolean;
};

// export const defaultContextData = {
//   input: appLabels.mocks.input,
//   output: appLabels.mocks.output,
//   actionType: InputActionType.Default,
//   isOpenAIApiKeyPresent: false,
// };

export const defaultContextData = {
  input: '',
  output: '',
  actionType: InputActionType.Default,
  isOpenAIApiKeyPresent: true,
};

export const GlobalContext = createContext({
  contextData: defaultContextData,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setContextData: (contextData: GlobalContextType) => {},
});
