import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {appLabels} from '../../../../../appLabels';
import {InputActionType} from '../../../../common/constants';
import {ThemeProps, useAppTheme} from '../../../../common/useAppTheme';
import {Screen, StackNavigation} from '../../../../navigation/navigationTypes';

export interface AdditionalOptionsProps {
  input: string;
  showMoreActions: boolean;
  setShowMoreActions: (value: boolean) => void;
  actionType: InputActionType;
}

export const MoreInputActions = ({
  input,
  showMoreActions,
  setShowMoreActions,
}: AdditionalOptionsProps) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const rewriteOptions = appLabels.moreInputActions.rewrite;

  const navigation = useNavigation<StackNavigation>();

  return (
    <Modal
      animationType="fade"
      focusable={true}
      transparent={true}
      visible={showMoreActions}
      onRequestClose={() => {
        setShowMoreActions(false);
      }}>
      <Pressable
        style={styles.container}
        onPress={() => setShowMoreActions(false)}>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            onPressOut={() => setShowMoreActions(false)}
            onPress={() =>
              navigation.navigate(Screen.RESULT, {
                actionType: InputActionType.RewriteCasual,
                input,
              })
            }>
            <Text style={styles.text}>{rewriteOptions.casual}</Text>
            <View style={styles.divider} />
          </TouchableOpacity>
          <TouchableOpacity
            onPressOut={() => setShowMoreActions(false)}
            onPress={() =>
              navigation.navigate(Screen.RESULT, {
                actionType: InputActionType.RewriteProfessional,
                input,
              })
            }>
            <Text style={styles.text}>{rewriteOptions.professional}</Text>
            <View style={styles.divider} />
          </TouchableOpacity>
          <TouchableOpacity
            onPressOut={() => setShowMoreActions(false)}
            onPress={() =>
              navigation.navigate(Screen.RESULT, {
                actionType: InputActionType.FixGrammar,
                input,
              })
            }>
            <Text style={styles.text}>{rewriteOptions.fixGrammar}</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    contentContainer: {
      backgroundColor: colors.yellow,
      borderRadius: 30,
      elevation: 5,
      alignSelf: 'center',
      width: '90%',
    },
    text: {
      marginVertical: '5%',
      textAlign: 'center',
      color: colors.yellowText,
      fontSize: 17,
      fontFamily: fonts.SansMedium,
    },
    divider: {
      borderBottomColor: colors.common.placeHolderText,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
