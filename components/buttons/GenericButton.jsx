import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components';

const GenericButton = ({
  backgroundColor,
  borderRadius,
  borderWidth,
  color,
  width,
  height,
  value,
  fontFamily,
  fontSize,
  fontWeight,
  onPress,
}) => {
  return (
    <View style={styles.genericButtonWrapper}>
      <CustomGenericButton
        backgroundColor={backgroundColor}
        color={color}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        width={width}
        height={height}
        borderRadius={borderRadius}
        borderWidth={borderWidth}
        onPress={onPress}
      >
        <Text fontSize={fontSize} style={styles.text}>{value}</Text>
      </CustomGenericButton>
    </View>
  );
};

const styles = StyleSheet.create({
  genericButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
  
  },
});

const CustomGenericButton = styled.TouchableOpacity`
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 1px;
  border-radius: ${(props) => props.borderRadius};
  border-width: ${(props) => props.borderWidth};
  margin: 20px;
  color: ${(props) => props.color};
  font-family: ${(props) =>
  props.fontFamily ? props.fontFamily : 'audiowide'};
`;

export default GenericButton;
