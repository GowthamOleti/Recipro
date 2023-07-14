import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {appLabels} from '../../../../../appLabels';
import {InputActionType} from '../../../../common/constants';
import {useAppTheme} from '../../../../common/useAppTheme';
import {getStyles} from './inputActions.styles';
import {MoreInputActions} from './moreInputActions';
import {useInputActions} from './useInputActions';

export interface InputActionsProps {
  input: string;
}

export const InputActions = ({input}: InputActionsProps) => {
  const {
    onActionButtonPress,
    showMoreOptions,
    setShowMoreOptions,
    onActionButtonLongPress,
  } = useInputActions({input});
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
          onPress={() => onActionButtonPress(InputActionType.Rewrite)}
          onLongPress={onActionButtonLongPress}>
          <Text style={styles.actionButtonText}>{inputActions.rewrite}</Text>
        </TouchableOpacity>
      </View>
      <MoreInputActions
        input={input}
        showMoreActions={showMoreOptions}
        setShowMoreActions={setShowMoreOptions}
        actionType={InputActionType.Rewrite}
      />
    </View>
  );
};
