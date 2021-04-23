import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AppNavigator from './AppNavigator.jsx';

import AppLoading from 'expo-app-loading';
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

import * as Font from 'expo-font';

// console.log(store)

//Notifications
//function exectued to let os know what to dpo with incoming Notification before the Notification is displayed to the user
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true
    };
  }
})

//Fonts
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
  <AppNavigator />
  );
}