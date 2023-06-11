import {appLabels} from './labels';
import {InputActionType} from './src/util/constants';

interface GlobalStateObject {
  input: string;
  output: string;
  actionType: InputActionType;
}

// const globalState: GlobalStateObject = {
//   input: '',
//   result: '',
//   actionType: InputActionType.Default,
// };

const globalState: GlobalStateObject = {
  input: appLabels.mocks.input,
  output: appLabels.mocks.output,
  actionType: InputActionType.Default,
};

export default globalState;
