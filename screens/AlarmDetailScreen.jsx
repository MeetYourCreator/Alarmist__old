import React from 'react';
import { TouchableOpacity, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import GenericButton from '../components/GenericButton.jsx'

const AlarmDetailScreen = () => {
  return (
    <View>
      <View style={styles.topButtonsContainer}>
        <GenericButton
          backgroundColor="transparent"
          color="black"
          borderRadius="1px"
          borderWidth="0px"
          width="60px"
          height="40px"
          value="Cancel"
          fontFamily="audiowide"
        />
        <GenericButton
          backgroundColor="transparent"
          color="black"
          borderRadius="1px"
          borderWidth="0px"
          width="40px"
          height="40px"
          value="Save"
          fontFamily="audiowide"
        ></GenericButton>
      </View>
      <View style={styles.input}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alarmDetailContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
  }
})

export default AlarmDetailScreen;