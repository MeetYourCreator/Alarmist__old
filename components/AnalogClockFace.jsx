import React from "react"
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

const AnalogClockFace = ({ color }) => {
  return <Clock color={color} />
}

const Clock = styled.View`
  width: 325px;
  height: 325px;
  background-color: ${(props) =>
    props.color ? props.color : "rgba(102, 193, 230, 0.485)"};
  border-radius: 170px;
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : "#ff00ff"};
  border-width: 5px;
  position: relative;
`

export default AnalogClockFace;