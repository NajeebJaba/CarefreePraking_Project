import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import global from './global';

const Register=({navigation})=>{
 
  [name,setName]=useState('');
  [id,setId]=useState('');
  [vehicle,setVehicle]=useState('');
  [phone,setPhone]=useState('');
  [card,setCard]=useState('');
  [userName,setUserName]=useState('');
  [password,setPassword]=useState('');
  [showBox,setShowBox]=[false];

const confirm=()=>{

  return Alert.alert(
    "?",
    "create new user?press yes",
    [
     {
      onPress:()=>{

        
      var data={
        'NameDriver':name,
        'id':id,
        "vehicle":vehicle,
        "phone":phone,
        "visaCard":card,
        "userName":userName,
        "password":password
      }
 
      try{

        
            fetch(`${global.ip.key}:3000/register/`,{
          method:'post',
          headers:{
            Accept: 'application/json',
            'Content-Type':'application/json'},
          body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(res=>{


          if(res){

            alert(res.message);
          }
          // if(res.connected){
          
          //   navigation.navigate("Menu");
          // }
          // else{

          //   alert("user not found!!!");
          // }
                   
                        })
        .catch(err=>{alert(err)});
        
  
      }
  
      catch(err){
        alert(err);
      }
      },

      "text":"Yes"
     },
     {
      "text":"No"
     }

  ]);
};
  //confirm();
  const registerData=()=>{
    if(name.trim()==""|| id.trim()=="" ||phone.trim()==""||userName.trim()==""){

      alert("row(s) is empty check agin!!!!");
      return;
    }
    else{
    confirm();

    }
   
  

};

    return ( 
  
  
        <View style={styles.container}>
          {showBox && <View style={styles.box}></View>}
        <Text style={styleInput.labelHeader}>הרשמה</Text>
       
        <Text style={styleInput.label}>Name Driver</Text>
        <TextInput id='_txtuserName' ref={inputdriver=>{this.txtdriver=inputdriver}} onChangeText={value=>{setName(value)}} placeholder='insert Driver' style={styleInput.input} keyboardType='default'></TextInput>
       
        <Text style={[styleInput.label,styleInput.labelmargin]}>Id</Text>
        <TextInput id='_txtid' ref={inputid=>{this.txtid=inputid;}} maxLength={10} onChangeText={value=>{setId(value)}} placeholder='insert Id' style={styleInput.input} keyboardType='default'></TextInput>
      
        <Text style={[styleInput.label,styleInput.labelmargin]}>Vehicle License</Text>
        <TextInput id='_txtvechile' ref={inputvs=>{this.txtvehicle=inputvs;}} onChangeText={value=>{setVehicle(value)}} placeholder='insert Vehicle License' style={styleInput.input} keyboardType='default'></TextInput>
       
        <Text style={[styleInput.label,styleInput.labelmargin]} >Phone</Text>
        <TextInput id='_txtphone'  ref={inputph=>{this.txtphone=inputph;}} maxLength={10} onChangeText={value=>{setPhone(value)}} placeholder='insert Phone' style={styleInput.input} keyboardType='numeric'></TextInput>
       
        <Text style={[styleInput.label,styleInput.labelmargin]}>Visa Card</Text>
        <TextInput id='_txtvisa'  ref={inputcd=>{this.txtcard=inputcd;}} maxLength={12} onChangeText={value=>{setCard(value)}} placeholder='insert Visa Card' style={styleInput.input} keyboardType='default'></TextInput>
       
        <Text style={[styleInput.label,styleInput.labelmargin]}>UserName</Text>
        <TextInput id='_txtusername'  ref={inputusr=>{this.txtuername=inputusr;}} onChangeText={value=>{setUserName(value)}} placeholder='insert UserName' style={styleInput.input} keyboardType='default'></TextInput>
       
        <Text style={[styleInput.label,styleInput.labelmargin]}>Password</Text>
        <TextInput id='_txtpassword'  secureTextEntry={true} ref={inputpwd=>{this.txtpwd=inputpwd;}} onChangeText={value=>{setPassword(value)}} placeholder='insert password' style={styleInput.input} keyboardType='default'></TextInput>
       
        <View style={{flexDirection: 'row',marginTop:10}}>
      <View style={{flex:0 , marginRight:10 ,width:100}} >
          <Button title="Cancel" onPress={() => {

                  this.txtdriver.clear(); 
                  this.txtid.clear(); 
                  this.txtvehicle.clear(); 
                  this.txtphone.clear(); 
                  this.txtcard.clear(); 
                  this.txtuername.clear(); 
                  this.txtpwd.clear(); 

          }}></Button>
      </View>
      <View style={{flex:0,marginRight:10 ,width:100}} >
          <Button title="Register" onPress={() => {

                 registerData();

          }}></Button>
      </View>
    
  </View>

  <View style={{flexDirection:'row',alignItems:'flex-end',flex:1,marginBottom:60}}>
  <Text>
  Back to
  </Text>
        <Text onPress={()=>{navigation.replace("Main")}} style={{textDecorationLine:'underline',color:'black'}}> Sign </Text>
    </View>

        <StatusBar style="auto" />
      </View>
  
  
      )
  
  
  };
  const styles = StyleSheet.create({
    container: {
      height:'100%', 
      backgroundColor: '#E5F194',
      alignItems:'center',
     
    },
    box:{
      width:300,
      height:200,
      backgroundColor:'#fff',
      top:200,
      elevation:100,
      position:'absolute',
      zIndex:100
    }
  });
  
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
        marginTop:10,
        borderRadius:10,
        height:40,
        width:200,
        borderWidth:1
      }
    
    });
  export default Register;

  

  