import React from 'react'
import { Button, TouchableOpacity, Text, View, SafeAreaView, StyleSheet } from "react-native"
import AppButton from '../components/AppButton.jsx'
import styled from 'styled-components'
import Menu from '../components/shared/Menu.jsx'

const HomeScreen = ({ navigation }) => {

  return (
    <>
      <SafeAreaView style={styles.screenContainer}>
        <View
        style={styles.buttonContainer}>
          <AppButton
            title="12 Hour Alarmist"
            onPress={() => navigation.navigate("Analog Clock")}
          ></AppButton>
          <AppButton
            title="24 Hour Alarmist"
            onPress={() => navigation.navigate("Digital Local Clock")}
          ></AppButton>
          {/* <AppButton
          title="World Alarmist"
          onPress={() => navigation.navigate("Digital World Clock")}
        ></AppButton> */}
        </View>
        <Menu title="Hi"></Menu>
      </SafeAreaView>
    </>
  )

}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',

  }
})
export default HomeScreen;