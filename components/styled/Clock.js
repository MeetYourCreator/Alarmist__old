import styled from 'styled-components'

export const Clock = styled.View`
  width: 325px;
  height: 325px;
  background-color: ${(props) => props.color};
  border-radius: 170px;
  border: 5px solid purple;
  position: relative;
`