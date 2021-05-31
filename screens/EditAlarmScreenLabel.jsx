import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const EditAlarmScreenLabel = ({ navigation, value }) => {
  const [input, setInput] = useState('');

  return (
    <View>
      <TextInput
        style={styles.screenWrapper}
        input={value}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={() => {
          navigation.navigate({
            name: 'Edit Alarm Screen Main',
            params: { label: input },
            merge: true,
          });
        }}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    padding: 20,
    marginTop: 300,
    marginBottom: 300,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'rgba(30,163,145,.8)',
    color: 'rgb(255,255,255)',
    fontWeight: '800',
    width: '100%',
  },
});
export default EditAlarmScreenLabel;
