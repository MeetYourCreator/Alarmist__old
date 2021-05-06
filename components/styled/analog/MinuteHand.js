import styled from 'styled-components';

export const MinuteHand = styled.View`
  bottom: 38%;
  left: 40%;
  width: 9px;
  height: 40%;
  background-color: ${(props) => props.color ? props.color : 'black'};
  border: 2px solid white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 10;
`