import React from "react";
import Constants from 'expo-constants'
import { useState,useRef,useEffect } from "react";
import SlidingUpPanel from "rn-sliding-up-panel";
import { Text,
  StyleSheet,
  Animated,
  Image,
  SafeAreaView,
  View,
  Pressable,
  ImageBackground,
  FlatList,
  Button,
   Dimensions,
   TouchableOpacity,
   Alert,

   
   Modal
   } from "react-native";
   import { TextInput } from "react-native";
import global from "./global";

import { hide } from "expo-splash-screen";
var points=[];
var accordions=[];
var newpoints=[];
const Reportroute=({navigation,route})=>{

  const[ddata,setData]=useState(accordions);
  const[value,setValue]=useState('');
  const[row,setRow]=useState('');
  const[accordion,setAccordion]=useState('');
  const slide=useRef(null);
  const slide2=useRef(null);
  const pref=useRef(null);
  const park=useRef(null);
  const[visible,setVisible]=useState(false);
  const[modal,setModal]=useState(false);
  const[fs,setFs]=useState('');
  const[last,setLast]=useState('');
  const[txt1,setText1]=useState();
  const[txt2,setText2]=useState();
  const[key,setKey]=useState();
  const[change,setChange]=useState(false);
  //let refs = Array.from({length: 2}, () => useRef<SlidingUpPanel>(null))
  const popup=(v)=>{

   // setValue(v);
   //alert(this._panel2)
  //alert(slide)
 // alert(slide.current)
 //  slide.current.show();
 this.s1.show();
   //const handler = () => refs[0].current?.show()
  };
  useEffect(()=>{

    const unsubscribe = navigation.addListener('didFocus', () => {
    
      setRow(unique());
      this._panel.hide();
      points=[];
     // alert(points.length)
    // alert('')
      });
  },[navigation]);

  const deleteRoute=(v,k)=>{
    //alert(v+","+pref.current)
    var arr=points.find(r=>r.key==v);
    if(arr){

      fetch(`${global.ip.key}:3000/deleteRoute/`,{
        method:'post',
        headers:{
          Accept: 'application/json',
          'Content-Type':'application/json'},
        body:JSON.stringify({'data':v,'name':k})
      })
      .then(res=>res.json())
      .then(res=>{
     //   alert(res);
          if(res){
     
            points=points.filter(r=>r.key!=v);
            setRow(unique())
            alert('בוצע הסרת מסלול בהצלחה');

       
          //console.log(r);
          //alert(points.length)
        

        //  alert(res.d.length);
          //  setIndex(res.d.length+1);
           // points=[];
        //   alert(index+","+v);
          }
          //alert(res.d.length);
    
      })
      .catch(err=>{});
    
      //alert(points.length);
      // var index=points.findIndex(r=>r.key==v);
      // alert(index)
      // if(index>-1){
      //   points=points.splice(index,1);
      
      //   setRow('ok');
      //   alert(points.length)
      // }
      //alert
      //(arr.key)
      //arr.remove();
    }

  };
  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <View onPress={onPress} style={[styles.item, {backgroundColor}]}>
      <Text style={[{  fontWeight: "bold",width:'100%',textAlign: "right"}, {color: 'blue'}]}>{item.name}</Text>
      <Text style={[{ width:'100%',textAlign: "right",marginTop:6}, {color: textColor}]}>מיקום חנייה:{item.key}</Text>
      
      {/* <Text style={[{  fontWeight: "bold",textAlign: "center"}, {color: textColor}]}>Longitude{item.longitude}</Text> */}
   
   <View style={{flexDirection:'row',alignItems:'center',marginTop:30}}>
   <TouchableOpacity onPress={()=>{
    //if(this._panel2)
    //  this._panel2.show();
   // slide2.current.show();
   this.s2.show();
   //alert(item.key)
   var array=points.find(r=>r.key==item.key);
   //alert(array.name+","+array);
  // alert(array.points[0].latuide)
   if(array!=null){
    park.current=item.key;
    accordions=[];
    var index=1;
    array.points.forEach(element => {
      accordions.push({
        _id:index,
         d:element.d,
        latuide:element.latuide,
        longitude:element.longitude
      })
      index++;
     // alert(element.d)
     // alert(element)
    
//var pp=JSON.parse(element[0]);
      //alert(element);
      //alert(element[0].d)
      // accordions.push({
      //   _id:index,
      //   latuide:element.Object[0],
      //   longitude:element.Object[1]
      // })
     // index=index+1;
    });
   // alert(accordions[1]._id)
   // accordions=array.points;
   setData(accordions);
    setAccordion(unique());
    
   // alert(array.points)
   }
  // slide2.current.show();
   //alert('')
    //setVisible(true);
    //alert('')
 
   }} style={{}}>
     <Image  source={require('./assets/img-16.png')}/>
    
    </TouchableOpacity>
    <TouchableOpacity onPress={
      ()=>{
        Alert.alert("?","רוצה להסיר מסלול?לחץ אישור",[{
          text:'אישור',
          onPress:()=>{
            deleteRoute(item.key,pref.current)
          }
        },{
          text:'בטל'
        }]);
      }
    } 
    
    style={{marginLeft:20}}>
     <Image width={24} height={24} source={require('./assets/img-17.png')}/>
    
    </TouchableOpacity>
   </View>
    </View>
    );
    const renderItem = ({item}) => {
    const backgroundColor = item._id === row ? '#DADADA' : '#95E0FF';
    const color = item._id === row ? 'black' : 'black';
    
    return (
      <Item
        item={item}
        onPress={() => setRow(item.d)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
    };


    const Item2 = ({item, onPress, backgroundColor, textColor}) => (
      <View  style={[styles.item, {backgroundColor}]}>
       
       <View style={{width:'100%',flexDirection:'row',marginHorizontal:10}}>
         
         <Text style={{width:'50%',fontSize:15,textAlign:'center',borderColor:'#111',borderWidth:0,borderRadius:0,height:40}}>
          {
            item.latuide
          }
         </Text>
         {/* <TextInput ref={(t)=>{this.txtLatitude=t}} returnKeyLabel='next' returnKeyType='next' defaultValue={item.latuide} style={{width:'50%',fontSize:22,textAlign:'center',borderColor:'#111',borderWidth:1,borderRadius:10,height:40}}></TextInput> */}
         <Text style={[{  fontWeight: "bold",textAlign: "right",width:'50%',paddingRight:10}, {color: textColor}]}>רוחב:</Text>
       </View>
       <View style={{width:'100%',flexDirection:'row',marginHorizontal:10,marginTop:10}}>
      
      <Text  style={{width:'50%',fontSize:15,textAlign:'center',borderColor:'#111',borderWidth:0,borderRadius:0,height:40}}>{item.longitude}</Text>
       {/* <TextInput ref={(t)=>{this.txtLongitude=t;}} returnKeyLabel="next" returnKeyType="next" defaultValue={item.longitude} style={{width:'50%',fontSize:22,textAlign:'center',borderColor:'#111',borderWidth:1,borderRadius:10,height:40}}></TextInput> */}
        <Text style={[{  fontWeight: "bold",width:'100%',textAlign: "right",width:'50%',paddingRight:10}, {color: textColor}]}>אורך:</Text>
        {/* <Text style={[{  fontWeight: "bold",textAlign: "center"}, {color: textColor}]}>Longitude{item.longitude}</Text> */}
       </View>
       <Button title="עריכת נקודה" onPress={()=>{

    //alert(item._id)
        setKey(item._id);
       // alert(key);
        setFs(item.latuide);
        setLast(item.longitude);
        setText1(item.latuide);
        setText2(item.longitude);
        if(key!=undefined)
        setModal(true);
       }}></Button>
      </View>
      );
      const renderItem2 = ({item}) => {
      const backgroundColor = item._id === accordion ? '#B4F7B7' : '#B4F7B7';
      const color = item._id === accordion ? 'black' : 'black';
      
      return (
        <Item2
          item={item}
          onPress={() => setAccordion(item.d)}
          backgroundColor={backgroundColor}
          textColor={color}
        />
      );
      };


    const unique=()=>{


      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          const r = Math.random() * 16 | 0, 
              v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
      })
     
  }
    const getIndex=(v)=>{
      //alert(v)
   //   alert(v);
      fetch(`${global.ip.key}:3000/getIndex/`,{
          method:'post',
          headers:{
            Accept: 'application/json',
            'Content-Type':'application/json'},
          body:JSON.stringify({'data':v})
        })
        .then(res=>res.json())
        .then(res=>{
       //   alert(res);
            if(res){
              points=res.d;
          //    alert(points.length+","+v);
              var r=unique();
            setRow(r);

         
            //console.log(r);
            //alert(points.length)
          

          //  alert(res.d.length);
            //  setIndex(res.d.length+1);
             // points=[];
          //   alert(index+","+v);
            }
            //alert(res.d.length);
      
        })
        .catch(err=>{});
      }
      
    return((<SafeAreaView style={style.container}>
            <Text style={{marginTop:Constants.statusBarHeight,fontSize:26}}>בחר חניון
                
            </Text>
        <Pressable
         onPress={()=>
          {
           // alert(value._getValue());
            setValue('חניון צפון');
            pref.current='חניון צפון';
            points=[];
          //  alert(points.length)
           popup(value);
         //  if(slide2)
         //  alert(slide2.current)
          //  setRow('');
          //  alert(value);
           // getIndex('חניון צפון');
           getIndex(pref.current);
          }        
          
        }
     
         style={[style.Pressable,{marginTop:80}]} android_ripple={{borderless:false}}>
            <Text style={{textAlign:'center',fontSize:16}}>
            חניון צפון
            </Text>
        </Pressable>


        <Pressable 
          onPress={()=>
            {
             // alert('');
             points=[];
          //   alert(points.length)
              setValue('חניון מרכז');
              pref.current='חניון מרכז';
              //setRow('');
              popup(value);
            //  getIndex('חניון מרכז');
            getIndex(pref.current);
            }        
            
          }
        style={[style.Pressable,{marginTop:20}]} android_ripple={{borderless:false}}>
            <Text style={{textAlign:'center',fontSize:16}}>
                חניון מרכז
            </Text>
        </Pressable>


        <Pressable 
          onPress={()=>
            {
              setValue('חניון דרום');
              pref.current='חניון דרום';
              //setRow('');
              points=[];
            //  alert(points.length)
             popup(value);
             // getIndex('חניון דרום');
             getIndex(pref.current);
            }        
            
          }
        style={[style.Pressable,{marginTop:20}]} android_ripple={{borderless:false}}>
            <Text style={{textAlign:'center',fontSize:16}}>
                חניון דרום
            </Text>
        </Pressable>


        <Pressable onPress={()=>{
            navigation.replace('Administrator',{});
        }} style={[style.Pressable,{marginTop:20}]} android_ripple={{borderless:false}}>
            <Text style={{textAlign:'center',fontSize:16}}>
                 מסך ראשי
            </Text>
        </Pressable>
        {/* ref={c => slide.current = c} */}
        <SlidingUpPanel ref={c => this.s1 = c}  animatedValue={new Animated.Value(0)} >
          <View style={[style.containerInside,{zIndex:120}]}>
            
            <Text style={{color:'#111',marginTop:Constants.statusBarHeight,fontSize:22,fontWeight:'bold'}}>
            {
             value
            }
            </Text>

            <Pressable onPress={()=>{

this.s1.hide();

}} style={{position:'absolute',left:10,top:10,width:40,height:40,zIndex:1}}>
      <Image style={{width:40,height:40}} source={require('./assets/img-7.png')} ></Image>
      </Pressable>
            {
              visible && 
             <View style={{
              position:'absolute',
          width:200,
           borderColor:'#ccc',
           borderWidth:0,
               zIndex:10,
              top:  Dimensions.get("screen").height - 120
              }}>
             <Button title='close' zIndex={100}  onPress={() => 
                {
                 // alert((Dimensions.get("screen").height - 40).toString())
                    //this._panel.hide();
                   // setVisible(false);
                  //  slide.current.hide();
                  this.s1.hide();
                   //const handler = () => refs[0].current?.hide()
                }
                
                } />
             </View>
}
            <FlatList 
            data={points}
            renderItem={renderItem}
             keyExtractor={(item)=>item._id}
            extraData={row}
             ListEmptyComponent={()=>{
                return( <View style={{ alignItems: "center" }}>
                <Text style={{ padding: 20,marginTop: 5, fontSize: 15,color:'black'}}>לא נמצא נתונים</Text>
                </View>)
             }}
                
             ItemSeparatorComponent={()=>{
                return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
               }}
            >
                
            </FlatList>
          </View>
          </SlidingUpPanel>

          

  
   <SlidingUpPanel ref={c=>{this.s2=c}}  animatedValue={new Animated.Value(0)}>
  <View style={[style.containerInside,{zIndex:120}]}>
    
    <Text style={{color:'#111',marginTop:Constants.statusBarHeight,fontSize:22,fontWeight:'bold'}}>
    
    עדכן נקודות מסלול חנייה
    
    </Text>

    <Pressable onPress={()=>{

this.s2.hide();

}} style={{position:'absolute',left:10,top:10,width:40,height:40,zIndex:1}}>
      <Image style={{width:40,height:40}} source={require('./assets/img-7.png')} ></Image>
      </Pressable>

   {

    visible &&      <View style={{
      position:'absolute',
  width:200,
   borderColor:'#ccc',
   borderWidth:0,
       zIndex:20,
      top:  Dimensions.get("screen").height - 120
      }}>
    
    <Button title='עדכן  מסלול' zIndex={100}  onPress={() => 
        {

          if(accordions){
            if(accordions.length==0)return;
            Alert.alert("?","רוצה לעדכן מסלול לחץ אישור להמשך",[{

              text:'אישור',
              onPress:()=>{
                 var updateRoute=()=>{

                  fetch(`${global.ip.key}:3000/updateRoute/`,{
                    method:'post',
                    headers:{
                      Accept: 'application/json',
                      'Content-Type':'application/json'},
                    body:JSON.stringify({'data':park.current,'name':pref.current,'points':accordions})
                  })
                  .then(res=>res.json())
                  .then(res=>{
                 //   alert(res);
                      if(res){
                       
                      
                        accordions=res.array;
                        setAccordion(unique());
                        alert('בוצע עדכון מסלול חנייה בהצלחה');
                        // points=res.d;
                    //    alert(points.length+","+v);
                        //var r=unique();
                     // setRow(r);
          
                   
                      //console.log(r);
                      //alert(points.length)
                    
          
                    //  alert(res.d.length);
                      //  setIndex(res.d.length+1);
                       // points=[];
                    //   alert(index+","+v);
                      }
                      //alert(res.d.length);
                
                  })
                  .catch(err=>{});

                //updateRoute
                 };
                 updateRoute();

              }
            },
          {
            text:'בטל'

          }])
          }
        //  alert(accordions.length)
          //alert(accordions[0].latuide+","+accordions[0].longitude);
       //  setVisible(false);
         // alert((Dimensions.get("screen").height - 40).toString())
           // this._panel2.hide();
           //slide2.current.hide();
        //  const handler = () => refs[0].current?.hide()
       // slide2.current.hide();
          // setVisible(false);
    
        }
        
        } />
    
     </View>
 /*
  
 */
   }

<FlatList 

data={ddata}
renderItem={renderItem2}
 keyExtractor={(item)=>item._id}
extraData={accordion}
// data={points}
// renderItem={renderItem}
//  keyExtractor={(item)=>item._id}
// extraData={row}
ListEmptyComponent={()=>{
return( <View style={{ alignItems: "center" }}>
<Text style={{ padding: 20,marginTop: 5, fontSize: 15,color:'blue'}}>לא נמצא נקודות</Text>
</View>)
}}

ItemSeparatorComponent={()=>{
return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
}}
>

</FlatList>
    
<Modal visible={modal} onRequestClose={()=>{
  setModal(false);

}} animationType="slide">
      <Text style={{marginTop:Constants.statusBarHeight
        ,width:'100%'
        ,textAlign:'center',
        fontSize:23,
        fontWeight:'bold'
        }}>
        עדכן נקודה לחנייה
        </Text>
        
<Pressable onPress={()=>{

  setModal(false);

}} style={{position:'absolute',left:10,top:10,width:40,height:40,zIndex:1}}>
        <Image style={{width:40,height:40}} source={require('./assets/img-7.png')} ></Image>
        </Pressable>
      <View style={{flex:1,justifyContent:'center'}}>
        <View style={{width:'100%',alignItems:'center'}}>
          <Text style={{width:'50%',textAlign:'left'}}>Latuide</Text>
          <TextInput defaultValue={txt1} style={{width:'50%',fontSize:22,textAlign:'center',borderColor:'#111',borderWidth:1,borderRadius:10,height:40}} onChangeText={(v)=>{setFs(v)}}></TextInput>
          {/* <TextInput ref={(t1)=>{this.txtLatitude1=t1}} returnKeyLabel='next' returnKeyType='next' onTextInput={(v1)=>{setFs(v1)}}   defaultValue={String(txt1)} style={{width:'50%',fontSize:22,textAlign:'center',borderColor:'#111',borderWidth:1,borderRadius:10,height:40}}></TextInput> */}
        </View>
        <View style={{width:'100%',alignItems:'center',marginTop:10}}>
          <Text style={{width:'50%',textAlign:'left'}}>Longitude</Text>
          <TextInput ref={(t)=>{this.txtLatitude2=t}} returnKeyLabel='next' returnKeyType='next' onChangeText={(v2)=>{setLast(v2)}}   defaultValue={String(txt2)} style={{width:'50%',fontSize:22,textAlign:'center',borderColor:'#111',borderWidth:1,borderRadius:10,height:40}}></TextInput>
        </View>
        <View style={{width:'100%',alignItems:'center',marginTop:10}}>
          <Button title="עדכן מסלול" onPress={()=>{
       //  alert(accordions.length)

if(accordions){
  if(accordions.length==0)return;
  Alert.alert("?","רוצה לעדכן מסלול לחץ אישור להמשך",[{

    text:'אישור',
    onPress:()=>{

    
      var str="";
      setChange(false);
      //alert(accordions.length)
      var newarray=[];
      var updatedata=[];
   var el=   accordions.map(element=>{

       
    
        if(element._id.toString()==key.toString()){
        
          str+="l:"+fs+",long:"+last+"\n";
        //  alert("d")
          updatedata.push({

            _id:element._id,
            latuide:fs.toString(),
            longitude:last.toString(),
            d:element.d
         });
         newarray.push({

          _id:element._id,
          latuide:fs.toString(),
          longitude:last.toString(),
          d:element.d
       });
        //  str+=element._id+","+key;

        //  element._id=key;
         // element.latuide=fs.toString();
        //  element.longitude=last.toString();
       //   alert(element._id+","+key);
      // alert(key+"\n"+element._id)
        //  element.latuide=first;
         //element.longitude=last;
        // element.d=element.d;
        
          setChange(true);
        //  return element;
        }
        else{
    
          str+="l:"+element.latuide+",long:"+element.longitude+"\n";
          //  alert('')
          newarray.push({

            _id:element._id,
            latuide:element.latuide,
            longitude:element.longitude,
            d:element.d
         });
        }
       // return element;
      });

      //alert(str)
     // alert(updatedata.length)
     setData(newarray);
     // alert(newarray[0].latuide)
      //alert(JSON.parse(accordions[0].latuide))
    //  setData(el)
   // alert(str+",:key="+key+",change="+change+",first="+fs+",last="+last+",len="+el.length)
  //setData(el);
      if(change==false){

      //  alert('לא נמצא שינוי לעדכון');
        return;
      }
//       newpoints=[];
//       accordions.map(element=>{

//         newpoints.push({
// latuide:element.latuide,
// longitude:element.longitude,
//       d:element.d
//         });
//       });
    //  alert(newpoints.length+","+newpoints[0].latuide)
       var updateRoute=()=>{

        fetch(`${global.ip.key}:3000/updateRoute/`,{
          method:'post',
          headers:{
            Accept: 'application/json',
            'Content-Type':'application/json'},
          body:JSON.stringify({'data':park.current,'name':pref.current,'route':newarray})
        })
        .then(res=>res.json())
        .then(res=>{
       //   alert(res);
            if(res){
             
            
             // accordions=res.array;
             // setAccordion(unique());
              
              alert('בוצע עדכון מסלול חנייה בהצלחה');
              getIndex(pref.current);
             // setModal(false);
              // points=res.d;
          //    alert(points.length+","+v);
              //var r=unique();
           // setRow(r);

         
            //console.log(r);
            //alert(points.length)
          

          //  alert(res.d.length);
            //  setIndex(res.d.length+1);
             // points=[];
          //   alert(index+","+v);
            }
            //alert(res.d.length);
      
        })
        .catch(err=>{});

      //updateRoute
       };
     updateRoute();

    }
  },
{
  text:'בטל'

}])
}

          }}></Button>
          </View>
      </View>
      </Modal>
    {/* */}
  </View>
  </SlidingUpPanel>

  
    </SafeAreaView>))

};

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#CDF3FE',
        alignItems:'center'
    },
    containerInside:{
      flex:1,
      backgroundColor:'white',
      alignItems:'center'
  },
    Pressable:{
        width:200,
        height:40,
       paddingTop:6,
        backgroundColor:'#65BBEF',
        textAlign:'center',
        lineHeight:30,
        fontFamily:'Cailbri',
        alignItems:'center',
        borderRadius:49,
        fontSize:22
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
export default Reportroute;
