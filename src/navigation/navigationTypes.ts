import {StackScreenProps} from '@react-navigation/stack';
import {ReadEditScreenType} from '../util/constants';

export enum Screen {
  HOME = 'HOME',
  READ_EDIT = 'READ_EDIT',
}

export type NavStackParams = {
  [Screen.HOME]: undefined;
  [Screen.READ_EDIT]: {
    type: ReadEditScreenType;
    title: string;
  };
};

export type HomeScreenProps = StackScreenProps<NavStackParams, Screen.HOME>;
export type ReadEditScreenProps = StackScreenProps<
  NavStackParams,
  Screen.READ_EDIT
>;
