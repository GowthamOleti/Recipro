import {NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackScreenProps} from '@react-navigation/stack';
import {ExplainerScreenType, InputActionType} from '../common/constants';

export enum Screen {
  AskApiKey = 'ASK_API_KEY',
  Explainer = 'EXPLAINER',
  Home = 'HOME',
  Result = 'RESULT',
  Settings = 'SETTINGS',
}

export type NavStackParams = {
  [Screen.Home]: undefined;
  [Screen.Result]: {
    actionType: InputActionType;
    input: string;
  };
  [Screen.AskApiKey]: undefined;
  [Screen.Explainer]: {
    type?: ExplainerScreenType;
    key?: string;
  };
  [Screen.Settings]: undefined;
};

export const Stack = createNativeStackNavigator<NavStackParams>();

export type StackNavigation = NavigationProp<NavStackParams>;

export type HomeScreenProps = StackScreenProps<NavStackParams, Screen.Home>;
export type ResultScreenProps = StackScreenProps<NavStackParams, Screen.Result>;
export type AskApiScreenProps = StackScreenProps<
  NavStackParams,
  Screen.AskApiKey
>;
export type ExplainerScreenProps = StackScreenProps<
  NavStackParams,
  Screen.Explainer
>;
export type SettingsScreenProps = StackScreenProps<
  NavStackParams,
  Screen.Settings
>;
