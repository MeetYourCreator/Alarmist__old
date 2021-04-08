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

const MenuColorButton = ({ color }) => {
  return (
    <TouchableOpacity style={styles.colorOptionButton}>
      <Text>{color}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  colorOptionButton: {
    backgroundColor: "pink",
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
})

export default MenuColorButton;