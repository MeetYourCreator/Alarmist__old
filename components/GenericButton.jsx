import React from 'react';
import styled from 'styled-components';

const GenericButton = ({ customColor, borderRadius, borderWidth, onPress }) => {
  return <CustomGenericButton color={customColor} borderRadius={borderRadius} borderWidth={borderWidth} onPress={onPress} />;
};

const CustomGenericButton = styled.TouchableOpacity`
  background-color: ${(props) => props.color};
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: ${(props) => props.borderRadius};
  border-width: ${(props) => props.borderWidth};
  margin: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  color: ${(props) => props.color};
`;

export default GenericButton;
