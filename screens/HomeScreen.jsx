import React from 'react'
import { Button, TouchableOpacity, Text, View, SafeAreaView, StyleSheet } from "react-native"
import AppButton from '../components/AppButton.jsx'
import styled from 'styled-components'

const HomeScreen = ({ navigation }) => {

  return (
    <>
      <AppButton
        title="Digital Alarmist"
        onPress={() => navigation.navigate("Digital Local Clock")}
      ></AppButton>
      <AppButton
        title="Analog Alarmist"
        onPress={() => navigation.navigate("Analog Clock")}
      ></AppButton>
      <AppButton
        title="World Alarmist"
        onPress={() => navigation.navigate("Digital World Clock")}
      ></AppButton>
    </>
  )

}

const styles = StyleSheet.create({
  button: {
    width: '200px',
    backgroundColor: 'red',
    color: 'black',
    fontSize: 35,
  }
})
export default HomeScreen;