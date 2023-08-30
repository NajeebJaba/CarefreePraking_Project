import React from "react";
import { useState,useEffect,useRef } from "react";
import Constants from 'expo-constants'
import { Picker } from '@react-native-picker/picker';
import { Keyboard } from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
import global from "./global";
import {
Button,
Pressable,
View,
SafeAreaView,
Text,
TextInput,
FlatList,
ScrollView,
Image,
ImageBackground,
TouchableOpacity,
StyleSheet,
Alert

 }
from 'react-native'
//
var points=[];

const Create=({navigation,route})=>{
  var i=0;
 // const[points,setPoints]=useState([]);
  const[value,setValue]=useState('חניון צפון');
  const[latuide,setLatuide]=useState('');
  const[longitude,setLongitude]=useState('');
  const[guid,setGuid]=useState('');
  const[visible,isVisible]=useState(true);
  const[row,setRow]=useState('');
  const[index,setIndex]=useState(1);
  const[change,setChange]=useState(1);
  const[bool,isBool]=useState(false);
//   const createRoute=()=>{

//   };


 const unique=()=>{


    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    })
   
}
const getIndex=(v)=>{
// alert(v)
fetch(`${global.ip.key}:3000/getIndex/`,{
    method:'post',
    headers:{
      Accept: 'application/json',
      'Content-Type':'application/json'},
    body:JSON.stringify({'data':v})
  })
  .then(res=>res.json())
  .then(res=>{
      if(res){

      //  alert(res.d.length)
        var c=1;
        var b=false;
        var pIndex=[];
        var cc=[];
        pIndex=res.d;
    
       // alert(pIndex.length)
        pIndex.forEach(e=>{
          cc.push(parseInt(e.key.toString()));
        //var ii=cc.findIndex(cx=>cx.number==c)
          //  if(parseInt(e.key.toString())==c)c=c+1;
          //  else{
          //   b=true;
          //   return true;
          //  }
        });
       // alert(cc.length)
      cc.sort();
    //  if(cc.length>2)
   //   alert(cc[2]);
      for(var k=0;k<cc.length;k++){
        if(cc[k]==c){c=c+1;}
        else{
          b=true;
          break;
        }
      }
      //  setIndex(0);
      if(b){

        i=c;
      }
      else
        i=res.d.length+1;
       
       // alert(i);
       setIndex(i);
       // alert(res.d.length+","+v+",index:"+i);
        points=[];
    //   alert(index+","+v);
      }
      //alert(res.d.length);

  })
  .catch(err=>{});
}


const sendRoute=()=>{
 // alert(index);
    var data={
        name:value,
        key:index,
        points:points

    };
    getIndex();
  //  i=index+1;
   // setIndex(i);
//alert(points.length);
//alert(data.name+","+data.key+","+data.points.length);
fetch(`${global.ip.key}:3000/newroute/`,{
    method:'post',
    headers:{
      Accept: 'application/json',
      'Content-Type':'application/json'},
    body:JSON.stringify(data)
  })
  .then(res=>res.json())
  .then(res=>{
 //   alert(res.message);
      if(res){

       // setIndex(index+1);
        //setIndex(res.d.length+1);
        points=[];
        alert('מסלול חדש נוצר בהצלחה');
    //   alert(index+","+v);
      }
      //alert(res.d.length);

  })
  .catch(err=>{});
    }
if(bool==false){
// points=[];
isBool(true);
//alert(bool);
// setIndex(true);
 getIndex(value);
//lert(points.length)
}
const addPoint=()=>{
if(points.length==0){

   alert('אין אפשרות להמשיך,לא נמצא מסלול לשמירה');
    return;
}
if(points.length<2){
    alert("המסלול קטן חייב להיות 2 נקודות לפחות");
    return;
}
Alert.alert("?","רוצה לשמור מסלול?לחץ אישור להמשך",
[{
    text:'המשך',
    onPress:()=>{



        sendRoute();
    }          
 
},
{
    text:'ביטול'
}

]

);

};
const addNext=()=>{
Keyboard.dismiss();

if(latuide=='' || longitude==''){

    alert('אין אפשרות להמשיך,חסר נקודה/נקודות ');
    return;
}
//  alert(unique());
//setIndex(index+1);
setChange(change+1);
setRow(change.toString());
points.push({

    latuide:latuide,
    longitude:longitude,
    d:unique().toString(),
   // index:index
});
// setPoints({
// latuide:latuide,
//     longitude:longitude,
//     key:index

    
// })
 //alert(points.length);
this.txtlatuide.clear();
this.txtlongitude.clear();
setLatuide('');
setLongitude('');
//  clear();
// alert(index.toString());

};
const Item = ({item, onPress, backgroundColor, textColor}) => (
<TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
  <Text style={[{  fontWeight: "bold",textAlign: "center"}, {color: textColor}]}>Latitude:{item.latuide}</Text>
  <Text style={[{  fontWeight: "bold",textAlign: "center"}, {color: textColor}]}>Longitude{item.longitude}</Text>
</TouchableOpacity>
);
const renderItem = ({item}) => {
const backgroundColor = item.d === row ? '#DADADA' : '#95E0FF';
const color = item.d === row ? 'black' : 'black';

return (
  <Item
    item={item}
    onPress={() => setRow(item.d)}
    backgroundColor={backgroundColor}
    textColor={color}
  />
);
};

const clear=()=>{

setRow('');
points=[];
this.txtlatuide.clear();
this.txtlongitude.clear();
setLatuide('');
setLongitude('');
setChange(0);
//getIndex(value);
//alert(points.length);

};


useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
          clear();
        //  alert('')
    });
   // setIndex(index+1);
   // alert(index)
   // alert('')
    //return unsubscribe;
 },[navigation]);
    return(
    <SafeAreaView style={style.container}>
        <Image source={require('./assets/img-12.png')}
        style={{opacity:.3,flex:1,position:'absolute'}}></Image>
            <Text style={{marginTop:Constants.statusBarHeight,color:'#fff',fontSize:30}}>
                Create Route
            </Text>

            <Pressable onPress={()=>{
             //   clear();
             navigation.replace('Administrator',{})}} style={{position:'absolute',left:10,top:10,width:40,height:40,zIndex:1}}>
        <Image style={{width:40,height:40}} source={require('./assets/img-7.png')} ></Image>
        </Pressable>
             <View style={{marginTop:Constants.statusBarHeight,borderWidth:0,borderColor:'red',width:'90%'}}>
                <Text style={{color:'#fff'}} onPress={()=>{}}>בחר חניון</Text>
              <Picker style={{backgroundColor:'#ccc',marginTop:6}} selectedValue={value}  onValueChange={(v,index)=>{
                setValue(v);
          
               getIndex(v);
            
            }} mode={'dropdown'}>
                <Picker.Item label={'חניון צפון'} key={1} value={'חניון צפון'}></Picker.Item>

                <Picker.Item label={'חניון דרום'} key={2} value={'חניון דרום'}></Picker.Item>
                <Picker.Item label={'חניון מרכז'} key={3} value={'חניון מרכז'}></Picker.Item>
              </Picker>
             </View>
             <View style={{marginTop:10, borderWidth:0,borderColor:'red',flex:0,direction:'rtl',width:'90%'}}>
             <Text style={{color:'#fff',width:'100%',textAlign:'right',alignSelf: "flex-end", borderWidth:0,borderColor:'red'}} onPress={()=>{}}>Latuide</Text>
             <TextInput onChangeText={(value)=>{setLatuide(value);}} ref={(la)=>{this.txtlatuide=la}} style={styleInput.input}></TextInput>
             </View>
             <View style={{marginTop:10, borderWidth:0,borderColor:'red',direction:'rtl',width:'90%'}}>
             <Text style={{color:'#fff',width:'100%',alignSelf: "flex-end",textAlign:'right'}} onPress={()=>{}}>Longitude</Text>
             <TextInput  onChangeText={(value)=>{setLongitude(value);}} ref={(l)=>{this.txtlongitude=l}} style={styleInput.input}></TextInput>
             </View>
             <View style={{marginTop:10, borderWidth:0,borderColor:'red',zIndex:2,direction:'rtl',width:'90%',flexDirection:'row'}}>
   
   {
    visible &&
    <Pressable onPress={()=>{
        addNext();
                     
                     }} style={{position:'absolute',left:10,top:10,width:40,height:40,zIndex:1}}>
                <Image style={{width:40,height:40}} source={require('./assets/img-13.png')} ></Image>
                </Pressable>
   }

{
    visible && 
    <Pressable onPress={()=>{
this._panel.show();
isVisible(false);
         
         }} style={{position:'absolute',left:60,top:8,width:40,height:40,zIndex:1}}>
    <Image style={{width:80,height:40}} source={require('./assets/img-14.png')} ></Image>
    </Pressable>
}
             </View>
             <View style={{marginTop:10, borderWidth:0,borderColor:'red',flex:1,width:'90%',flexDirection:'row-reverse',alignItems:'flex-end',paddingHorizontal:40,marginBottom:10}}>
             <Pressable onPress={()=>{ addPoint();}}  android_ripple={{borderless:false}} style={{backgroundColor:'#6EB7E1',alignItems:'center',justifyContent:'center',borderRadius:4,marginTop:10,width:100,height:30}}>
                          <Text style={{color:'white',textAlign:'center'}}>
                              Save
                          </Text>
                         </Pressable>
                         <Pressable onPress={()=>{

                            clear();
                         }}  android_ripple={{borderless:false}} style={{backgroundColor:'#6EB7E1',marginRight:10,alignItems:'center',justifyContent:'center',borderRadius:4,marginTop:10,width:100,height:30}}>
                          <Text style={{color:'white',textAlign:'center'}}>
                              Cancel
                          </Text>
                         </Pressable>
             </View>

             <SlidingUpPanel ref={c => this._panel = c}>
          <View style={[style.container,{zIndex:120}]}>
            
            <Text style={{color:'#fff',marginTop:Constants.statusBarHeight}}>מסלול חנייה</Text>
            <Button title='Hide' onPress={() => 
            {
                this._panel.hide();
                isVisible(true);
            }
            
            } />
            <FlatList
            data={points}
            renderItem={renderItem}
             keyExtractor={(item)=>item.d}
            extraData={row}
             ListEmptyComponent={()=>{
                return( <View style={{ alignItems: "center" }}>
                <Text style={{ padding: 20,marginTop: 5, fontSize: 15,color:'white'}}>לא נמצא נתונים</Text>
                </View>)
             }}
                
             ItemSeparatorComponent={()=>{
                return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
               }}
            >
                
            </FlatList>
          </View>
        </SlidingUpPanel>

    </SafeAreaView>)


}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#111',
        alignItems:'center'
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
      backgroundColor:'#ccc',
     textAlign:'right',
     paddingRight:10,
      paddingLeft:14,
    //   marginTop:100,
      borderRadius:10,
      height:60,
      width:370,
      borderWidth:1
    }
  
  });
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      backgroundColor:'#64C6FE',
      // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
   
      // width:300,
      // padding: 30,
      // flex:1,
    
      // marginVertical: 8,
      // marginHorizontal: 16,
      // shadowColor:'#171717',
      // shadowOffset:{width:-2,height:4},
      // shadowOpacity:0.2,
      // shadowRadius:3,
      // alignSelf:'flex-end'
     
      width:300,
      alignItems: "flex-start",
      justifyContent: "space-evenly",
      backgroundColor: "white",
      marginTop: 10,
      marginBottom: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: 8,
      marginVertical:12,
      padding:10
    },
    title: {
      fontSize: 12,
    },
    confirmationTitle: {
      fontWeight: "bold",
      textAlign: "center",
    
  },
  confirmationCar: {
      
      textAlign: "center",
      fontSize:13
  
    
  },
  confirmationContainer: {
      borderTopColor: "lightgrey",
      borderTopWidth: 1,
      width: "100%"
  },
  confirmationText: {
      textAlign: "center",
    
  }
  });
export default Create;