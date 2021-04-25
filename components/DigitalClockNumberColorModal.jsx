import React, { useEffect, useState } from "react"
import { TouchableOpacity, View, SafeAreaView, StyleSheet } from "react-native"
import Modal from "react-native-modal"
import MenuColorButton from "./MenuColorButton.jsx"

import { Ionicons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"

const DigitalClockNumberColorModal = ({
  iconName,
  iconColor,
  onPress,
}) => {
  const [showModal, setShowModal] = useState(false)

  const [purple, setPurple] = useState("purple")
  const [yellow, setYellow] = useState("yellow")
  const [green, setGreen] = useState("green")
  const [black, setBlack] = useState("black")
  const [orange, setOrange] = useState("orange")
  const [blue, setBlue] = useState("blue")
  const [pink, setPink] = useState("pink")

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
              <MenuColorButton customColor="#E8E500" onPress={setPurple} />
              <MenuColorButton customColor="#FF2281" onPress={setPurple} />
              <MenuColorButton customColor="#75D5FD" onPress={setPurple} />
              <MenuColorButton customColor="#09FBD3" onPress={setPurple} />
              <MenuColorButton customColor="#7122FA" onPress={setPurple} />
              <MenuColorButton customColor="#EF281E" onPress={setPurple} />
              <MenuColorButton customColor="#0000FF" onPress={setPurple} />
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
})

export default DigitalClockNumberColorModal
