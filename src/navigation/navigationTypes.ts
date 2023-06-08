import {StackScreenProps} from '@react-navigation/stack';
import {ReadEditScreenType} from '../util/constants';

export enum Screen {
  HOME = 'HOME',
  READ_EDIT = 'READ_EDIT',
}

export type NavStackParams = {
  [Screen.HOME]: {updatedInputText?: string};
  [Screen.READ_EDIT]: {
    type: ReadEditScreenType;
    displayText: string;
    title: string;
  };
};

export type HomeScreenProps = StackScreenProps<NavStackParams, Screen.HOME>;
export type ReadEditScreenProps = StackScreenProps<
  NavStackParams,
  Screen.READ_EDIT
>;
