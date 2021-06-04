import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

const AlarmList = (props) => {
  const [alarms, setAlarms] = useState(props);
  
  const { minute, hour } = props;

  return (
    <>
      {console.log(props)}
      <View>
        {console.log(alarms.alarms.alarms)}
        <Text>Alarm List</Text>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log({ alarms: state.alarms });
  return { alarms: state.alarms };
};

export default connect(mapStateToProps)(AlarmList);
