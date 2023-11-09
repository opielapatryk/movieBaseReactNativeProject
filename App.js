import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from './styles/styles';
import { MovieSearchPage } from './components/MovieSearchPage';


export default function App() {
  return (
    <View style={styles.container}>
      <MovieSearchPage/>
      <StatusBar style="auto" />
    </View>
  );
}


