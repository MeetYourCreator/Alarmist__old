import React, { useEffect, useState } from "react"
import Geolocation from "@react-native-community/geolocation"
import { View, Text } from "react-native"

const CurrentPosition = () => {
  const [error, setError] = useState("")
  const [position, setPosition] = useState({
    longitude: 0,
    latitude: 0,
  })

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setError("")
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      },
      (e) => setError(e.message)
    )
  }

  return (
    <View onLoad={getPosition}>
      {error ? (
        <Text>Error Retrieving Current Location</Text>
      ) : (
        <>
          <Text>Latitude: {position.latitude}</Text>
          <Text>Longitude: {position.longitude}</Text>
        </>
      )}
    </View>
  )
}

export default CurrentPosition
