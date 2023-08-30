import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground,Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import global from './global';
import Icons from 'react-native-vector-icons/FontAwesome5'

const Menu=({navigation, route})=>{
 // alert(route.params.key)
// alert(route.params.key.id);

//alert(route.params.key.name)
 const getParking=()=>{

    //alert(route.params.key.id);
    var data={
        id:route.params.key.id
    }
    

    try{

      var  sendData=()=>{

        
        fetch(`${global.ip.key}:3000/getPacking/`,{
          method:'post',
          headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
   
          },
          body:JSON.stringify(data)
   
       })
       .then(res=>res.json())
       .then(res=>{
   
       // alert(res.data.LocationPointLatuide);
               navigation.navigate("Navigate",{'key':route.params.key,'data':res.data});
   
           
          
       })
       .catch(res=>{});
      };
       
     sendData();
     }
     catch(err){
        alert("error:"+err);
     }

 };

 var checkParking=()=>{

             
  fetch(`${global.ip.key}:3000/getMessage/`,{
    method:'post',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json'

    },
    body:JSON.stringify({})

 })
 .then(res=>res.json())
 .then(res=>{
  if(res.empty==false){

    alert(res.message);
    return;
  }
  navigation.navigate("Parking",{'key':route.params.key})
 // sendData();
 // alert(res.data.LocationPointLatuide);
        // navigation.navigate("Navigate",{'key':route.params.key,'data':res.data});

     
    
 })
 .catch(res=>{});

};

//checkParking();

    return ( 
  
  
        <View style={styles.container}>
       <ImageBackground style={{flex:1,width:400,alignItems:'center',opacity:1}}  source={require("./assets/img-2.jpg")}>
       <Text style={{color:'white',marginTop:40,textAlign:'left',width:'80%'}}>hello : {route.params.key.NameDriver}</Text>
       <View style={{color:'white',marginTop:4,textAlign:'left',width:'80%',flexDirection:'row'}}>
       <Image style={{width:25,height:20}} source={require('./assets/img-9.png')}></Image>
       <Text style={{color:'white',marginLeft:10}}>Car : {route.params.key.vehicle}</Text>
       </View>
       <Text style={styleInput.labelHeader}>תפריט אפליקציה</Text>
        <View style={{flexDirection: 'row',marginTop:0 }}>
            <Pressable android_ripple={{borderless: false}} onPress={()=>{

                 navigation.navigate("Profile",{'key':route.params.key});

            }} style={{height:50,width:130,backgroundColor:'#1C8CD5',borderRadius:10,justifyContent:'center',elevation:3,alignItems:'center'}}>
                  <Icons name='user-cog' size={22} color={'#111'}  style={{position:'absolute',left:5,top:5}}></Icons>
                <Text style={{color:'#fff',fontWeight:'normal'}}>פרופיל</Text>
            </Pressable>
            <Pressable android_ripple={{borderless: false}} onPress={()=>{checkParking();}} style={{height:50,width:130,borderRadius:10,marginLeft:10,backgroundColor:'#1C8CD5',justifyContent:'center',elevation:3,alignItems:'center'}}>
            <Icons name='parking' size={22} color={'#E9F4C3'}  style={{position:'absolute',left:5,top:5}}></Icons>
                <Text style={{color:'#fff',fontWeight:'bold'}}>הזמן חנייה</Text>
            </Pressable>
        </View>
  
        <View style={{flexDirection: 'row',marginTop:40}}>
            <Pressable android_ripple={{borderless: false}} onPress={()=>{
             // alert('')
             const getRegions=()=>{

              fetch(`${global.ip.key}:3000/findRoutePacking/`,{
                method:'post',
                headers:{
                  Accept: 'application/json',
                  'Content-Type':'application/json'},
                body:JSON.stringify({'id':route.params.key.id})
              })
              .then(res=>res.json())
              .then(res=>{
             
                if(res.message=='no-data'){
          
               alert('לא נמצאת חנייה עבורך');
                }
             
                else{
                  navigation.navigate("Poly",{'key':route.params.key})  
                }
          
            
              })
              .catch(err=>{});
            };
            
            getRegions();
                //getParking()
                
                }} style={{height:50,width:130,backgroundColor:'#1C8CD5',borderRadius:10,justifyContent:'center',elevation:3,alignItems:'center'}}>
            <Icons  name='map-marker-alt' size={22} color={'#ADD9E7'}  style={{position:'absolute',left:5,top:5}}></Icons>
               
                <Text style={{color:'#fff',fontWeight:'normal'}}>ניווט</Text>
            </Pressable>
            <Pressable android_ripple={{borderless: false}} onPress={()=>{

                   navigation.navigate('Message',{'key':route.params.key});

            }} style={{height:50,width:130,borderRadius:10,marginLeft:10,backgroundColor:'#1C8CD5',justifyContent:'center',elevation:3,alignItems:'center'}}>
            <Icons name='paper-plane' size={22} color={'#ADD9E7'}  style={{position:'absolute',left:5,top:5}}></Icons>
               
                <Text style={{color:'#fff',fontWeight:'normal'}}>שלח בקשה</Text>
            </Pressable>
        </View>
      
        <View style={{flexDirection: 'row',marginTop:40}}>
            <Pressable android_ripple={{borderless: false}} onPress={()=>{

            navigation.navigate("Main");
            }} style={{height:50,width:130,borderRadius:10,backgroundColor:'#1C8CD5',justifyContent:'center',elevation:3,alignItems:'center'}}>
               <Icons name='home' size={22} color={'#ADD9E7'}  style={{position:'absolute',left:5,top:5}}></Icons>
                <Text style={{color:'#fff',fontWeight:'normal'}}>התנתק</Text>
            </Pressable>

            <Pressable android_ripple={{borderless: false}} onPress={()=>{

navigation.navigate('Myreport',{'key':route.params.key});

}} style={{height:50,width:130,marginLeft:10,borderRadius:10,backgroundColor:'#1C8CD5',justifyContent:'center',elevation:3,alignItems:'center'}}>
   <Icons name='chart-pie' size={22} color={'#111'}  style={{position:'absolute',left:5,top:5}}></Icons>
<Text style={{color:'#fff',fontWeight:'normal'}}>דוח שלי</Text>
</Pressable>
     
        </View>

        <StatusBar style="auto" />
       </ImageBackground>
      </View>
  
  
      )
  
  
  };


  const styles = StyleSheet.create({

    parent: {
       
        width: 300,
        height: 100,
        backgroundColor: 'red',
        margin: 50,
    },
    button: {
        flexDirection: 'row', 
        height: 50, 
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        elevation:3,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {
        flex:1,
      height:'100%', 
      backgroundColor: '#111',
      alignItems:'center',
     
    },
    btnContainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    btnSize:{
        width:"100%"
    }
  });
  
  const styleInput=StyleSheet.create({
   
      button:{
        width:200,
        height:40
        
      },
      labelHeader:{

        textDecorationLine:'underline',
        marginTop:40,
       flexGrow:.23,
        fontWeight:'bold',
      fontSize:30,
      fontFamily:'Cochin',
      color:'#fff'
      },
      label:{
        
      width:200,
      textAlign:'left',
      fontWeight:'bold'
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
  export default Menu;
