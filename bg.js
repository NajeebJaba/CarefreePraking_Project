import React, { useEffect, useState } from 'react';
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import Select, {SelectItem} from '@redmin_delishaj/react-native-select'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';

const image = {uri: 'https://reactjs.org/logo-og.png'};
const data = [
    { text: 'Option 1', value: 1 },
    { text: 'Option 2', value: 2 },
    { text: 'Option 3', value: 3 },
  ];

const Bg = () =>{

  
const[selected,setSelected]=useState('');
const[array,setArray]=useState([]);

useEffect(()=>{

  setSelected('C#');
//  setSelected("Language2");
  setArray([{"key":'C#',index:0},{"key":"java",index:1}])
},[]);
    return(

      
      <SafeAreaView style={styles.container}>
        {/* <ImageBackground resizeMode='contain' style={styles.image} source={require('./assets/img-0.png')}>
          <Text>fdf</Text>
        </ImageBackground> */}
        <Picker  selectedValue={selected} onValueChange={(key,index)=>{setSelected(key);}} >
       
         {
          array.map((key)=>{ 
            return(
              <Picker.Item label={key.key} value={key.key} key={key.index} ></Picker.Item>
            )
          })
         }
        </Picker>
        <Button title='btn' onPress={()=>{

          // array.push({"key":"kotlin",index:2});
               setArray([{"key":'C#',index:0},{"key":"java",index:1},{"key":"kotlin",index:2}])
          alert(selected)
        }}></Button>
      </SafeAreaView>
        // <View style={styles.container}>




    );
    
}

  


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
   
    alignItems:'center'
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default Bg;