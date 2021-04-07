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

const AnalogClockNumberModalButton = ({ color }) => {
  return (
    <TouchableOpacity style={styles.colorOptionButton}>
      <Text>{color}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  colorOptionButton: {
    backgroundColor: "pink",
    width: "80%",
    height: "30%",
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: "space-evenly",
  },
})

export default AnalogClockNumberModalButton
