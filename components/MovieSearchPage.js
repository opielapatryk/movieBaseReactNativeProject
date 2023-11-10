import React, { useState } from 'react';
import { Text, TextInput, View, Button, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from '../styles/styles';
import {fetchMoviesByTitle} from './api'

export function MovieSearchPage({ navigation }) {
  const [movieTitle, setMovieTitle] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const results = await fetchMoviesByTitle(movieTitle);
      setSearchResults(results);
    } finally {
      setIsLoading(false);
    }
  };

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
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
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
          ))
        )}
        {!isLoading && searchResults.length === 0 && <Text>No results found</Text>}
      </ScrollView>
    </View>
  );
}
