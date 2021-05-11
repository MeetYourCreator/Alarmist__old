import React from 'react'
import { NativeModules } from 'react-native';
import { TouchableOpacity, View, SafeView, Text, TextInput, StyleSheet } from 'react-native'

const EditAlarmDetailButton = ({name, value}) => {

  return (
    <View>
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.left}>
          <Text>
            {name}
          </Text>
        </View>
        <View style={styles.right}></View>
        <Text>
        {value}
        </Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  buttonContainer: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'blue',
    width: 300
  },
  left: {
    color: 'black',
    fontFamily: 'audiowide'
  },
  right: {
    color: 'black',
  },
});
export default EditAlarmDetailButton;