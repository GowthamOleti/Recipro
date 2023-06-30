import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {appLabels} from '../../../appLabels';
import {InputActionType} from '../../util/constants';
import {useAppTheme} from '../../util/useAppTheme';
import {getStyles} from './inputActions.styles';
import {useInputActions} from './useInputActions';

export interface InputActionsProps {
  input: string;
}

export const InputActions = ({input}: InputActionsProps) => {
  const {onActionButtonPress} = useInputActions({input});
  const {inputActions} = appLabels;
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.actionButtonContainer, styles.summaryButtonColor]}
          onPress={() => onActionButtonPress(InputActionType.Summarize)}>
          <Text style={styles.actionButtonText}>{inputActions.summarize}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButtonContainer, styles.rewriteButtonColor]}
          onPress={() => onActionButtonPress(InputActionType.Rewrite)}>
          <Text style={styles.actionButtonText}>{inputActions.rewrite}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
