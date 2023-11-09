import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  input:{
    borderWidth: 1,
    height:40,
    width:200,
    margin:12,
    padding:10
  }
});
