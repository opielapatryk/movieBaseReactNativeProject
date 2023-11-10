import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from '../styles/styles';
import { fetchMovieDetails } from './api';

export function DetailsScreen({ route }) {
  const { movie } = route.params;
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const details = await fetchMovieDetails(movie['Title']);
      setMovieDetails(details);
      setIsLoading(false);
    };

    fetchData();
  }, [movie]);

  return (
    <ScrollView style={styles.detailView}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {/* Display Poster */}
          <Image
            source={{ uri: movieDetails.Poster }}
            style={{ width: 200, height: 300 }}
          />

          {/* Display other movie details */}
          {Object.keys(movieDetails).map((key) => (
            key !== 'Poster' && (
              <View key={key}>
                {key === 'Ratings' ? (
                  // If the key is 'Ratings', iterate over the array of ratings
                  <View>
                    {movieDetails[key].map((rating, index) => (
                      <Text key={index}>
                        {rating['Source']}: {rating['Value']}
                      </Text>
                    ))}
                  </View>
                ) : (
                  // If the key is not 'Ratings', display the key-value pair
                  <Text>
                    {key}: {movieDetails[key]}
                  </Text>
                )}
              </View>
            )
          ))}
        </View>
      )}
    </ScrollView>
  );
}
