import { MovieSearchPage } from './components/MovieSearchPage';
import { DetailsScreen } from './components/DetailsScreen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Search Page" component={MovieSearchPage}/>
          <Stack.Screen name="Movie Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }