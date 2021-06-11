import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import AppNavigator from './navigation/AppNavigator.jsx';

//REDUX
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

//FONTS
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

//NOTIFICATIONS
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

//FONTS
const fetchFonts = () => {
  return Font.loadAsync({
    'press-start-2p': require('./assets/fonts/PressStart2P-Regular.ttf'),
    'audiowide': require('./assets/fonts/Audiowide-Regular.ttf'),
    'codystar-regular': require('./assets/fonts/Codystar-Regular.ttf'),
    'diplomatica': require('./assets/fonts/DiplomataSC-Regular.ttf'),
    'monoton': require('./assets/fonts/Monoton-Regular.ttf'),
    'nosifer': require('./assets/fonts/Nosifer-Regular.ttf'),
    'henny-penny': require('./assets/fonts/HennyPenny-Regular.ttf')
  })
}

//NOTIFICATIONS
//function exectued to let us know what to do with incoming Notification before the Notification is displayed to the user
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true
    };
  }
})

// Build for ios View is mapped to UIView
// Build for android View is mapped to AndroidView

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false)

  //FONTS
  if (!dataLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={(error) => console.log(error)}
    />
  }

  return (
    //store, with its value value of createStore(rootReducer) <line 21>
    //which has a value of combineReducers, where the value of the alarmsReducer is passed to a key 'alarms' <lines 17-19>
    //is passed as a prop to the Provider component
    //This is how the store is made available to every child component of App.js
    //REDUX
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};


export default App;