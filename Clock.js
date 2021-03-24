import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import styled from 'styled-components'

export const ClockFace = styled.View`
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
