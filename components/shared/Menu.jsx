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

const Menu = ({ titleOne, titleTwo }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <SafeAreaView style={styles.menu}>
      
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
            <Text style={styles.text}>{titleOne}</Text>
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
            <Text style={styles.text}>{titleTwo}</Text>
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
            <Text style={styles.text}>Modal is open!</Text>
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
  menu: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    // backgroundColor: "purple",
    height: 10,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgb(211,211,211)",
    height: 70,
    borderColor: "black",
    borderWidth: 2,
  },
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "yellow",
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 680,
    marginBottom: 100,
  },
  text: {
    color: "#3f2949",
    marginTop: 10,
  },
})

export default Menu
