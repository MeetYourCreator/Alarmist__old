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

export default connect()(AlarmList);
