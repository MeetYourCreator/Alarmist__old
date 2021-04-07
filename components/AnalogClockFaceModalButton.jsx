import React from "react"
import {
  Button,
  TouchableOpacity,
  Modal,
  Pressable,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native"

const AnalogClockFaceModalButton = ({ color }) => {
  return (
    <TouchableOpacity style={styles.colorOptionButton}>
      <Text>{color}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  colorOptionButton: {
    backgroundColor: "yellow",
    width: "20%",
    height: "40%",
    borderRadius: 0,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default AnalogClockFaceModalButton
