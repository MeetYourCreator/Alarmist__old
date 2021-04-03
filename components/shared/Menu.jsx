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

const Menu = ({ onPress, icon }) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
        style={styles.menu}
      >
        <View style={styles.icon}>{icon}</View>
        <View style={styles.icon}>{icon}</View>
        <View style={styles.icon}>{icon}</View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    backgroundColor: "rgba(92,92,92,.1)",
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 8,
    borderRadius: 20,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    justifyContent: 'space-evenly'
  },
  icon: {
    flexDirection: 'column',
    padding: 10,
    borderColor: 'black',
    borderLeftWidth: 2,
    
  }
})
export default Menu;