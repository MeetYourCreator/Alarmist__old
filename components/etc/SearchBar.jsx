import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView } from 'react-native';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState('');

  useEffect(() => {});

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={handleChange}
          value={searchTerm}
          placeholder="Location"
        ></TextInput>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 4,
  },
});

export default SearchBar;
