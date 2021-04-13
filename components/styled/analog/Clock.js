import styled from 'styled-components';


export const Clock = styled.View`
  width: 325px;
  height: 325px;
  background-color: ${(props) => props.currentColor ? props.currentColor : '#ff00ff'};
  border-radius: 170px;
  border-color: ${(props) => props.borderColor ? props.borderColor : "#162B32"};
  border-width: 5px;
  position: relative;
`