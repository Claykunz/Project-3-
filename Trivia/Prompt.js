import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity} from 'react-native';

const Prompt = ({ navigation, route }) => {

  console.log(route.params)

const startingDataSource = [
    { "title": "Elf", "releaseYear": "2003" },
    { "title": "The Grinch", "releaseYear": "1966" },
    { "title": "Die Hard", "releaseYear": "1988" },
    { "title": "Home Alone", "releaseYear": "1990" },
    { "title": "A Christmas Story", "releaseYear": "1983" }
  ];


  function getMoviesFromApi() {
       
  fetch('https://reactnative.dev/movies.json')
    .then((response) =>response.json())
    .then((json) => {  
      /* view the JSON that's returned in the server log */ 
      console.log(json);      
      setMovies(movies.concat(json.movies));
     
    })
    .catch((error) => {
       console.error(error);
    });


  };

  const [movies, setMovies] = useState(startingDataSource);
  

  useEffect(() => {
    if(route.params) {
      setMovies(movies.concat(route.params));
     }
   }, [route.params]);

         
  return (
    <View style={styles.container}>     
      <FlatList
            data={movies}
            extraData = {movies}
            renderItem={({item}) => 
                <View style={styles.border}>
                  <TouchableOpacity onPress = {() => navigation.navigate('MovieDetails', item)} >
                      <Text style={styles.item}>{item.title}</Text>  
                      <Text style = {styles.item}>{item.description}</Text>  
                  </TouchableOpacity>
                </View>
            } />
        <Button title="Load More" onPress = {() => navigation.navigate('Prompt', getMoviesFromApi())} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
     paddingTop: 50
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 30,
    },
    border: {
      borderWidth: 1,
      borderColor: "gray",
    }
  });  

export default Prompt;
