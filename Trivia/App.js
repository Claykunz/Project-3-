import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Prompt from './Prompt';
import MovieDetails from "./MovieDetails";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
   <Stack.Navigator initialRouteName='Prompt'>
     <Stack.Screen name='Prompt' component={Prompt} />
     <Stack.Screen name='MovieDetails' component={MovieDetails} />  
    </Stack.Navigator>    
    </NavigationContainer>  
     //<Prompt />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
