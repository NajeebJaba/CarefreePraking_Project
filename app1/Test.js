import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View ,ImageBackground,Image} from 'react-native';

const Test=()=>{


    return(  
          <View style={styles.container}>
            <ImageBackground  resizeMode='stretch' style={styles.image} source={require("./assets/img-0.png")}>
          
             </ImageBackground>
        <Text>OK</Text>
   </View>)
};
const styles = StyleSheet.create({
    image:{
       


        flex:1,
        opacity:0.85,
        width:200,
        position:'absolute',
        height:200, 
        bottom:50
       
    },
  container: {
    height:'100%', 
    backgroundColor: '#2E74DA',
    alignItems:'center',
   
  },
});
export default Test;

