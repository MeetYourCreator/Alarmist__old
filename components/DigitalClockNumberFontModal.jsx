import React, { useState } from "react"
import { TouchableOpacity, View, SafeAreaView, StyleSheet } from "react-native"
import Modal from "react-native-modal"
import MenuFontButton from "./MenuFontButton.jsx"

import { Ionicons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"

const DigitalClockNumberFontModal = ({ iconName, iconColor, onFontHandle }) => {
  const [showModal, setShowModal] = useState(false)
  const [_nosifer, set_nosifer] = useState("nosifer")
  const [_audiowide, set_audiowide] = useState("audiowide")
  const [_codystarRegular, set_codystarRegular] = useState("codystar-regular")
  const [_pressStart2p, set_pressStart2p] = useState("press-start-2p")
  const [_monoton, set_monoton] = useState("monoton")
  const [_diplomatica, set_diplomatica] = useState("diplomatica")

  const handleSet_nosifer = (event) => {
    set_nosifer(event)
  }

  const handleSet_audiowide = (event) => {
    set_audiowide(event)
  }

  const handleSet_codystarRegular = (event) => {
    set_codystarRegular(event)
  }

  const handleSet_pressStart2p = (event) => {
    set_pressStart2p(event)
  }

  const handleSet_monoton = (event) => {
    set_monoton(event)
  }

  const handleSet_diplomatica = (event) => {
    set_diplomatica(event)
  }

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
              <MenuFontButton
                customFont="nosifer"
                fontDisplay="123"
                onChange={handleSet_nosifer}
                onPress={() => onFontHandle(_nosifer)}
              />
              <MenuFontButton
                customFont="audiowide"
                fontDisplay="123"
                onChange={handleSet_audiowide}
                onPress={() => onFontHandle(_audiowide)}
              />
              <MenuFontButton
                customFont="codystar-regular"
                fontDisplay="123"
                onChange={handleSet_codystarRegular}
                onPress={() => onFontHandle(_codystarRegular)}
              />
              <MenuFontButton
                customFont="press-start-2p"
                fontDisplay="123"
                onChange={handleSet_pressStart2p}
                onPress={() => onFontHandle(_pressStart2p)}
              />
              <MenuFontButton
                customFont="monoton"
                fontDisplay="123"
                onChange={handleSet_monoton}
                onPress={() => onFontHandle(_monoton)}
              />
              <MenuFontButton
                customFont="diplomatica"
                fontDisplay="123"
                onChange={handleSet_diplomatica}
                onPress={() => onFontHandle(_diplomatica)}
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

export default DigitalClockNumberFontModal;