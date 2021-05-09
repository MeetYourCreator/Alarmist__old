import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>{props.title}</Text>
      <TextInput style={{ ...styles.input, ...props.style }} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 5,
  },
  text: {
    display: 'flex',
    margin: 5,
  },
  input: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: '75%',
    margin: 5,
  },
});

export default Input;
