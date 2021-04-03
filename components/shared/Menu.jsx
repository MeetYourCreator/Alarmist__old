import React, { useEffect, useState } from 'react';
import {
  Button,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native"
import styled from 'styled-components'

const Menu = ({onPress, title}) => {

  return (
    <>
      <View>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.8}
          style={styles.menu}
        >
          <Text>{title}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 8,
    borderRadius: 20,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10
  },
})
export default Menu;