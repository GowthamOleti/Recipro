import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{paddingHorizontal: '10%'}}>
          <View>
            <Text style={{marginTop: '20%', fontWeight: '700'}}>
              Input Text:
            </Text>
            <Text> abc </Text>
            <Text style={{marginTop: '20%', fontWeight: '700'}}>
              Output Text:
            </Text>
            <Text> xyz </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Summarize" />
            <Button title="Rewrite" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  buttonContainer: {
    flexDirection: 'row',
    marginTop: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: '20%',
  },
});
