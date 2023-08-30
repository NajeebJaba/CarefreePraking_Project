import React from "react";
import { 
    StyleSheet,
    View,
    Text,
    StatusBar,
    Pressable
 } from "react-native";
import  {Picker} from '@react-native-picker/picker'
import { useState } from "react";
import global from "./global";
import { TextInput } from "react-native";
import { Alert } from "react-native";



const Message=({navigation,route})=>{
  //  alert(route.params.key.id);
  var dx={
    'data':new Date().toISOString().slice(0,10),
    'id':route.params.key.id
  }
 // alert(data.data+","+data.id)
     const[visible,setVisible]=useState(false);
     const[controls,setControls]=useState(false);
     const[selected,setSelected]=useState('אני מאחר ב 15 דקות');
     const[date,setDate]=useState(new Date().toISOString().slice(0,10));
     const msg=()=>{

       
        fetch(`${global.ip.key}:3000/bookparking/`,{
            method:'post',
            headers:{
              Accept: 'application/json',
              'Content-Type':'application/json'},
            body:JSON.stringify(dx)
          })
          .then(res=>res.json())
          .then(res=>{
          // alert(res.message);
           if(res.message=='error'){

              //{
               // alert('')
               setVisible(true);
               setControls(false);
               
              //}
           }
           else{
            setVisible(false);
            setControls(true);
           }
          })
          .catch(err=>{});
     
      
     };
     const sendMessage=()=>{
     var dd={
        Id:route.params.key.id,
        Message:selected


     };
    // alert(dd.id)
        Alert.alert('send message?','איחור להגעה לחניון',
        
        [{

            text:'yes',
            onPress:()=>{

                fetch(`${global.ip.key}:3000/sendMessage/`,{
                    method:'post',
                    headers:{
                      Accept: 'application/json',
                      'Content-Type':'application/json'},
                    body:JSON.stringify(dd)
                  })
                  .then(res=>res.json())
                  .then(res=>{
                    if(res.done){
                        alert('נשלחה הודעה בהצלחה על איחור');
                    }
        
                  })
                  .catch(err=>{});

            }
        }
        ,
        {
          text:'cancel',
        
        }]);
      
     };
  msg();
    return(<View style={styles.container}>
         <Text onPress={()=>{

         }} 
         style={{marginTop:StatusBar.currentHeight,fontSize:22,marginTop:100}}>
            Send Message 
         </Text>

         {
           visible && <Text style={{fontSize:20,color:'red'}}>The User Have Not Data</Text>
         }

         {
    controls &&  
    <View style={[styles.container,styles.marginTop]}>
        <Text style={{width:200,textAlign:'left',fontWeight:'bold'}}>Date Book Parking</Text>
        <TextInput editable={false} onSubmitEditing={()=>{}}  blurOnSubmit={true} defaultValue={date} style={{borderWidth:1,marginTop:4,borderRadius:4,width:200,textAlign:'center'}}></TextInput>
        
        <Picker selectedValue={selected} onValueChange={(value,index)=>{
            setSelected(value);
           // alert(selected)
        }}  mode='dropdown'   style={{backgroundColor:"#6EB7E1",color:'#fff',height:10,width:200,marginTop:20}}>
           <Picker.Item value={'אני מאחר ב 15 דקות'} label={'אני מאחר ב 15 דקות'} key={1}> </Picker.Item>
           <Picker.Item value={'אני מאחר ב בחצי שעה'} label={'אני מאחר ב בחצי שעה'} key={1}> </Picker.Item> 
           <Picker.Item value={'אני מאחר ב שעה'} label={'אני מאחר ב שעה'} key={1}> </Picker.Item>  
        </Picker>

        <Pressable onPress={()=>{sendMessage();}}  android_ripple={{borderless:false}} style={{backgroundColor:'#6EB7E1',alignItems:'center',justifyContent:'center',borderRadius:4,marginTop:10,width:140,height:30}}>
                          <Text style={{color:'white',textAlign:'center'}}>
                              Send Message
                          </Text>
                         </Pressable>
        </View>
         }
      
    </View>)

};
const styles=StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff'
    },
    marginTop:{
        marginTop:40
    }
});
export default Message;