import React from 'react';
import { View, Text } from 'react-native';
import { movie as movieList } from '../mockData';

export function DetailsScreen({ route }) {
  const { movie } = route.params;

  // Check if the movie's imdbID matches the one in movieList
  const isMovieFound = movieList['imdbID'] === movie['imdbID'];

  return (
    <View>
      <Text>Hello from details screen</Text>
      {isMovieFound ? (
        // If movie is found, iterate over the keys of movieList
        Object.keys(movieList).map((key) => (
          <View key={key}>
            {key === 'Ratings' ? (
              // If the key is 'Ratings', iterate over the array of ratings
              <View>
                {movieList[key].map((rating, index) => (
                  <Text key={index}>
                    {rating['Source']}: {rating['Value']}
                  </Text>
                ))}
              </View>
            ) : (
              // If the key is not 'Ratings', display the key-value pair
              <Text>
                {key}: {movieList[key]}
              </Text>
            )}
          </View>
        ))
      ) : (
        <Text>Movie not found</Text>
      )}
    </View>
  );
}
