import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from '../styles/styles';

export function DetailsScreen({ route }) {
  const { movie } = route.params;
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=b32be2df&t=${movie['Title']}`);
      const data = await response.json();
      data.Response === 'True' && setMovieDetails(data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
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
