import styled from 'styled-components';

export const Clock = styled.View`
  position: relative;
  width: 350px;
  height: auto;
  border: 8px solid #2d2d2d;
  border-radius: 15px;
  background-color: ${(props) => props.color ? props.color : '#151617'};
`