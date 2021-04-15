import React, { useEffect, useState } from "react"
import { TouchableOpacity, View, SafeAreaView, StyleSheet } from "react-native"
import Modal from "react-native-modal"
import MenuFontButton from "./MenuFontButton.jsx"

import { Ionicons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"

const DigitalClockNumberFontModal = ({ iconName, iconColor, value, onPress }) => {
  const [showModal, setShowModal] = useState(false)

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
                value={value}
                onPress={onPress}
              />
              <MenuFontButton
                customFont="audiowide"
                fontDisplay="123"
                value={value}
                onPress={onPress}
              />
              <MenuFontButton
                customFont="codystar-regular"
                fontDisplay="123"
                value={value}
                onPress={onPress}
              />
              <MenuFontButton
                customFont="press-start-2p"
                fontDisplay="123"
                value={value}
                onPress={onPress}
              />
              <MenuFontButton
                customFont="monoton"
                fontDisplay="123"
                value={value}
                onPress={onPress}
              />
              <MenuFontButton
                customFont="diplomatica"
                fontDisplay="123"
                value={value}
                onPress={onPress}
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

export default DigitalClockNumberFontModal