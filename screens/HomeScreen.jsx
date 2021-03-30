import React from 'react'
import { Button, Text, View, SafeAreaView, StyleSheet } from "react-native"
import styled from 'styled-components'

const HomeScreen = ({ navigation }) => {

  return (
    <>
      <Button
        title="Local Digital Clock"
        onPress={() => navigation.navigate("Digital Local Clock")}
      ></Button>
      <Button
        title="Local Analog Clock"
        onPress={() => navigation.navigate("Analog Clock")}
      ></Button>
      <Button
        title="World Digital Clock"
        onPress={() => navigation.navigate("Digital World Clock")}
      ></Button>
    </>
  )

}

export default HomeScreen;