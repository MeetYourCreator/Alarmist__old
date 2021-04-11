import React from "react";
import { Text, TouchableOpacity, View, SafeAreaView, StyleSheet } from "react-native"
import styled from 'styled-components';

const MenuColorButton = ({color, onPress}) => {
  return (
    <ColorOptionButton
      color={color}
      onPress={onPress} />
  )
}

const ColorOptionButton = styled.TouchableOpacity`
  background-color: ${(props) => props.color};
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 20px;
  border-width: 2px;
  margin: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  color: ${(props) => props.color};
`

export default MenuColorButton;