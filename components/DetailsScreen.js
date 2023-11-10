import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

export function DetailsScreen({ route }) {
  const { movie } = route.params;
  const [movieDetails, setMovieDetails] = useState(null);
  const [isMovieFound, setIsMovieFound] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=b32be2df&t=${movie['Title']}`);
      const data = await response.json();

      if (data.Response === 'True') {
        setMovieDetails(data);
      } else {
        setIsMovieFound(false);
      }
    } catch (error) {
      console.error('Error fetching movie details:', error);
      setIsMovieFound(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [movie]);

  return (
    <View>
      <Text>Hello from details screen</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : isMovieFound ? (
        <View>
          <Image
            source={{ uri: movieDetails.Poster }}
            style={{ width: 200, height: 300 }}
          />
          <Text>Title: {movieDetails.Title}</Text>
          <Text>Year: {movieDetails.Year}</Text>
          <Text>Rated: {movieDetails.Rated}</Text>
          <Text>Released: {movieDetails.Released}</Text>
          <Text>Runtime: {movieDetails.Runtime}</Text>
          <Text>Genre: {movieDetails.Genre}</Text>
          <Text>Director: {movieDetails.Director}</Text>
          <Text>Writer: {movieDetails.Writer}</Text>
          <Text>Actors: {movieDetails.Actors}</Text>
          <Text>Plot: {movieDetails.Plot}</Text>
          <Text>Language: {movieDetails.Language}</Text>
          <Text>Country: {movieDetails.Country}</Text>
          <Text>Awards: {movieDetails.Awards}</Text>
          <Text>Metascore: {movieDetails.Metascore}</Text>
          <Text>IMDb Rating: {movieDetails.imdbRating}</Text>
          <Text>IMDb Votes: {movieDetails.imdbVotes}</Text>
          <Text>IMDb ID: {movieDetails.imdbID}</Text>
          <Text>Type: {movieDetails.Type}</Text>
          <Text>DVD: {movieDetails.DVD}</Text>
          <Text>Box Office: {movieDetails.BoxOffice}</Text>
          <Text>Production: {movieDetails.Production}</Text>
          <Text>Website: {movieDetails.Website}</Text>
        </View>
      ) : (
        <Text>Movie not found</Text>
      )}
    </View>
  );
}
