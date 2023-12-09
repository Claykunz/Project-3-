import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, TextInput} from 'react-native';

const Prompt = ({ navigation, route }) => {

  //console.log(route.params)

  const [question, setQuestion] = useState("Select Next Question to get started!");
  const [answer, setAnswer] = useState("Placeholder");
  const [userAnswer, setUserAnswer] = useState("Placeholder");



  function getQuestionsFromApi() {
       const url = 'https://api.api-ninjas.com/v1/trivia?category=sportsleisure';
    const apiKey = 'f0hvSCnb7VcjgH8efDwsqw==2jwusEVUpf8gwoix';
  fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  })
    .then((response) =>response.json())
    .then((json) => {  
      /* view the JSON that's returned in the server log */ 
      console.log(json);        
      setQuestion(json[0].question);
      setAnswer(json[0].answer);
     
    })
    .catch((error) => {
       console.error(error);
    });


  };

         
  return (
    <View style={styles.container}>     
            <Text>{question}</Text>
          

          <TextInput
            style={{height: 40,
            borderColor: 'gray',
            borderWidth: 1}}
            placeholder="Enter Answer"
            onChangeText={(newText)=>{
              setUserAnswer(newText);
            }}
         
          />
        <Button title="Next Question" onPress = {() => navigation.navigate('Prompt', getQuestionsFromApi())} />
        <Button title="Check Answer" onPress = {() => console.log(userAnswer)} />
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
