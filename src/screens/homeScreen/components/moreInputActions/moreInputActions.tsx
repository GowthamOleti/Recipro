import React from 'react';
import {Modal, Text, View, TouchableOpacity, Pressable} from 'react-native';
import {MoreOptionsType} from '../../../../common/constants';
import {useMoreInputActions} from './useMoreInputActions';

export interface MoreOptionsProps {
  input: string;
  showMoreActions: boolean;
  setShowMoreActions: (value: boolean) => void;
  type: MoreOptionsType;
}

export const MoreInputActions = (props: MoreOptionsProps) => {
  const {theme, styles, options, onMoreActionPress} =
    useMoreInputActions(props);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.showMoreActions}
      onRequestClose={() => {
        props.setShowMoreActions(false);
      }}>
      <Pressable
        style={styles.container}
        onPress={() => props.setShowMoreActions(false)}>
        <View style={styles.contentContainer}>
          {options.map(item => (
            <TouchableOpacity
              style={[
                styles.buttonContainer,
                props.type === MoreOptionsType.Read
                  ? styles.readButtonColor
                  : styles.writeButtonColor,
              ]}
              onPressOut={() => props.setShowMoreActions(false)}
              onPress={() => onMoreActionPress(item.id)}>
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      props.type === MoreOptionsType.Read
                        ? theme.colors.greenText
                        : theme.colors.yellowText,
                  },
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Pressable>
    </Modal>
  );
};
