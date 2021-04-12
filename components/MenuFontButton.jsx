import React from "react"
import styled from "styled-components"

const MenuFontButton = ({ customColor, value, onPress }) => {
  return <FontOptionButton>
  <FontOption></FontOption>
  </FontOptionButton>
}

const FontOptionButton = styled.TouchableOpacity`
  background-color: transparent;
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 20px;
  border-width: 2px;
  margin: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  color: ${(props) => (props.color ? props.color : "black")};
`
const FontOption = styled.Text`
font-family: ${(props) => (props.fontFamily ? props.fontFamily : 'monoton') }
`
export default MenuFontButton;