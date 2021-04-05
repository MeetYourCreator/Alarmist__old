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
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <SafeAreaView style={styles.menuContainer}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.5}
          style={styles.menu}
        >
          <View style={styles.icon}>
            <Modal
              visible={modalOpen}
              animationType="slide"
              style={styles.modalContainer}
            >
              <Text> Hello from the Modal</Text>
              <MaterialIcons
                name="close"
                size={24}
                onPress={() => setModalOpen(false)}
              ></MaterialIcons>
            </Modal>
            <MaterialIcons
              name="add"
              size={24}
              onPress={() => setModalOpen(true)}
            ></MaterialIcons>
          </View>
          <View style={styles.icon}>
            {icon}
            <MaterialIcons
              name="add"
              size={24}
              onPress={() => setModalOpen(true)}
            ></MaterialIcons>
          </View>
          <View style={styles.icon}>
            {icon}
            <MaterialIcons
              name="add"
              size={24}
              onPress={() => setModalOpen(true)}
            ></MaterialIcons>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: "rgba(92,92,92,.1)",
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  menu: {
    flexDirection: "row",
    backgroundColor: "rgba(92,92,92,.1)",
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 8,
    borderRadius: 20,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    justifyContent: "space-evenly",
  },
  icon: {
    flexDirection: "column",
    padding: 10,
    borderColor: "black",
    borderLeftWidth: 1,
    borderRightWidth: 1
  },
})
export default Menu;