import styled from 'styled-components'
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter"

export const ClockNumberFont = styled.Text`
text-align: center;
font-size: 30px;
margin-top: 10px;
color: ${(props) => props.color ? props.color : 'yellow'};
font-family: ${(props) => props.font ? props.font : 'serif'}
`