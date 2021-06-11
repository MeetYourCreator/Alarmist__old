import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import AlarmDetail from './AlarmDetail.jsx';

const AlarmList = (props) => {
  const [alarms, setAlarms] = useState(props);

  return (
    <>
      <View>
        {console.log(alarms.alarms.alarms)}
        <Text>Alarm List</Text>
        <AlarmDetail />
        {alarms.alarms.alarms.map(() => {})}
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return { alarms: state.alarms };
};

export default connect(mapStateToProps)(AlarmList);
