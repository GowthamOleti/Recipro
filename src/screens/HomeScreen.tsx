import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export const HomeScreen = () => {
  const resultLabel = true ? 'Summary' : 'Rewritten';
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <Text
        style={{
          color: 'white',
          paddingTop: 15,
          fontSize: 20,
          alignSelf: 'center',
          fontFamily: 'Roboto Mono',
        }}>
        GPT Tools
      </Text>
      <View style={{paddingHorizontal: '10%'}}>
        <View>
          <Text
            style={{
              color: '#FFFFFF99',
              fontFamily: 'Roboto',
              fontSize: 20,
              marginTop: '5%',
              fontWeight: '800',
            }}>
            Input Text
          </Text>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Roboto',
              fontSize: 18,
            }}
            numberOfLines={4}>
            React Native combines the best parts of native development with
            React, a best-in-class JavaScript library for building user
            interfaces.
          </Text>
          <View
            style={{
              borderColor: 'white',
              marginTop: '10%',
              backgroundColor: '#252924',
              borderRadius: 27,
              maxHeight: '73%',
            }}>
            <Text
              style={{
                color: '#FFFFFF99',
                fontFamily: 'Roboto',
                fontSize: 20,
                marginTop: '2%',
                alignSelf: 'center',
                fontWeight: '800',
              }}>
              {resultLabel}
            </Text>
            <ScrollView>
              <TouchableWithoutFeedback onLongPress={() => {}}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Avenir',
                    padding: 15,
                    fontSize: 18,
                  }}
                  numberOfLines={12}>
                  React Native blends the finest elements of native app
                  development with React, an exceptional JavaScript library
                  utilized for constructing user interfaces. React Native blends
                  the finest elements of native app development with React, an
                  exceptional JavaScript library utilized for constructing user
                  interfaces. React Native blends the finest elements of native
                  app development with React, an exceptional JavaScript library
                  utilized for constructing user interfaces. React Native blends
                  the finest elements of native app development with React, an
                  exceptional JavaScript library utilized for constructing user
                  interfaces. React Native blends the finest elements of native
                  app development with React, an exceptional JavaScript library
                  utilized for constructing user interfaces. React Native blends
                  the finest elements of native app development with React, an
                  exceptional JavaScript library utilized for constructing user
                  interfaces. React Native blends the finest elements of native
                  app development with React, an exceptional JavaScript library
                  utilized for constructing user interfaces.
                </Text>
              </TouchableWithoutFeedback>
            </ScrollView>
            <View style={{flexDirection: 'row', padding: '5%'}}>
              <TouchableOpacity
                style={{
                  borderRadius: 25,
                  width: '25%',
                  borderColor: 'white',
                  borderWidth: 2,
                }}>
                <Text
                  style={{
                    color: 'white',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    alignSelf: 'center',
                  }}>
                  Share
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 25,
                  width: '25%',
                  borderColor: 'white',
                  borderWidth: 2,
                  marginLeft: '3%',
                }}>
                <Text
                  style={{
                    color: 'white',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    alignSelf: 'center',
                  }}>
                  Copy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={{
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 2,
            width: '45%',
          }}>
          <Text style={{color: 'white', padding: 10, alignSelf: 'center'}}>
            Summarize
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 25,
            width: '45%',
            borderColor: 'white',
            borderWidth: 2,
          }}>
          <Text style={{color: 'white', padding: 10, alignSelf: 'center'}}>
            Rewrite
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={{
            borderRadius: 25,
            width: '20%',
            backgroundColor: 'white',
          }}>
          <Text style={{color: '#0336FF', padding: 10, alignSelf: 'center'}}>
            More
          </Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    position: 'absolute',
    bottom: 35,
    alignSelf: 'center',
  },
  buttonContainer: {},
});
