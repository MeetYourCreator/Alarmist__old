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
  borderRadius,
  borderWidth,
  backgroundColor,
  color,
  width,
  height,
  onPress,
}) => {
  return (
    <View style={styles.genericButtonWrapper}>
      <CustomGenericButton
        backgroundColor={backgroundColor}
        color={color}
        width={width}
        height={height}
        borderRadius={borderRadius}
        borderWidth={borderWidth}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  genericButtonWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

const CustomGenericButton = styled.TouchableOpacity`
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 10px;
  border-radius: ${(props) => props.borderRadius};
  border-width: ${(props) => props.borderWidth};
  margin: 20px;

  color: ${(props) => props.color};
  font-size: 24px;
`;

export default GenericButton;
