import styled from 'styled-components';

export const ClockText = styled.Text`
  display: flex;
  margin: 15px;
  text-shadow: 3px 3px 20px;
  text-shadow-color: ${(props) => props.textShadowColor ? props.textShadowColor : '#f70300'};
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 65px;
  color: ${(props) => props.color ? props.color : 'rgb(247, 1, 3)'};
  }
`