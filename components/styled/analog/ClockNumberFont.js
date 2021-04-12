import styled from 'styled-components';

export const ClockNumberFont = styled.Text`
text-align: center;
font-size: 30px;
font-family: ${(props) => props.fontFamily ? props.fontFamily : 'press-start-2p'};
margin-top: 10px;
color: ${(props) => props.color ? props.color : 'yellow'};
`