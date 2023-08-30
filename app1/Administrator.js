import React, { useState } from "react";
import { StatusBar } from "react-native";
import Constants from 'expo-constants'
import { Pressable, StyleSheet, View,Text,Image } from "react-native";

const Administrator=({navigation,route})=>{
    const[visible,setVisible]=useState(false);
    return(
        <View style={style.container}>
           <Text style={{position:'absolute',fontSize:22,top:0,textDecorationLine:'underline',fontWeight:'bold',marginTop:Constants.statusBarHeight}} >Admin Control</Text>
          <Pressable onPress={()=>{
            navigation.replace('Create',{});
          
          }} style={{width:220,height:50,borderRadius:20,borderWidth:1,backgroundColor:'#2879BD',justifyContent:'center',alignItems:'center'}} android_ripple={{borderless:false}}>
            <Text style={{color:'white'}}>
            יצירת מסלול חדש
            </Text>
            <Image source={require('./assets/img-15.png')} width={12} height={12}/>
          </Pressable>

          <Pressable  onPress={()=>{
            navigation.replace('Reportroute',{});

          }} style={{width:220,height:50,borderRadius:20,borderWidth:1,backgroundColor:'#2879BD',color:'white',marginTop:10,justifyContent:'center',alignItems:'center'}} android_ripple={{borderless:false}}>
            <Text style={{color:'white'}}>
           ערוך מסלול
            </Text>
            <Image source={require('./assets/img-16.png')} width={12} height={12}/>
          </Pressable>


{
  visible &&
          <Pressable  onPress={()=>{
            navigation.replace('Delete',{});

          }} style={{width:220,height:50,borderRadius:20,borderWidth:1,backgroundColor:'#2879BD',color:'white',marginTop:10,justifyContent:'center',alignItems:'center'}} android_ripple={{borderless:false}}>
            <Text style={{color:'white'}}>
            Delete Route
            </Text>
          </Pressable>
}
{
  visible && 
          <Pressable
           onPress={()=>{
            navigation.replace('Update',{});
           }}
          style={{width:220,height:50,borderRadius:20,borderWidth:1,backgroundColor:'#2879BD',color:'white',marginTop:10,justifyContent:'center',alignItems:'center'}} android_ripple={{borderless:false}}>
            <Text style={{color:'white'}}>
           Update Route
            </Text>
          </Pressable>
}
         
          <Pressable onPress={()=>{navigation.replace('Main',{})}} style={{width:220,height:50,borderRadius:20,borderWidth:1,backgroundColor:'#2879BD',color:'white',marginTop:10,justifyContent:'center',alignItems:'center'}} android_ripple={{borderless:false}}>
            <Text style={{color:'white'}}>
            התנתק
            </Text>
          </Pressable>
          <StatusBar></StatusBar>
        </View>


    )
}
var style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#62BDD8',
         alignItems:'center',
         justifyContent:'center'
        
    }
})
export default Administrator;