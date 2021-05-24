import React from 'react';
import styled from 'styled-components';

const MenuColorButton = ({ customColor, onPress }) => {
  return <ColorOptionButton color={customColor} onPress={onPress} />;
};

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
`;

export default MenuColorButton;