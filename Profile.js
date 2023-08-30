import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
const arr=()=>{
    
}
const Profile=({navigation,route})=>{

    var setData=()=>{
     // alert(route.params.key.id)

      this.txtdriver=route.params.key.NameDriver;
      this.txtid=route.params.key.id;
      this.txtvehicle=route.params.key.vehicle;
      this.txtphone=route.params.key.phone;
      this.txtvisa=route.params.key.visaCard;
    };
    setData();
    return ( 
  
      
        <View style={styles.container}>
         <ImageBackground style={{flex:1,width:400,alignItems:'center',opacity:1}}  source={require("./assets/img-5.jpg")}>
         <Text style={styleInput.labelHeader}>פרטי יוזר</Text>

<Text style={styleInput.label} onPress={()=>{}}>Name Driver:</Text>
<TextInput ref={drive=>{this.txtdriver=drive;}} value={this.txtdriver}  placeholder='insert Driver' style={styleInput.input} keyboardType='default'></TextInput>

<Text style={[styleInput.label,styleInput.labelmargin]}>Id</Text>
<TextInput ref={id=>{this.txtid=id;}}  value={this.txtid} placeholder='insert Id' style={styleInput.input} keyboardType='default'></TextInput>

<Text style={[styleInput.label,styleInput.labelmargin]}>Vehicle License</Text>
<TextInput ref={vehicle=>{this.txtvehicle=vehicle;}} value={this.txtvehicle}  placeholder='insert Vehicle License' style={styleInput.input} keyboardType='default'></TextInput>

<Text style={[styleInput.label,styleInput.labelmargin]}>Phone</Text>
<TextInput  ref={phone=>{this.txtphone=phone;}}  value={this.txtphone} placeholder='insert Phone' style={styleInput.input} keyboardType='numeric'></TextInput>

<Text style={[styleInput.label,styleInput.labelmargin]}>Visa Card</Text>
<TextInput  ref={visa=>{this.txtvisa=visa;}} value={this.txtvisa} placeholder='insert Visa Card' style={styleInput.input} keyboardType='default'></TextInput>



<View style={{flexDirection:'row',alignItems:'flex-end',flex:1,marginBottom:20}}>
<Text style={{fontFamily:'Calibri',fontSize:14}}>
Back to main </Text>
<Text onPress={()=>{navigation.navigate("Menu",{'key':route.params.key})}} style={{textDecorationLine:'underline'}}>Menu</Text>
</View>
         </ImageBackground>
        <StatusBar style="auto" />
      </View>
  
  
      )
  
  
  };
  const styles = StyleSheet.create({
    container: {
      height:'100%', 
      backgroundColor: '#E7A658',
      alignItems:'center',
     
    },
  });
  
  const styleInput=StyleSheet.create({
   
      button:{
        width:200,
        height:40
        
      },
      labelHeader:{
        textDecorationLine:'underline',
        marginTop:80,
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
       marginTop:2
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
  export default Profile;

  

  