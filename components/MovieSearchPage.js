import { Text, TextInput, View, Button } from 'react-native';
import React, {useState, useEffect} from 'react';
import { styles } from '../styles/styles';

export const MovieSearchPage = props => {
  const [movieTitle, setMovieTitle] = useState('');
  return (
    <View>
      <Text>Welcome in Movie Browser!</Text>
      <Text>Search for any movie to see more data</Text>
      <TextInput placeholder='Title' style={styles.input} onChangeText={newMovieTitle=>setMovieTitle(newMovieTitle)}/>
      <Text>{movieTitle}</Text>
    </View>
  );
};