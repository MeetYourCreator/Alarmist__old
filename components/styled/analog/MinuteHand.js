import styled from 'styled-components';

export const MinuteHand = styled.View`
  bottom: 45%;
  left: 50%;
  width: 9px;
  height: 45%;
  background-color: ${(props) => props.color ? props.color : 'black'};
  border: 2px solid white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 10;
`