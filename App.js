import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeScreen from './screens/HomeScreen.jsx';
import AnalogClock from './screens/AnalogClock.jsx';
import LocalDigitalClock from './screens/DigitalClock/LocalDigitalClock.jsx';
import WorldDigitalClockContainer from './screens/DigitalClock/WorldDigitalClock/WorldDigitalClockContainer.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import * as Font from 'expo-font'

//function exectued to let os know what tpo dpo with incoming Notification before the Notification is displayed to the user
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true
    };
  }
})

const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'press-start-2p': require('./assets/fonts/PressStart2P-Regular.ttf')
  });
}
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
        {/* <Stack.Screen
          name='Digital World Clock'
          component={WorldDigitalClockContainer}
          options={{ title: 'World Alarmist' }}
        /> */}
        <Stack.Screen
          name='Analog Clock'
          component={AnalogClock}
          options={{ title: 'Analog Alarmist' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}