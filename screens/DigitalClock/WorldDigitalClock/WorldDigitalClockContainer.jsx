import React, { useEffect, useState } from "react"
import uuid from "uuid-random"
import { getAllTimeZones, showISO } from "../../../services/time.js"
import { formatZoneName } from '../../../services/etc.js'
import WorldDigitalClock from "./WorldDigitalClock.jsx"
import SearchBar from '../../../components/SearchBar.jsx'
import styled from 'styled-components'

const TestStyleWrapper = styled.SafeAreaView`
  background-color: #ffff02;
  overflow: visible;
`

const WorldDigitalClockContainer = ({ navigation }) => {
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
    setTimeout(fetchWorldTimeZones, 20000)
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
      <TestStyleWrapper>
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
      </TestStyleWrapper>
    </>
  )
}

export default WorldDigitalClockContainer