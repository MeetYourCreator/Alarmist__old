import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeScreen from './screens/HomeScreen.jsx'
import AnalogClock from './screens/AnalogClock.jsx'
import LocalDigitalClock from './screens/DigitalClock/LocalDigitalClock.jsx'
import WorldDigitalClockContainer from './screens/DigitalClock/WorldDigitalClock/WorldDigitalClockContainer.jsx'
import { StyleSheet, Text, TextInput, SafeAreaView, View } from 'react-native';
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
          name='Home'
          component={HomeScreen}
          options={{ title: 'Choose Your Alarmist Clock' }}
        />
        <Stack.Screen
          name='Digital Local Clock'
          component={LocalDigitalClock}
          options={{ title: 'Digital Alarmist' }}
        />
        <Stack.Screen
          name='Digital World Clock'
          component={WorldDigitalClockContainer}
          options={{ title: 'World Alarmist' }}
        />
        <Stack.Screen
          name='Analog Clock'
          component={AnalogClock}
          options={{ title: 'Analog Alarmist' }}
        />
      </Stack.Navigator>
      </NavigationContainer>
  
  );
}
