import styled from 'styled-components';

export const ClockNumberFont = styled.Text`
text-align: center;
font-size: 30px;
margin-top: 10px;
color: ${(props) => props.color ? props.color : 'yellow'};
`