import styled from 'styled-components';

export const HourHand = styled.View`
  position: absolute;
  bottom: 60%;
  left: 50%;
  width: 10px;
  height: 38%;
  background-color: ${(props) => props.color ? props.color : 'black'};
  border: 2px solid white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 9;
`