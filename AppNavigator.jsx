import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './screens/HomeScreen.jsx';
import AnalogClock from './screens/AnalogClock.jsx';
import LocalDigitalClock from './screens/DigitalClock/LocalDigitalClock.jsx';
import AlarmDetailScreen from './screens/AlarmDetailScreen.jsx'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Choose Your Alarmist Clock' }}
        />
        <Stack.Screen
          name="Digital Local Clock"
          component={LocalDigitalClock}
          options={{ title: 'Digital Alarmist' }}
        />
        <Stack.Screen
          name="Analog Clock"
          component={AnalogClock}
          options={{ title: 'Analog Alarmist' }}
        />
        <Stack.Screen
          name='Alarm Detail Screen'
          component={AlarmDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
