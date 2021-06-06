import React from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const AlarmTime = ({ minute, hour }) => {
  return (
    <>
      <View style={styles.alarmContainer}>
        <View style={styles.text}>
          <Text>Time</Text>
        </View>
        <View style={styles.setTimeDetails}>
          <TextInput style={styles.hour} keyboardType="numeric" maxLength={2}>
            {hour}
          </TextInput>
          <Text>:</Text>
          <TextInput
            style={styles.minute}
            keyboardType="numeric"
            maxLength={2}
            // value={inputTime}
            // onChange={handleInput}
          >
            {minute}
          </TextInput>
        </View>
        <View style={styles.amPm}>
          <Pressable>
            <Text style={styles.am}>AM</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.pm}>PM</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  alarmContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 200,
  },
  setTimeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(235,105,158,.3)',
    paddingRight: 5,
    paddingLeft: 5,
    marginLeft: 'auto',
    borderWidth: 2,
    borderRadius: 7,
    borderColor: 'rgb(235,105,158)',
  },
  hour: {
    width: 30,
    backgroundColor: 'rgba(235,105,158,.3)'
  },
  minute: {
    width: 30,
    backgroundColor: 'rgba(235,105,158,.3)',
  },
  amPm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 5,
    borderWidth: 2,
    borderRadius: 7,
  },
  am: {
    paddingRight: 5,
    paddingLeft: 5,
    borderWidth: 2,
    borderRadius: 7,
  },
  pm: {
    paddingRight: 5,
    paddingLeft: 5,
    borderWidth: 2,
    borderRadius: 7,
  },
});
export default AlarmTime;
