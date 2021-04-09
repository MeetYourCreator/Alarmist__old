import styled from 'styled-components';

export const Clock = styled.View`
  width: 325px;
  height: 325px;
  background-color: ${(props) => props.color ? props.color : 'rgba(102, 193, 230, 0.485)'};
  border-radius: 170px;
  border-color: ${(props) => props.borderColor ? props.borderColor : '#ff00ff'};
  border-width: 5px;
  position: relative;
`