import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Modal from 'react-native-modal';
import MenuColorButton from "./MenuColorButton.jsx";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"

const AnalogClockFaceModal = props => {
  const [showModal, setShowModal] = useState(false)

  const [_FF6495, set_FF6495] = useState("#FF6495")
  const [_78FFF1, set_78FFF1] = useState("#78FFF1")
  const [_361999, set_361999] = useState("#361999")
  const [black, setBlack] = useState("black")
  const [orange, setOrange] = useState("orange")
  const [blue, setBlue] = useState("blue")
  const [pink, setPink] = useState("pink")

  const handleSet_FF6495 = (_FF6495) => {
    set_FF6495(FF6495)
  }

  const handleSet_78FFF1 = (_78FFF1) => {
    set_78FFF1(_78FFF1)
  }

  const handleSet_361999 = (_361999) => {
    set_361999(_361999)
  }

  let { iconName, iconColor, value, onColorHandle } = props;

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Modal
          animationType={"slide"}
          onBackdropPress={() => setShowModal(false)}
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            console.log("Modal has been closed.")
          }}
        >
          {/*All views of Modal*/}
          {/*Animation can be slide, slide, none*/}
          <View style={styles.modalPopUp}>
            <View style={styles.buttonsContainer}>
              <MenuColorButton
                customColor="#FF6495"
                value={value}
                onChange={handleSet_FF6495}
                onPress={() => onColorHandle(_FF6495)}
              />
              <MenuColorButton
                customColor="#78FFF1"
                value={value}
                onChange={handleSet_78FFF1}
                onPress={() => onColorHandle(_78FFF1)}
              />
              <MenuColorButton
                customColor="#361999"
                value={value}
                onChange={handleSet_361999}
                onPress={() => onColorHandle(_361999)}
              />
              <MenuColorButton
                customColor="#FF4838"
                value={value}
                onPress={() => onColorHandle()}
              />
              <MenuColorButton
                customColor="#F1B814"
                value={value}
                onPress={() => onColorHandle()}
              />
              <MenuColorButton
                customColor="#00ABE1"
                value={value}
                onPress={() => onColorHandle()}
              />
              <MenuColorButton
                customColor="#F7F7F7"
                value={value}
                onPress={() => onColorHandle()}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal)
              }}
            ></TouchableOpacity>
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
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 680,
    marginRight: 10,
    marginBottom: 100,
    marginLeft: 10,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    color: "#3f2949",
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
})

export default AnalogClockFaceModal