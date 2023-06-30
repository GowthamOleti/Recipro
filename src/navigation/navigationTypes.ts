import {NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackScreenProps} from '@react-navigation/stack';
import {ExplainerScreenType, InputActionType} from '../util/constants';

export enum Screen {
  HOME = 'HOME',
  RESULT = 'RESULT',
  ASK_API_KEY = 'ASK_API_KEY',
  EXPLAINER = 'EXPLAINER',
  SETTINGS = 'SETTINGS',
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
  [Screen.EXPLAINER]: {
    type: ExplainerScreenType;
  };
  [Screen.SETTINGS]: undefined;
};

export const Stack = createNativeStackNavigator<NavStackParams>();

export type StackNavigation = NavigationProp<NavStackParams>;

export type HomeScreenProps = StackScreenProps<NavStackParams, Screen.HOME>;
export type ResultScreenProps = StackScreenProps<NavStackParams, Screen.RESULT>;
export type AskApiScreenProps = StackScreenProps<
  NavStackParams,
  Screen.ASK_API_KEY
>;
export type ExplainerScreenProps = StackScreenProps<
  NavStackParams,
  Screen.EXPLAINER
>;
export type SettingsScreenProps = StackScreenProps<
  NavStackParams,
  Screen.SETTINGS
>;
