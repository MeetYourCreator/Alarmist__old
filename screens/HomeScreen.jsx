import React from 'react'
import { Button, Text, View, SafeAreaView, StyleSheet } from "react-native"
import styled from 'styled-components'

const HomeScreen = ({ navigation }) => {

  return (
    <>
      <Button
        title="Digital Alarmist"
        onPress={() => navigation.navigate("Digital Local Clock")}
      ></Button>
      <Button
        title="Analog Alarmist"
        onPress={() => navigation.navigate("Analog Clock")}
      ></Button>
      <Button
        title="World Alarmist"
        onPress={() => navigation.navigate("Digital World Clock")}
      ></Button>
    </>
  )

}

export default HomeScreen;