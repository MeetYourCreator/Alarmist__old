import React from "react"
import styled from "styled-components"

const MenuFontButton = ({ customColor, value, onPress, customFont, fontDisplay }) => {
  return <FontOptionButton>
    <FontOption
      fontFamily={customFont}>{fontDisplay}</FontOption>
  </FontOptionButton>
}

const FontOptionButton = styled.TouchableOpacity`
  background-color: transparent;
  width: 80px;
  height: 50px;
  margin: 5px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: nowrap;
  color: ${(props) => (props.color ? props.color : "black")};
`
const FontOption = styled.Text`
font-family: ${(props) => props.fontFamily}
flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  font-size: 15px;

`
export default MenuFontButton;