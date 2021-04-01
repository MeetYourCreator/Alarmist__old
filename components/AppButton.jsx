import React from 'react'
import {
  Button,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native"
import styled from "styled-components"

const AppButton = ({onPress, title}) => {

  return (
    <>
      <View
        style={styles.ScreenContainer}
      >
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.8}
          style={styles.appButtonContainer}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
   
  },
  appButtonContainer: {
    backgroundColor: '#009688',
    elevation: 8,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 20
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 20,
  }
})
export default AppButton;