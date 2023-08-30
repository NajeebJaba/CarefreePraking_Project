import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert,Pressable,Image, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import global from './global';
import { SafeAreaView } from 'react-native';

const MessageCustom=({navigation,route})=>{
    const[value,setValue]=useState('');
    const sendMassege=()=>
    {
        if(value==''){
            
            alert('no message');
            return;
        }

        var data={

            message:value
        };
       // alert(data.message);
       Alert.alert(
        "?","are you sure",
        [
          { text:'המשך שליחה',
          onPress:()=>{
            fetch(`${global.ip.key}:3000/customMessage/`,{
              method:'post',
              headers:{
                  Accept:'application/json',
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(data)
              }).then(res=> res.json())//{return res.json()}
              .then(res=>{
              //  alert(res.message)
            //   alert(res.message)
                  if(res){
      
                   alert(res.message);
                      return;
                  }
                  alert('exception');
      
              }).catch(err=>{

                alert(err);
              })

          }},
          {
              text:'ביטול'
          }
        ]
      );

  
    };
    return(
    <SafeAreaView style={styles.container}>
<Pressable onPress={()=>{navigation.replace('Admin',{})}} style={{position:'absolute',left:10,top:10,width:40,height:40,zIndex:1}}>
        <Image style={{width:40,height:40}} source={require('./assets/img-7.png')} ></Image>
        </Pressable>
    <Text style={{color:'#111',fontSize:22,marginTop:20}}>
    Message Custom Status Parking
    </Text>
    <TextInput ref={input=>{this.textinput=input}} id='txtName' 
       placeholder='insert message' onChangeText={value=>{setValue(value)}}   
       style={styleInput.input} keyboardType='default'
      
       blurOnSubmit={false}
       
       ></TextInput>

    <Pressable onPress={()=>{sendMassege();}}  android_ripple={{borderless:false}} style={{backgroundColor:'#6EB7E1',alignItems:'center',justifyContent:'center',borderRadius:4,marginTop:10,width:100,height:30}}>
                          <Text style={{color:'white',textAlign:'center'}}>
                              Send Message
                          </Text>
                         </Pressable>

    </SafeAreaView>
    )

};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      backgroundColor:'#CDEDB8',
      // marginTop: StatusBar.currentHeight || 0,
    }});
    const styleInput=StyleSheet.create({
   
        button:{
          width:200,
          height:40
          
        },
        labelHeader:{
          textDecorationLine:'underline',
          marginTop:10,
         flexGrow:.23,
          fontWeight:'bold',
        fontSize:30,
        fontFamily:'Arial',
        color:'black'
        },
        label:{
          
        width:200,
        textAlign:'left',
        fontWeight:'bold'
        },
        labelmargin:{
         marginTop:1
        },
        input:{
          
          color:'#111',
          backgroundColor:'#fff',
          textAlign:'left',
          paddingLeft:14,
          marginTop:100,
          borderRadius:10,
          height:40,
          width:200,
          borderWidth:1
        }
      
      });
export default MessageCustom;