import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AlarmClock from './Clock.jsx'
import { StyleSheet, Text, TextInput, View } from 'react-native';

// Build for ios View is mapped to UIView
// Build for android View is mapped to AndroidView
export default function App() {
  return (
    <View style={styles.container}>
      <AlarmClock />
      <StatusBar style="auto" />
    </View>
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
