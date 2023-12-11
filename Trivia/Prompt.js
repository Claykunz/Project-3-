import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, TextInput} from 'react-native';

const Prompt = ({ navigation, route }) => {

  //console.log(route.params)

  const [question, setQuestion] = useState("Select Next Question to get started!");
  const [answer, setAnswer] = useState("Placeholder");
  const [userAnswer, setUserAnswer] = useState("Placeholder");
  const [grade, setGrade] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [qindex, setIndex] = useState(0);



  function getQuestionsFromApi() {
  if (qindex < 5) {
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
      console.log(qindex);
      setQuestion(json[0].question);
      setAnswer(json[0].answer);
      if (setIndex == 5){
        
      }
     
    })
    .catch((error) => {
       console.error(error);
    });
  }
  else {
    console.log("End of quiz");
    setQuestion("End of quiz. Hit Restart to try Again.");


  }

  };

  function isCorrectAnswer() {
    if (answer.toLowerCase() === userAnswer.toLowerCase()) {
      setGrade("Correct!");
      incrementPlayerScore();
      

    } else {
      setGrade("Incorrect. The answer is: " + answer);
      
    }
  }
  

  function resetGrade() {
    setGrade("");
};

function incrementPlayerScore() {
  setPlayerScore(playerScore + 1);
}
function handleNextQuestion() {
  if(qindex <5) {
    setIndex(qindex + 1);
  }
  
}

function Restart() {
  setQuestion("Select Next Question to get started!");
  setIndex(0);
  setPlayerScore(0);
  resetGrade();
  


}

         
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
        <Text>Question: {qindex}</Text>
        <Text>{`Score = ${playerScore}`}</Text>
        <Button title="Next Question" onPress = {() => navigation.navigate('Prompt', getQuestionsFromApi(),resetGrade(), handleNextQuestion())} />
        <Button title="Check Answer" onPress = {() => navigation.navigate('Prompt', isCorrectAnswer())} />
        <Button title="Restart Game" onPress = {() => navigation.navigate('Prompt', Restart())} />
        
        <Text>{grade}</Text>
        
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
