import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { setHour, setMinute, setSecond } from './time.js'


const Clock = () => {
  const [hourRatio, setHourRatio] = useState(0)
  const [minuteRatio, setMinuteRatio] = useState(0)
  const [secondRatio, setSecondRatio] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setHourRatio(setHour())
      setMinuteRatio(setMinute())
      setSecondRatio(setSecond())
    }, 1000)
  }, [])



  return (
    <>
      <SafeAreaView>
        <View style={styles.clockFace}>
        <Text>
          1
        </Text>
        <Text>
          2
        </Text>
        <Text>
          3
        </Text>
        <Text>
          4
        </Text>
        <Text>
          5
        </Text>
        <Text>
          6
        </Text>
        <Text>
          7
        </Text>
        <Text>
          8
        </Text>
        <Text>
          9
        </Text>
        <Text>
          10
        </Text>
        <Text>
          11
        </Text>
        <Text>
            12
        </Text>
       </View>
      </SafeAreaView>
            
    </>
  )
}

const styles = StyleSheet.create({
  clockFace: {
    width: 375,
    height: 375,
    backgroundColor: '#66c1e67c',
    borderRadius: 200,
    borderColor: 'black',
    borderWidth: 3,
    position: 'relative'
  }
})
export default Clock;