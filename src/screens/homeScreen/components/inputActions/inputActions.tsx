import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {appLabels} from '../../../../../appLabels';
import {InputActionType} from '../../../../common/constants';
import {MoreInputActions} from '../moreInputActions/moreInputActions';
import {useInputActions} from './useInputActions';

export interface InputActionsProps {
  input: string;
}

export const InputActions = ({input}: InputActionsProps) => {
  const {
    moreOptionsType,
    onActionButtonLongPress,
    onActionButtonPress,
    setShowMoreOptions,
    showMoreOptions,
    styles,
  } = useInputActions({input});

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.actionButtonContainer, styles.summaryButtonColor]}
          onPress={() => onActionButtonPress(InputActionType.Summarize)}
          onLongPress={() =>
            onActionButtonLongPress(InputActionType.Summarize)
          }>
          <Text
            style={[styles.actionButtonText, styles.summaryButtonTextColor]}>
            {appLabels.inputActions.summarize}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButtonContainer, styles.rewriteButtonColor]}
          onPress={() => onActionButtonPress(InputActionType.Rewrite)}
          onLongPress={() => onActionButtonLongPress(InputActionType.Rewrite)}>
          <Text
            style={[styles.actionButtonText, styles.rewriteButtonTextColor]}>
            {appLabels.inputActions.rewrite}
          </Text>
        </TouchableOpacity>
      </View>
      {moreOptionsType && (
        <MoreInputActions
          input={input}
          showMoreActions={showMoreOptions}
          setShowMoreActions={setShowMoreOptions}
          type={moreOptionsType}
        />
      )}
    </View>
  );
};
