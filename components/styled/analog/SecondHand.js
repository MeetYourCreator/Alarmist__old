import styled from 'styled-components'

export const SecondHand = styled.View`
  bottom: 0%;
  left: 50%;
  width: 3px;
  height: 45%;
  background-color: ${(props) => props.color ? props.color : 'red'};
  border: 1px solid white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 11;
`