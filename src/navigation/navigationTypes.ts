import {StackScreenProps} from '@react-navigation/stack';
import {InputActionType} from '../util/constants';

export enum Screen {
  HOME = 'HOME',
  RESULT = 'RESULT',
}

export type NavStackParams = {
  [Screen.HOME]: undefined;
  [Screen.RESULT]: {
    actionType: InputActionType;
    input: string;
  };
};

export type HomeScreenProps = StackScreenProps<NavStackParams, Screen.HOME>;
export type ResultScreenProps = StackScreenProps<NavStackParams, Screen.RESULT>;
