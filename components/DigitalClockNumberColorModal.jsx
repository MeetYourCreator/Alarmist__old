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
  onColorHandle,
}) => {
  const [showModal, setShowModal] = useState(false)

  const [_E8E500, set_E8E500] = useState("#E8E500")
  const [_FF2281, set_FF2281] = useState("#FF2281")
  const [_75D5FD, set_75D5FD] = useState("#75D5FD")
  const [_09FBD3, set_09FBD3] = useState("#09FBD3")
  const [_7122FA, set_7122FA] = useState("#7122FA")
  const [_EF281E, set_EF281E] = useState("#EF281E")
  const [_0000FF, set_0000FF] = useState("#0000FF")

  const handleSet_E8E500 = (_E8E500) => {
    set_E8E500(_E8E500)
  }

  const handleSet_FF2281 = (_FF2281) => {
    set_FF2281(_FF2281)
  }

  const handleSet_75D5FD = (_75D5FD) => {
    set_75D5FD(_75D5FD)
  }

  const handleSet_09FBD3 = (_09FBD3) => {
    set_09FBD3(_09FBD3)
  }

  const handleSet_7122FA = (_7122FA) => {
      set_7122FA(_7122FA)
  }
  
    const handleSet_EF281E = (_EF281E) => {
      set_EF281E(_EF281E)
    }

    const handleSet_0000FF = (_0000FF) => {
      set_0000FF(_0000FF)
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
              <MenuColorButton
                customColor="#E8E500"
                onChange={handleSet_E8E500}
                onPress={() => onColorHandle(_E8E500)}
              />
              <MenuColorButton
                customColor="#FF2281"
                onChange={handleSet_FF2281}
                onPress={() => onColorHandle(_FF2281)}
              />
              <MenuColorButton
                customColor="#75D5FD"
                onChange={handleSet_75D5FD}
                onPress={() => onColorHandle(_75D5FD)}
              />
              <MenuColorButton
                customColor="#09FBD3"
                onChange={handleSet_09FBD3}
                onPress={() => onColorHandle(_09FBD3)}
              />
              <MenuColorButton
                customColor="#7122FA"
                onChange={handleSet_7122FA}
                onPress={() => onColorHandle(_7122FA)}
              />
              <MenuColorButton
                customColor="#EF281E"
                onChange={handleSet_EF281E}
                onPress={() => onColorHandle(_EF281E)}
              />
              <MenuColorButton
                customColor="#0000FF"
                onChange={handleSet_0000FF}
                onPress={() => onColorHandle(_0000FF)}
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
})

export default DigitalClockNumberColorModal
