import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, SafeAreaView } from "react-native"
import styled from 'styled-components'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState()
  return (
    <>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Location"
        ></TextInput>
      </SafeAreaView>
    </>
  )
}

const styles = Stylesheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 4
  }
})

export default SearchBar;