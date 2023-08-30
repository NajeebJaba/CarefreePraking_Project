import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, Button, ImageBackground, StyleSheet,TextInput, Text, View } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import global from './global';
import Icons from 'react-native-vector-icons/FontAwesome5'
import Constants from 'expo-constants'
//import {createStackNavigator} from '@react-navigation/native-stack';




  const Main=({navigation})=>{
  
  const[userName,setUserName]=useState('');
  const[password,setPassowrd]=useState('');

  useEffect(()=>{

   // alert(global.ip.key);
  });

//   const oo=()=>{
//     setTimeout(() => {
//       //alert('');
//      // oo();
//      }, 1000);
//   };
// oo();
  const login=()=>{
 
    //alert(username)
  //  alert(password+","+userName)
    if(userName.trim()==""|| password.trim()==""){

      alert("userName or password is empty!!");
      return;
    }
    else{

      var data={
        'userName':userName,
        'password':password
      }
      if(data.userName.toLowerCase()=="user1" && data.password.toLowerCase()=="user1"){

        navigation.replace("Admin",{});
        return;
      }

      if(data.userName.toLowerCase()=="admin" && data.password.toLowerCase()=="admin"){

        navigation.replace("Administrator",{});
        return;
      }
      var f=new FormData();
      f.append("userName",data.userName);
      f.append("password",f.password);
      try{

        //192.168.1.33
        //http://10.0.0.3:3000/login/
        // fetch("http://192.168.1.15:3000/login/"
            fetch(`${global.ip.key}:3000/login/`,{
          method:'post',
          headers:{
            Accept: 'application/json',
            'Content-Type':'application/json'},
          body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(res=>{
          if(res.connected){
          
           
            
     
            navigation.replace("Menu",{'key':res.user});
          //navigation.navigate("Menu",{'key':res.user});
          }
          else{

            alert("user not found!!!");
          }
                   
                        })
        .catch(err=>{alert(err)});
        
  
      }
  
      catch(err){
        alert(err);
      }
    }
   
  

};

  return (

    <View style={styles.container} >
    
            <ImageBackground  resizeMode='contain' style={styles.image} source={require("./assets/img-0.png")}>
          
          
      <Text style={styleInput.labelHeader}>הזמן שירות חנייה אונליין</Text>
    <View style={{justifyContent:'center'}}>
 
 <Icons name='user'  size={20} style={{position:'absolute',color:'black',zIndex:1,right:10,top:37}}/>

    <Text style={styleInput.label}>UserName</Text>
  <TextInput 
      inlineImageLeft="username" 
      underlineColorAndroid="transparent"
      ref={input=>{this.textinput=input}} 
       id='txtuserName' 
       placeholder='insert username'
        onChangeText={value=>{setUserName(value)}}   
       style={styleInput.input} 
       keyboardType='default'
       keyboardAppearance='dark'
       returnKeyType='next'
       returnKeyLabel='next'
       
       theme={{ roundness: 16 }}
       
  
      //  onSubmitEditing={() => { this.txtpassword.focus(); }}
       blurOnSubmit={false}
       
       ></TextInput>
    </View>
<View style={{justifyContent:'center'}}>
<Icons name='lock'  size={20} style={{position:'absolute',color:'black',zIndex:1,right:10,top:45}}/>

<Text style={[styleInput.label,styleInput.labelmargin]}>Password</Text>
      <TextInput id='txtpassword' ref={inputpassowrd=>{this.txtpassword=inputpassowrd}} 

      returnKeyLabel='next'
keyboardAppearance='dark'
returnKeyType='go'
      onChangeText={value=>{setPassowrd(value)}}  placeholder='insert password' style={styleInput.input} secureTextEntry={true} keyboardType='default'>
        
      </TextInput>
</View>
    
      <View style={{flexDirection: 'row',marginTop:50}}>
    <View style={{flex:0 , marginRight:10 ,width:100}} >
        <Button title="Cancel" onPress={() => {this.textinput.clear();this.txtpassword.clear();setPassowrd("");setUserName("");} }    ></Button>
    </View>
    <View style={{flex:0,marginRight:10 ,width:100}} >
        <Button title="Login" onPress={() => {
        
          login();}}></Button>
    </View>
  
</View>
<View style={{flexDirection:'row',alignItems:'flex-end',flex:1,marginBottom:50}}>
        <Text style={{fontFamily:'Calibri',fontSize:14,color:'white'}}>
New user? Click here to ?</Text>
        <Text onPress={()=>{navigation.navigate("Register")}} style={{textDecorationLine:'underline',color:'white'}}>Register</Text>
    </View>
    </ImageBackground>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    // height:'100%', 
     backgroundColor: '#5573D0',
     alignItems:'center',
     justifyContent:'center'
   
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


export default Main;

