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
import {moreActions} from '../../../../../appLabels';
import {MoreOptionsType} from '../../../../common/constants';
import {ThemeProps, useAppTheme} from '../../../../common/useAppTheme';
import {Screen, StackNavigation} from '../../../../navigation/navigationTypes';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {fetchInputActionTag, trackAction} from '../../../../util/analytics';

export interface AdditionalOptionsProps {
  input: string;
  showMoreActions: boolean;
  setShowMoreActions: (value: boolean) => void;
  type: MoreOptionsType;
}

export const MoreInputActions = ({
  type,
  input,
  showMoreActions,
  setShowMoreActions,
}: AdditionalOptionsProps) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const navigation = useNavigation<StackNavigation>();

  const options =
    type === MoreOptionsType.Read ? moreActions.read : moreActions.write;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showMoreActions}
      onRequestClose={() => {
        setShowMoreActions(false);
      }}>
      <Pressable
        style={styles.container}
        onPress={() => setShowMoreActions(false)}>
        <View style={styles.contentContainer}>
          {options.map(item => (
            <TouchableOpacity
              style={[
                styles.buttonContainer,
                type === MoreOptionsType.Read
                  ? styles.readButtonColor
                  : styles.writeButtonColor,
              ]}
              onPressOut={() => setShowMoreActions(false)}
              onPress={() => {
                trackAction(fetchInputActionTag[item.id]);
                ReactNativeHapticFeedback.trigger('soft', {
                  enableVibrateFallback: true,
                  ignoreAndroidSystemSettings: false,
                });
                navigation.navigate(Screen.RESULT, {
                  actionType: item.id,
                  input,
                });
              }}>
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      type === MoreOptionsType.Read
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

const getStyles = ({colors, fonts}: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    contentContainer: {
      backgroundColor: colors.textBackground,
      borderRadius: 30,
      alignSelf: 'center',
      width: '90%',
      paddingVertical: '10%',
    },
    buttonContainer: {
      borderRadius: 25,
      marginVertical: '3%',
      marginHorizontal: '15%',
    },
    text: {
      marginVertical: '5%',
      textAlign: 'center',
      fontSize: 17,
      fontFamily: fonts.SansMedium,
    },
    readButtonColor: {
      backgroundColor: colors.green,
    },
    writeButtonColor: {
      backgroundColor: colors.yellow,
    },
  });
