import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, TextInput} from 'react-native';

const Prompt = ({ navigation, route }) => {

  console.log(route.params)

const startingDataSource = [
    { "question": "Click Next Question to Get Started!", "answer": "2003" }
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


         
  return (
    <View style={styles.container}>     
            <Text>{startingDataSource[0]["question"]}</Text>
            
            <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Type your answer here"
      />
        <Button title="Next Question" onPress = {() => console.log("Pressed!")} />
        <Button title="Check Answer" onPress = {() => console.log("Pressed!")} />
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
