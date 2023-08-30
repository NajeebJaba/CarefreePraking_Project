import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, Dimensions, ImageBackground, Keyboard, Linking, StyleSheet, Text, TextInput, View } from 'react-native';
import ComboBox from 'react-native-combobox';
import { FlatList, RefreshControl, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {list} from 'react-native-combobox'
import Select, {SelectItem} from '@redmin_delishaj/react-native-select'
import DatePicker from 'react-native-date-picker';
import { Picker } from '@react-native-picker/picker';
import global from './global';
import {Popup,showLocation} from 'react-native-map-link'

const Navigate=({navigation,route})=>{
  const {width, height} = Dimensions.get('window')
  const ASPECT_RATIO = width / height;
  const[isVisible,setIsVisible]=useState(false);
  const[isVisibleLabel,setIsVisibleLabel]=useState(false);
  const[isVisibleButton,setIsVisibleButton]=useState(false);
  const[latitude,setLatitude]=useState(0.0);
  const[longitude,setLongitude]=useState(0.0);
  const[packing,setPacking]=useState('');
//  alert(isVisibleButton)
  var data=[
         {'point1':'0','point2':1,'latitude':32.421689900000004,'longitude':35.03377545},
         {'point1':'0','point2':2,'latitude':32.421689900000004,'longitude':35.03377545},
         {'point1':'1','point2':1,'latitude':32.421689900000004,'longitude':35.03377545},
         {'point1':'1','point2':2,'latitude':32.421689900000004,'longitude':35.03377545},
         {'point1':'1','point2':3,'latitude':32.421689900000004,'longitude':35.03377545},
         {'point1':'2','point2':1,'latitude':32.421689900000004,'longitude':35.03377545},
         {'point1':'2','point2':2,'latitude':32.421689900000004,'longitude':35.03377545},
         {'point1':'2','point2':3,'latitude':32.421689900000004,'longitude':35.03377545},
         {'point1':'2','point2':4,'latitude':32.421689900000004,'longitude':35.03377545}
  
  ];
  var point1=-1;
  var point2=-1;
 // var latitude=0.0;
  //var longitude=0.0;
  //var packing="";


  useEffect(()=>{

   // alert("")
    if(route.params.data!=undefined){
    //  alert("error")
   
    var point1=parseInt( route.params.data.LocationPointLatuide.toString().trim());
    var point2=parseInt( route.params.data.LocationPointLongLatuide).toString().trim();
    var dataPoint=data.filter(r=>r.point1==point1 && r.point2==point2);
    //alert(dataPoint.length)
    //alert(dataPoint);
  
    if(dataPoint){
      //alert(dataPoint[0].latitude)
     setLatitude( dataPoint[0].latitude);
      setLongitude(dataPoint[0].longitude);
      setPacking("qasmi collage");
      //route.params.data.Paking;
      setIsVisibleLabel(false);
      setIsVisibleButton(true);
     // alert(latitude)
    }
   
  } else{
  
    setIsVisibleLabel(true);
    setIsVisibleButton(false);
    //alert(isVisibleButton)
   // alert(isVisibleLabel)
  //  setIsVisibleLabel(true);
   //  alert("err")
   }
  },[isVisibleLabel,isVisibleButton,latitude,longitude,packing]);

 // alert(latitude);
  //alert(latitude+","+longitude+","+packing)
  const options={

    latitude: latitude,
    longitude:longitude,
    title:packing,
    dialogTitle:'Navigation to',
    dialogMessage:'Select the app navigate',
    cancelText:'cancel',
    alwaysIncludeGoogle: true,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0922 * ASPECT_RATIO,
  };
 //alert(options.title)

  function wazeMap(){
    
    //setIsVisible(true);
 
   
  }


    return(
      
    <View style={styles.container}>

<Popup isVisible={isVisible}
      onAppPressed={()=>{
        setIsVisible(false)
      }}
      modalProps={()=>{
        animationIn:'slideInUp'
       }}
      onBackButtonPressed={()=>setIsVisible(false)}
       onCancelPressed={()=>{setIsVisible(false)}}
      
       appsWhiteList={["google-maps","waze"]}
       options={options}
       >
        
        
        </Popup >
     <Text  style={{fontSize:40,display:isVisibleLabel?'flex':'none'}}> No Data</Text>
        {/* Linking.openURL('google.navigation:q=32.421689900000004+35.03377545') */}
       <View style={{display:isVisibleButton?'flex':'none',marginTop:40}}>
       <Button  title='Start Navigate'
        onPress={()=>{
         // alert(options.title)
          setIsVisible(true)}}></Button>
       </View>
      </View>
    
    
    )
};


const styles = StyleSheet.create({
    container: {
        flex:1,
       fontSize:34,
      alignItems:'center',
        justifyContent:'center'
        // padding:StatusBar.currentHeight,
      // height:'100%', 
      // backgroundColor: '#E7A658',
      // alignItems:'center',
      // height:'100%'
     
    },
  });
  
  const styleInput=StyleSheet.create({
   
    hide:{
  
      display:'none'
    },
    show:{
     display:'flex'
    },
      button:{
        width:300,
        height:40
        
      },
      buttonMargin:{
        marginTop:30
      },
      labelError:{
     
         fontSize:23
      },
      labelHeader:{
        textDecorationLine:'underline',
      marginTop:30,
        fontWeight:'bold',
      fontSize:30,
      fontFamily:'Arial',
      color:'white'
      },
      label:{
        
      width:300,
      textAlign:'left',
      fontWeight:'bold',
      color:'#fff'
      },
      labelmargin:{
       marginTop:2
      },
      input:{
        
        color:'#111',
        backgroundColor:'#fff',
        textAlign:'left',
        paddingLeft:14,
        marginTop:1,
        borderRadius:10,
        height:40,
        width:300,
        borderWidth:1
      }
    
    });

export default Navigate;
