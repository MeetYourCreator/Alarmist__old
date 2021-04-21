import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen.jsx';
import AnalogClock from './screens/AnalogClock.jsx';
import LocalDigitalClock from './screens/DigitalClock/LocalDigitalClock.jsx';
import WorldDigitalClockContainer from './screens/DigitalClock/WorldDigitalClock/WorldDigitalClockContainer.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading'
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import * as Font from 'expo-font'
import store from './store/store.js'
import { Provider } from 'react-redux'
console.log(store)

store.subscribe(() => {

})

// store.dispatch({
//   type: 'SET_E8E500',
//   payload: {
//     description: '#E8E500'
//   }
// })

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
    'press-start-2p': require('./assets/fonts/PressStart2P-Regular.ttf'),
    'audiowide': require('./assets/fonts/Audiowide-Regular.ttf'),
    'codystar-regular': require('./assets/fonts/Codystar-Regular.ttf'),
    'diplomatica': require('./assets/fonts/DiplomataSC-Regular.ttf'),
    'monoton': require('./assets/fonts/Monoton-Regular.ttf'),
    'nosifer': require('./assets/fonts/Nosifer-Regular.ttf'),
  });
}
// Build for ios View is mapped to UIView
// Build for android View is mapped to AndroidView
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={(error) => conssole.log(error)}
    />
  }

  return (
    <Provider store={store}>
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
    </Provider>
  );
}