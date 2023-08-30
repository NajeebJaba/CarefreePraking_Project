import React from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex:1,
      // height:'100%', 
       backgroundColor: '#fff',
       alignItems:'center',
       justifyContent:'center'
     
    },
    top:{
        position:'absolute',
        top:10,
        textDecorationLine:'underline',
        // fontFamily:'DancingScript-Regular',
        fontSize:32,

    },
    image:{
         
  
     alignItems:'center',
      flex:1,
     
      // opacity:0.85,
      // width:200,
      // position:'absolute',
      // height:200, 
      // bottom:80
     
  }
  });
  const styleInput=StyleSheet.create({
   
    button:{
      width:200,
      height:40
      
    },
    labelHeader:{
      marginTop:40,
     flexGrow:.23,
      fontWeight:'bold',
    fontSize:30,
    color:'white'
    },
    label:{
      
    width:200,
    textAlign:'left',
    fontWeight:'bold',
    color:'white'
    },
    labelmargin:{
     marginTop:10
    },
    input:{
      
      color:'#111',
      backgroundColor:'#fff',
      textAlign:'left',
      paddingLeft:14,
      marginTop:10,
      borderRadius:10,
      height:40,
      width:200,
      borderWidth:1
    }
  
  });
  module.exports={styles,styleInput}