import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Clock from './Clock.js'
import { StyleSheet, Text, View } from 'react-native';

// Build for ios View is mapped to UIView
// Build for android View is mapped to AndroidView
export default function App() {
  return (
    <View style={styles.container}>
      <Clock />
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
});
