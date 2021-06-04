import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

const AlarmList = () => {
  return (
    <>
      <View>
        <Text>Alarm List</Text>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return state
}

export default connect(mapStateToProps)(AlarmList);
