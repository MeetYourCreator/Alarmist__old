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
import AnalogClockNumberModalButton from "./AnalogClockNumberModalButton.jsx"

import { Ionicons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import { Inter_200ExtraLight } from "@expo-google-fonts/inter"

const AnalogClockNumberModal = ({
  title,
  iconName,
  iconColor,
  clockFaceColorChoiceOne,
}) => {
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
          <View style={styles.modalPopUp}>
            <Text style={styles.text}>{title}</Text>
            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal)
              }}
            >
              <Text>Close</Text>
            </TouchableOpacity>
            <View style={styles.buttonsContainer}>
              <AnalogClockNumberModalButton color="purple" />
              <AnalogClockNumberModalButton color="yellow" />
              <AnalogClockNumberModalButton color="green" />
              <AnalogClockNumberModalButton color="black" />
            </View>
          </View>
        </Modal>
        {/*Updating the state to make Modal Visible*/}
        <Ionicons
          name={iconName}
          size={24}
          color={iconColor}
          onPress={() => {
            setShowModal(!showModal)
          }}
        ></Ionicons>
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
  modalPopUp: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "red",
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
  buttonsContainer: {
    backgroundColor: "yellow",
    width:'40%',
    height: '80%',
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
})

export default AnalogClockNumberModal