import React from "react";
import { StatusBar } from "react-native";
import { Pressable, StyleSheet, View,Text } from "react-native";

const Admin=({navigation,route})=>{
    return(
        <View style={style.container}>
           <Text style={{position:'absolute',fontSize:22,top:0,textDecorationLine:'underline',fontWeight:'bold'}} >Parking lot manager</Text>
          <Pressable onPress={()=>{
            navigation.replace('Price',{})
          }} style={{width:220,height:50,borderRadius:20,borderWidth:1,backgroundColor:'#2879BD',justifyContent:'center',alignItems:'center'}} android_ripple={{borderless:false}}>
            <Text style={{color:'white'}}>
            Parking price
            </Text>
          </Pressable>
          <Pressable onPress={()=>{navigation.replace('Report',{})}} style={{width:220,height:50,borderRadius:20,borderWidth:1,backgroundColor:'#2879BD',color:'white',marginTop:10,justifyContent:'center',alignItems:'center'}} android_ripple={{borderless:false}}>
            <Text style={{color:'white'}}>
            Entry and exit report
            </Text>
          </Pressable>
          <Pressable onPress={()=>{
            navigation.replace('Reportdriver',{})
          }} style={{width:220,height:50,borderRadius:20,borderWidth:1,backgroundColor:'#2879BD',color:'white',marginTop:10,justifyContent:'center',alignItems:'center'}} android_ripple={{borderless:false}}>
            <Text style={{color:'white'}}>
            Driver report
            </Text>
          </Pressable>
          <Pressable onPress={()=>{
            navigation.replace('Reportparking',{})
          }} style={{width:220,height:50,borderRadius:20,borderWidth:1,backgroundColor:'#2879BD',color:'white',marginTop:10,justifyContent:'center',alignItems:'center'}} android_ripple={{borderless:false}}>
            <Text style={{color:'white'}}>
            Report on parking situation
            </Text>
          </Pressable>
          <Pressable onPress={()=>{
                 navigation.replace('MessageCustom',{})
          }} style={{width:220,height:50,borderRadius:20,borderWidth:1,backgroundColor:'#2879BD',color:'white',marginTop:10,justifyContent:'center',alignItems:'center'}} android_ripple={{borderless:false}}>
            <Text style={{color:'white'}}>
            Custom message
            </Text>
          </Pressable>
          <Pressable onPress={()=>{navigation.replace('Main',{})}} style={{width:220,height:50,borderRadius:20,borderWidth:1,backgroundColor:'#2879BD',color:'white',marginTop:10,justifyContent:'center',alignItems:'center'}} android_ripple={{borderless:false}}>
            <Text style={{color:'white'}}>
            Exit
            </Text>
          </Pressable>
          <StatusBar></StatusBar>
        </View>


    )
}
var style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#A3D4FD',
         alignItems:'center',
         justifyContent:'center'
        
    }
})
export default Admin;