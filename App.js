import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AnalogClock from './screens/AnalogClock.jsx'
import LocalDigitalClock from './screens/DigitalClock/LocalDigitalClock.jsx'
import WorldDigitalClockContainer from './screens/DigitalClock/WorldDigitalClock/WorldDigitalClockContainer.jsx'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

// Build for ios View is mapped to UIView
// Build for android View is mapped to AndroidView
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Digital Local Clock'
          component={LocalDigitalClock}
          options={{ title: 'Digital Local Clock' }}
        />
        <Stack.Screen
          name='Digital World Clock'
          component={WorldDigitalClockContainer}
          options={{ title: 'Digital World Clock' }}
        />
        <Stack.Screen
          name='Analog Local Clock'
          component={AnalogClock}
          options={{ title: 'Analog Local Clock' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    position: 'absolute',
    top: 0,
    left: 50,
    width: 5,
    height: 15,
    backgroundColor: 'black'
  }
});