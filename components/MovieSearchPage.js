import { Text, TextInput, View, Button, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import { styles } from '../styles/styles';
import {search, movie} from '../mockData';

export const MovieSearchPage = props => {
  const [movieTitle, setMovieTitle] = useState('');
  return (
    <View>
      <Text>Welcome in Movie Browser!</Text>
      <Text>Search for any movie to see more data</Text>
      <TextInput placeholder='Title' style={styles.input} onChangeText={newMovieTitle=>setMovieTitle(newMovieTitle)}/>
      <ScrollView>
        {search['Search'].filter((item)=> item.Title.toLowerCase().includes(movieTitle.toLowerCase())).map((item) => <Button key={item['imdbID']} title={item['Title']}/>)}
      </ScrollView>
    </View>
  );
};