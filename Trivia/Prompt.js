import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, TextInput} from 'react-native';

const Prompt = ({ navigation, route }) => {

  console.log(route.params)

const startingDataSource = [
    { "title": "Click Next Question to Get Started!", "releaseYear": "2003" }
  ];



  function getQuestionsFromApi() {
       const url = 'https://api.api-ninjas.com/v1/trivia?category=music';
    const apiKey = 'f0hvSCnb7VcjgH8efDwsqw==2jwusEVUpf8gwoix';
  fetch(url, {
    method: "GET",
    headers: {
      "X-Auth-Token": apiKey
    }
  })
    .then((response) =>response.json())
    .then((json) => {  
      /* view the JSON that's returned in the server log */ 
      console.log(json);      
      setQuestions(questions.concat(json.questions));
     
    })
    .catch((error) => {
       console.error(error);
    });


  };

  const [questions, setQuestions] = useState(startingDataSource);

  useEffect(() => {
    if(route.params) {
      setMovies(questions.concat(route.params));
     }
   }, [route.params]);


         
  return (
    <View style={styles.container}>     
            <Text>{startingDataSource[0]["title"]}</Text>
            
            <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Type your answer here"
      />
        <Button title="Next Question" onPress = {() => navigation.navigate('Prompt', getQuestionsFromApi())} />
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
