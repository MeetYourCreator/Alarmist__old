import React, { useEffect, useState } from 'react';
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
import styled from 'styled-components'
import {MaterialIcons} from '@expo/vector-icons'

const Menu = ({ onPress, icon }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <SafeAreaView style={styles.menu}>
      <View style={styles.container}>
        <Modal
          animationType={"slide"}
          transparent={false}
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

      <View style={styles.container}>
        <Modal
          animationType={"slide"}
          transparent={false}
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

      <View style={styles.container}>
        <Modal
          animationType={"slide"}
          transparent={false}
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
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-around',
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    marginTop: 0,
  },
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#00ff00",
    padding: 100,
  },
  text: {
    color: "#3f2949",
    marginTop: 10,
  },
})
      
export default Menu;