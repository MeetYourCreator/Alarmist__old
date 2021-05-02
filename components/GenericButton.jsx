import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components';

import { Ionicons } from '@expo/vector-icons';

const GenericButton = ({
  backgroundColor,
  borderRadius,
  borderWidth,
  color,
  width,
  height,
  value,
  fontFamily,
  fontVariant,
  onPress,
}) => {
  return (
    <View style={styles.genericButtonWrapper}>
      <CustomGenericButton
        backgroundColor={backgroundColor}
        color={color}
        fontFamily={fontFamily}
        width={width}
        height={height}
        borderRadius={borderRadius}
        borderWidth={borderWidth}
      >
        <Text style={styles.text}>{value}</Text>
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
    fontSize: 23,
  }
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
