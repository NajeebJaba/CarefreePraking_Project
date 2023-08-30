import React from "react";
import { View,Text } from "react-native";
 import  css from './css'
import { TextInput,Pressable } from "react-native";
import { useState } from "react";
import { Alert } from "react-native";
import global from "./global";
import { Image } from "react-native";

const Price=({navigation,route})=>{

   // alert(global.price)
   this.txtprice=global.price.toString();
    const [valx,setValx]=useState(global.price.toString());
 //alert(valx);
    const setPrice=()=>{

        if(valx==''){
            alert('price is empty');
            return;
        }
       
        Alert.alert("change price?","Are you sure?",[{
            text:'Ok',
            onPress:()=>{
              //  alert(valx)
                
               global.price=parseFloat(valx);
              var  v=global.price;
               this.txtprice=v.toString();
               alert("the price updated!!")
               navigation.replace('Admin',{})
              // this.txtprice.clear();

            }
   
           },{text:'cancel',onPress:()=>{}}])
    
    };
    return(<View  style={css.styles.container}>
        <Text style={css.styles.top}>Set Price Parking</Text>
        <Pressable onPress={()=>{navigation.replace('Admin',{})}} style={{position:'absolute',left:10,top:10,width:40,height:40,zIndex:1}}>
        <Image style={{width:40,height:40}} source={require('./assets/img-7.png')} ></Image>
        </Pressable>
     

<Text style={{width:'48%',textAlign:'left'}}>Price</Text>
        <TextInput ref={x=>{this.txtprice=x}} maxLength={3} defaultValue={this.txtprice} onChangeText={(vx)=>{ setValx(vx);}} style={css.styleInput.input}></TextInput>

        <Pressable onPress={()=>{setPrice()}} style={{width:220,height:50,borderRadius:20,borderWidth:1,backgroundColor:'#2879BD',color:'white',marginTop:10,justifyContent:'center',alignItems:'center'}} android_ripple={{borderless:false}}>
            <Text style={{color:'white'}}>
            Save
            </Text>
          </Pressable>
    </View>)
};

export default Price;