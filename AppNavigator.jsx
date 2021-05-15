import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './screens/HomeScreen.jsx';
import AnalogClock from './screens/AnalogClock.jsx';
import LocalDigitalClock from './screens/DigitalClock/LocalDigitalClock.jsx';
import EditAlarmScreenMain from './screens/EditAlarmScreenMain.jsx';
import EditAlarmScreenSound from './screens/EditAlarmScreenSound.jsx';
import EditAlarmScreenRepeat from './screens/EditAlarmScreenRepeat.jsx';
import EditAlarmScreenLabel from './screens/EditAlarmScreenLabel.jsx';
import EditAlarmScreenSnooze from './screens/EditAlarmScreenSnooze';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
          name="Edit Alarm Screen Main"
          component={EditAlarmScreenMain}
          options={{ title: 'Edit Alarm' }}
        />
        <Stack.Screen
          name="Edit Alarm Screen Sound"
          component={EditAlarmScreenSound}
          options={{ title: 'Sound' }}
        />
        <Stack.Screen
          name="Edit Alarm Screen Repeat"
          component={EditAlarmScreenRepeat}
          options={{ title: 'Repeat' }}
        />
        <Stack.Screen
          name="Edit Alarm Screen Label"
          component={EditAlarmScreenLabel}
          options={{ title: 'Label' }}
        />
        <Stack.Screen
          name="Edit Alarm Screen Snooze"
          component={EditAlarmScreenSnooze}
          options={{ title: 'Snooze' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
