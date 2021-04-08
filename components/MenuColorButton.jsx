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
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 25,
    borderWidth: 2,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
})

export default MenuColorButton;
