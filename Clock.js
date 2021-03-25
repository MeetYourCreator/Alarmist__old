import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(238,235,235);
  overflow: hidden;
`;

const ClockEdge = styled.View`
  background-color:rgba(255, 0, 85, 0.485);
  border-top-right-radius: 250px;
  border-bottom-right-radius: 250px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 50px;
  height: 700px;
`
const Clock = styled.View`
border: 10px solid black;
`

const ClockFace = styled.View`
  width: 500px;
  height: 500px;
  background-color: rgba(102, 193, 230, 0.485);
  border-radius: 50%;
  border: 3px solid white;
  box-shadow:  -8px 8px 15px rgba(225,225,225,0.05),
    20px 20px 20px rgba(0,0,0,0.2),
    inset -8px -8px 15px rgba(225,225,225,0.05),
    inset 20px 20px 20px rgba(0,0,0,0.2);
  position: relative;
`