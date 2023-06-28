import {StackScreenProps} from '@react-navigation/stack';
import {InputActionType} from '../util/constants';

export enum Screen {
  HOME = 'HOME',
  RESULT = 'RESULT',
  ASK_API_KEY = 'ASK_API_KEY',
}

export type NavStackParams = {
  [Screen.HOME]: undefined;
  [Screen.RESULT]: {
    actionType: InputActionType;
    input: string;
  };
  [Screen.ASK_API_KEY]: {
    reset?: boolean;
  };
};

export type HomeScreenProps = StackScreenProps<NavStackParams, Screen.HOME>;
export type ResultScreenProps = StackScreenProps<NavStackParams, Screen.RESULT>;
