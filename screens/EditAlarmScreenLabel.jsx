import React, {useState} from 'react';
import { View, SafeView, StyleSheet, Text, TextInput } from 'react-native';
import EditAlarmDetail from '../components/EditAlarmDetail.jsx';

const EditAlarmScreenLabel = ({ label, onInputHandle }) => {
  const [input, setInput] = useState('')
  
  const handleSetInput = (event) => {
    setInput(event)
  }
  console.log(input)
  return (
    <View>
      <TextInput style={styles.screenWrapper} input={label} onChange={handleSetInput} onSubmit={onInputHandle}></TextInput>
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
    backgroundColor: 'rgba(180,180,180,.8)',
    width: '100%',
  },
});
export default EditAlarmScreenLabel;