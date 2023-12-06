import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const MovieDetails = ({ route, navigation }) => {

  let {title, releaseYear} = route.params;

  
  
return (
    <View style={styles.container}>
            
        <Text> {title} </Text>
        <Text> {releaseYear} </Text>    

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
     paddingTop: 50,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 54,
    },
    border: {
      borderWidth: 1,
      borderColor: "gray",
    }
  });  

export default MovieDetails;