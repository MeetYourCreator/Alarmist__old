import styled from 'styled-components';

export const ClockNumberFont = styled.Text`
text-align: center;
font-size: 27px;
font-family: ${(props) => props.fontFamily ? props.fontFamily : 'diplomatica'};
margin-top: 10px;
color: ${(props) => props.color ? props.color : '#162B32'};
`