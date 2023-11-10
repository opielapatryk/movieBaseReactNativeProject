import React, { useState } from 'react';
import { Text, TextInput, View, Button, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from '../styles/styles';

export function MovieSearchPage({ navigation }) {
  const [movieTitle, setMovieTitle] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMovies() {
    try {
      setIsLoading(true);
      const response = await fetch(`https://www.omdbapi.com/?apikey=b32be2df&s=${movieTitle}`);
      const result = await response.json();

      if (result.Response === 'True') {
        setSearchResults(result.Search);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Welcome to Movie Browser!</Text>
      <Text>Search for any movie to see more data</Text>
      <TextInput
        placeholder="Title"
        style={styles.input}
        onChangeText={(newMovieTitle) => setMovieTitle(newMovieTitle)}
      />
      <Button title="Search" onPress={fetchMovies} />
      <ScrollView>
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        {!isLoading &&
          searchResults.map((item) => (
            <Button
              onPress={() =>
                navigation.push('Movie Details', {
                  movie: item,
                })
              }
              key={item['imdbID']}
              title={item['Title']}
            />
          ))}
        {!isLoading && searchResults.length === 0 && <Text>No results found</Text>}
      </ScrollView>
    </View>
  );
}
