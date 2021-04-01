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
      <TouchableOpacity
        onPress={onPress}
        styles={styles.appButtonContainer}>
    
        <Text style={styles.buttonText}>
          {title}
        </Text>
      </TouchableOpacity>
  </> 
  )
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    margin: 20
  },
  buttonText: {
    fontSize: 25,
    alignSelf: 'center',
    padding: 20,
  }
})
export default AppButton;