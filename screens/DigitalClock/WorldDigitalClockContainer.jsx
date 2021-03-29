import React, { useEffect, useState } from 'react'
import uuid from 'uuid-random'
import {
  getAllTimeZones,
  showISO,
  formatZoneName
} from '../../time.js'
import WorldDigitalClock from './WorldDigitalClock.jsx'

const WorldDigitalClockContainer = () => {
  const [allTimeZones, setAllTimeZones] = useState([])
  console.log(
    "%c%s",
    "color: green; font-weight: 700",
    "allTimeZones variable set as:",
    allTimeZones
  )
  console.log("%c%s", "color: blue; font-weight: 700", "1-before useEffect")
  useEffect(() => {
    console.log("3-inside useEffect")
    setTimeout(fetchWorldTimeZones, 1000)
    console.log("4-after setTimeout")
  })
  console.log("2-after useEffect")

  const fetchWorldTimeZones = async () => {
    //getAllTimeZones from services/time.js
    const timezones = await getAllTimeZones()
    console.log("6-data recieved")
    //setAllTimeZones with the value of the timezones that were just received
    setAllTimeZones(timezones)
  }

  return (
    <>
      {allTimeZones.map((worldclock) => (
        <WorldDigitalClock
          key={uuid()}
          id={uuid()}
          className="world-clock-container"
          unix={showISO(worldclock.timestamp)}
          zonename={formatZoneName(worldclock.zoneName)}
          country={worldclock.countryName}
        />
      ))}
    </>
  )
}

export default WorldDigitalClockContainer;