import React, { useEffect, useState } from "react"
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
import styled from "styled-components"
import { MaterialIcons } from "@expo/vector-icons"
import { Inter_200ExtraLight } from "@expo-google-fonts/inter"

const CustomModal = ({ title }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            console.log("Modal has been closed.")
          }}
        >
          {/*All views of Modal*/}
          {/*Animation can be slide, slide, none*/}
          <View style={styles.modal}>
            <Text style={styles.text}>{title}</Text>
            <MaterialIcons
              name="add"
              size={24}
              onPress={() => {
                setShowModal(!showModal)
              }}
            ></MaterialIcons>
          </View>
        </Modal>
        {/*Updating the state to make Modal Visible*/}
        <MaterialIcons
          name="add"
          size={24}
          onPress={() => {
            setShowModal(!showModal)
          }}
        ></MaterialIcons>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    height: 10,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    width: "30%",
  },
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "yellow",
    borderColor: "black",
    borderWidth: 2,
    borderTopStartRadius: 180,
    borderTopEndRadius: 180,
    borderBottomStartRadius: 180,
    borderBottomEndRadius: 180,
    marginTop: 680,
    marginRight: 10,
    marginBottom: 100,
    marginLeft: 10,
  },
  text: {
    color: "#3f2949",
    marginTop: 10,
  },
})

export default CustomModal
