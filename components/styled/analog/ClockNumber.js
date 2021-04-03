import styled from 'styled-components'

export const ClockNumber = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  color: ${(props) => props.color ? props.color : 'black'}
`