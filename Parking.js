import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, ImageBackground,Pressable,Image, Keyboard, StyleSheet, Text, TextInput, View, Modal } from 'react-native';
import ComboBox from 'react-native-combobox';
import { FlatList, RefreshControl, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {list} from 'react-native-combobox'
import Select, {SelectItem} from '@redmin_delishaj/react-native-select'
import DatePicker from 'react-native-date-picker';
import { Picker } from '@react-native-picker/picker';
import global from './global';
import Constants from 'expo-constants'
import Icons from 'react-native-vector-icons/FontAwesome5'
const data = [
    { text: 'Parking A', value: 1 },
    { text: 'Parking B', value: 2 },
    { text: 'Parking C', value: 3 },
  ];
  const dataParking=[

       {text:'Latuide=0,LongLatuide=1',value:'Parking A'},
       {text:'Latuide=0,LongLatuide=2',value:'Parking A'},
       {text:'Latuide=1,LongLatuide=1',value:'Parking A'},
       {text:'Latuide=1,LongLatuide=2',value:'Parking A'},

       
       {text:'Latuide=0,LongLatuide=1',value:'Parking B'},
       {text:'Latuide=0,LongLatuide=2',value:'Parking B'},
       {text:'Latuide=1,LongLatuide=1',value:'Parking B'},
       {text:'Latuide=1,LongLatuide=2',value:'Parking B'},

       
       {text:'Latuide=0,LongLatuide=1',value:'Parking C'},
       {text:'Latuide=0,LongLatuide=2',value:'Parking C'},
       {text:'Latuide=1,LongLatuide=1',value:'Parking C'},
       {text:'Latuide=1,LongLatuide=2',value:'Parking C'},

  ];

const arr=()=>{
    
}
var days=[];
var dd;
const Parking=({navigation,route})=>{


// alert(days.length)
//alert(dd);
    
   
    // useEffect(()=>{

    //   setArray([{

    //     "name":'ok',
    //      'value':0
    //   }]);

    //  // alert(array.length)

    //  array.map((v,i)=>{
    //     alert(v.name)
    //  })
    // },[])
   

    const[array,setArray]=useState([]);
    const picker=useRef();
    const picker2=useRef();
    const[selected,setSelected]=useState('1');
    const[selectedLocation,setSelectedLocation]=useState('1');
    const[selectedType,setSelectedType]=useState('סוג חנייה');
    const[open,setOpen]=useState(false);
    const[open2,setOpen2]=useState(false);
    const[date,setDate]=useState(new Date());
    const[vv,setVv]=useState('');
    const[d,setD]=useState('');
    const [value2, setValue2]=useState("06:00")    //new Date().toLocaleTimeString()
    const [value, setValue] = useState(new Date().toISOString().split('T')[0].toString());
    const[read,setRead]=useState(false);
    const[test,setTest]=useState('');
    const[visible,setVisible]=useState(false);
    const[visible2,setVisible2]=useState(false);
    const[builddate,setBuildDate]=useState(false);
    const[datend,setDateEnd]=useState('06:00');
    const[dataa,setDataa]=useState('');
    const[dataend,setDataEnd]=useState('');
    if(builddate==false){

      //alert('')
      setBuildDate(true);
 
      //alert(days[6])
    }
   // d=new Date().toLocaleDateString().slice(0,10);
   // this.txtdate=new Date().toISOString().split('T')[0];

   useEffect(()=>{
  
   var ff= navigation.addListener("didFocus",()=>{

    //alert('')
      days=[];
    });
   // alert(array.length)
    
  //  alert(array.length)

   //setArray([{"name":"ok",value:0}]);

//alert(array.length)
      
 

//const arr="0k,10=ok11";
//alert(arr.split(',')[0].trim());
//alert(selectedLocation)
//setTest("row1");
setTest('row1');
setSelected("חניון צפון")
setSelectedLocation("1");
// setArray([{

//   name:'Latuide=0,Long=1' ,
//   value:'Latuide=0,Long=1',
//   index:0

// },
// {
//  name:'Latuide=0,Long=2' ,
//  value:'Latuide=0,Long=2',
//  index:1



// }])
  
 
   },[navigation]);  
   
   var rr=(rrr)=>{

    alert(rrr);
   }
   const renderProductList = () => {
  
    alert(array.length)
    return array.map((name,value) => {
      return <Picker.Item label={name} value={value} />
    })
  }
  
    const options=[
      "חניון צפון",
      "חניון דרום",
      "חניון מרכז"
        // 'Parking A',
        // 'Parking B',
        // 'Parking C',
        // 'Parking d'
    ];

    var setData=()=>{
     // alert(route.params.key.id)

     try{

        this.txtdriver=route.params.key.NameDriver;
        this.txtid=route.params.key.id;
        this.txtvehicle=route.params.key.vehicle;
        this.txtphone=route.params.key.phone;
        this.txtvisa=route.params.key.visaCard;
     }
     catch(err){

     }
   
    };
    setData();

    const toserver=()=>{

    //  alert(route.params.key.id);

      var data={
        name:route.params.key.NameDriver,
        id:route.params.key.id,
        vehicle:route.params.key.vehicle,
        phone:route.params.key.phone,
        paking:selected,
        date:value,//date.toISOString().slice(0,10),
        TimePaking:value2,
        TimePakingEnd:datend,

        KeyPark:selectedLocation.toString(),
        latuide:"0",//selectedLocation.toString().split(',')[0].split('=')[1],
        longlatuide:"0",//selectedLocation.toString().split(',')[1].split('=')[1]
        Price:global.price,
        finePayment:"0",
        departure:'00:00',
        isLeave:false,
        ParkingType:selectedType,
        days:days 
        //  LocationPointLatuide:

      };
//alert(data.id)
      /*
        {'date':date},
       {'time':{}},
       {'park':park},
       {'location':location}
      */
  
   


       if(selectedType=='שיריון חד פעמי'){


        try{

          //http://10.0.0.3:3000/login/
          // fetch("http://192.168.1.15:3000/login/"
              fetch(`${global.ip.key}:3000/searchpaking/`,{
            method:'post',
            headers:{
              Accept: 'application/json',
              'Content-Type':'application/json'},
            body:JSON.stringify(data)
          })
          .then(res=>res.json())
          .then(res=>{
         
            if(res.data==false){
            finish(data);
          
           
            }
            else{
              alert('חנייה תפוסה');
              days=[];    
            }
                          })
          .catch(err=>{alert(err)});
          
    
        }
    
        catch(err){
          alert(err);
        }

       }
       else{
        finish(data);
       }



    };
 

    const finish=(data)=>{


      var dataRandom={
        'id':data.id,
        'date':value,
        'time':value2,
        'park':selected,
        'location':selectedLocation.toString()
  
  
  
  };

  //alert(value.split('T')[0]);

 // return;
    var addWin=(e)=>{


      
      fetch(`${global.ip.key}:3000/queue/`,{
        method:'post',
        headers:{
          Accept: 'application/json',
          'Content-Type':'application/json'},
        body:JSON.stringify(dataRandom)
      })
      .then(res=>res.json())
      .then(res=>{
            if(res.messsage=='done'||res.messsage=='exists'){
              e(true);
              return;
            }
            alert('קיימת חריג לא מטופל');

      })
      .catch(err=>{alert(err)})
    }

    addWin(ee=>{


    
      var whoWin=(ee)=>{

        fetch(`${global.ip.key}:3000/randomqueue/`,{
          method:'post',
          headers:{
            Accept: 'application/json',
            'Content-Type':'application/json'},
          body:JSON.stringify(dataRandom)
        })
        .then(res=>res.json())
        .then(res=>{
      //    alert(res.status)
                if(res.status){
                 ee(true)
                }
                else{
                 
                  //alert('check')
                 // alert(res);
                // alert(data.id==res.data.id?true:false);
                  ee(data.id==res.data.id?true:false);
                    
                }

        })
        .catch(err=>{alert(err)})
      }

    whoWin((e)=>{

      if(e){

        try{

          //http://10.0.0.3:3000/login/
          // fetch("http://192.168.1.15:3000/login/"
              fetch(`${global.ip.key}:3000/paking/`,{
            method:'post',
            headers:{
              Accept: 'application/json',
              'Content-Type':'application/json'},
            body:JSON.stringify(data)
          })
          .then(res=>res.json())
          .then(res=>{
            // if(res.done==false)
            // {
            //   if(res.message=='has-data'){
  
  
            //     alert('It is not possible to reserve parking twice,user has already');
            //     return;
            //   }
            // }
  
  
            
            
            if(res.done){
            
             
              
       
              alert('בוצה חנייה');
              //alert("An order has been successfully saved for you:)");
             
              //navigation.replace("Menu",{'key':res.user});
            //navigation.navigate("Menu",{'key':res.user});
            }
            else{
  
              alert('קיימת חנייה עבורך באותו יום');
              //alert("There is an invitation for you for this day!!!");
            
            }
          
            days=[];      
                          })
          .catch(err=>{alert(err)});
          
    
        }
    
        catch(err){
          alert(err);
        }

      }
      else{
        alert('החנייה נתפסה על ידי מישהו אחר');
      }
    });


    });

    }
    var sendParking=()=>{
      if(selectedType=='סוג חנייה')
      {
        alert('לא נבחר סוג חנייה');
        return;
      }
      Alert.alert("?","רוצה להמשיך תהליך הזמנת חנייה?לחץ אישור",[

                 {

              text:"אישור",
              onPress:()=>{
    
                toserver();

              }
                 },
                  {text:"בטל"

                  }

      ]);
    };

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
       //   alert(res.d);
        //  points=res.d;
        setArray(res.d);
      //    alert(points.length+","+v);
         // var r=unique();
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
  }
  if(read==false){
    setArray([]);
    setRead(true);
    getIndex('חניון צפון');
  }
   return ( 

    <View style={[styles.container,{alignItems:'center'}]}>

     {/* <ImageBackground  resizeMode={'contain'}  style={{flex:1,alignItems:'center',opacity:1}}  source={require("./assets/img-3.jpg")}>    
     </ImageBackground>  */}
      <Pressable onPress={()=>{
        days=[];
        navigation.navigate("Menu",{'key':route.params.key})}} style={{position:'absolute',left:1,top:40,width:40,height:40,zIndex:1}}>
        <Image style={{width:40,height:40}} source={require('./assets/img-7.png')} ></Image>
        </Pressable>
        <View>
          <View >
            <Icons name='parking' color={'#29A0F2'} size={30} style={{position:'absolute',top:35,left:-40}}></Icons>
          <Text style={styleInput.labelHeader}> הזמן חנייה</Text>
          </View>
    
    </View>
 <ScrollView  style={{ marginHorizontal: 20}}>
           
 <View>
  
<Text style={styleInput.label} onPress={()=>{}}>שם נהג:</Text>
<TextInput ref={drive=>{this.txtdriver=drive;}} value={this.txtdriver}  placeholder='insert Driver' style={styleInput.input} keyboardType='default'></TextInput>

<Text style={[styleInput.label,styleInput.labelmargin]}>תעודת זהות</Text>
<TextInput ref={id=>{this.txtid=id;}}  value={this.txtid} placeholder='insert Id' style={styleInput.input} keyboardType='default'></TextInput>

<Text style={[styleInput.label,styleInput.labelmargin]}>רישיון רכב</Text>
<TextInput ref={vehicle=>{this.txtvehicle=vehicle;}} value={this.txtvehicle}  placeholder='insert Vehicle License' style={styleInput.input} keyboardType='default'></TextInput>

<Text  style={[styleInput.label,styleInput.labelmargin]}>סלולאר</Text>

<TextInput  ref={phone=>{this.txtphone=phone;}}  value={this.txtphone} placeholder='insert Phone' style={styleInput.input} keyboardType='numeric'></TextInput>

{/* <Text style={[styleInput.label,styleInput.labelmargin]}>תאריך</Text> */}



<Text style={[styleInput.label,styleInput.labelmargin]}>חניון</Text>

{/* alert(dt.toISOString().slice(0,10)) */}

{/* 
<ComboBox values={options}  onValueSelect={()=>{setSelected(selected)}}></ComboBox> */}

<View>
<Picker   mode={'dropdown'}   style={{backgroundColor:"#29A0F2",color:'#fff',width:300}} 



selectedValue={selected} onValueChange
={(value,index)=>{


setSelected(value);


var  arrayx=[];
setArray([])
// if(value=="חניון צפון")
// {


//  arrayx.push({

//     name:'Latuide=0,Long=1' ,
//     value:'Latuide=0,Long=1',
//     index:0

//  },
//  {
//    name:'Latuide=0,Long=2' ,
//    value:'Latuide=0,Long=2',
//    index:1
//  });

// }
// else{

// if(value=="חניון דרום")
// {
//  arrayx=[];
//  arrayx.push({

//     name:'Latuide=1,Long=1' ,
//     value:'Latuide=1,Long=1',
//     index:0

//  }
//  ,
//  {
//    name:'Latuide=1,Long=2' ,
//    value:'Latuide=1,Long=2',
//    index:1
//  }
//  ,
//  {
//    name:'Latuide=1,Long=3' ,
//    value:'Latuide=1,Long=3',
//    index:2
//  }
//  );
 

// }

// else{
// if(value=="חניון מרכז")
// {
//  arrayx=[];
//  arrayx.push({

//     name:'Latuide=2,Long=1' ,
//     value:'Latuide=2,Long=1',
//     index:0

//  }
//  ,
//  {
//    name:'Latuide=2,Long=2' ,
//    value:'Latuide=2,Long=2',
//    index:1
//  }
//  ,
//  {
//    name:'Latuide=2,Long=3' ,
//    value:'Latuide=2,Long=3',
//    index:2
//  },
//  {
//    name:'Latuide=2,Long=4' ,
//    value:'Latuide=2,Long=4',
//    index:3
//  }
//  );

// //  alert(arrayx.length)
 
// }
// }

// }


  getIndex(value);
//return()
//setArray(arrayx)

//alert(selected)
}}>

<Picker.Item label={'חניון צפון'} key={1} value={'חניון צפון'}></Picker.Item>
                <Picker.Item label={'חניון דרום'} key={2} value={'חניון דרום'}></Picker.Item>
                <Picker.Item label={'חניון מרכז'} key={3} value={'חניון מרכז'}></Picker.Item>

{/* <Picker.Item label={"Parking A"} value={"Parking A"} key={0}></Picker.Item>
<Picker.Item label={"Parking B"} value={"Parking B"} key={1}></Picker.Item>
<Picker.Item label={"Parking C"} value={"Parking C"} key={2}></Picker.Item> */}
</Picker>
</View>

<Text style={[styleInput.label,styleInput.labelmargin]}>מיקום חנייה</Text>

{/* 
<ComboBox values={options}  onValueSelect={()=>{setSelected(selected)}}></ComboBox> */}


<View >

<Picker mode='dropdown' ref={picker} style={{backgroundColor:"#29A0F2",color:'#fff',width:300}}  selectedValue={selectedLocation} onValueChange={(value,index)=> 
{ 

setSelectedLocation(value);

//   //alert(selectedLocation)
//   try{
// if(selectedLocation)
//   alert(selectedLocation.toString().split(',')[0].split('=')[1]);
//   }
//   catch(err){

//   }

// {renderProductList}

}} >

{

array.map((key)=>{
if(key)
return(<Picker.Item label={key.key} value={key.key} key={key.key} ></Picker.Item>)

//return(<Picker.Item label={key.value} value={key.value} key={key.index} ></Picker.Item>)
})
}
</Picker>

{/* <Select
style={{ elevation: 3,zIndex:3}}
         width={200} 
           data={dataParking}
           onSelect={value => setSelectedLocation(value)}
           value={selectedLocation}
           ></Select> */}
</View>

<Text style={[styleInput.label,styleInput.labelmargin]}> 
סוג חנייה
</Text>
<View>
<Picker  mode='dropdown' 

  //onSubmitEditing={()=>{selectedType('סוג חנייה')}}
  itemStyle={{    fontSize: 15,
    height: 75,
    color: 'black',
    textAlign:'left',
    fontWeight: 'bold'}} ref={picker2} 
    style={{backgroundColor:"#29A0F2",color:'#fff',width:300}} 
     selectedValue={selectedType} 
    onValueChange={(v,index)=> 
{ 


  setSelectedType(v);

switch(v){
  case "שיריון חד פעמי":
    setVisible(true);
    break;
    case "שיריון מחזורי":
      if(days.length==0){
        dd=new Date()
        for(var i=0;i<7;i++){
         var dx=dd.toLocaleDateString();
         days.push({
          date:dx,
          value:'-בחר שעה-',
          valueend:'-בחר שעה-',
          key:i,
          keyend:'x'+i,
          isLeave:false
        });
         dd.setDate(dd.getDate()+1);
        }
      }
     // else alert('')
      setVisible2(true);
      break;
}
  



}} >
   
   <Picker.Item  value={'סוג חנייה'} label={'סוג חנייה'} key={0}></Picker.Item>
<Picker.Item  value={'שיריון חד פעמי'} label={'שיריון חד פעמי'} key={1}></Picker.Item>
<Picker.Item value={'שיריון מחזורי'} label={'שיריון מחזורי'} key={2}></Picker.Item>
</Picker>
<Modal visible={visible} style={{display:1}} onRequestClose={()=>{setVisible(false)}} animationType='slide'>
<Text style={{marginTop:Constants.statusBarHeight
        ,width:'100%'
        ,textAlign:'center',
        fontSize:23,
        fontWeight:'bold'
        }}>
        שיריון חד פעמי
        </Text>
        
<Pressable onPress={()=>{

  setVisible(false);

}} style={{position:'absolute',left:10,top:10,width:40,height:40,zIndex:1}}>
        <Image style={{width:40,height:40}} source={require('./assets/img-7.png')} ></Image>
        </Pressable>

   <View style={{flex:1,alignItems:'center'}}>
    <View style={{marginTop:40}}>
     <Text>תאריך חנייה</Text>   
      <TextInput ref={(da)=>{this.txtdate=da}}   value={String(value)}  
   onSubmitEditing={()=>{this.txtdate.blur();}}  
     onFocus={()=>{setOpen(true)}}
       style={[styleInput.input,{marginTop:6,backgroundColor:'#1991FB',color:'white'}]}></TextInput>
    </View>
    <View style={{marginTop:10}}>
     <Text>שעה חנייה</Text>   

     <Picker mode='dropdown' 
      itemStyle={{    fontSize: 15,
        height: 75,
       
        color: 'black',
        textAlign:'left',
        fontWeight: 'bold'}} ref={picker2} 
        style={{backgroundColor:"#29A0F2",color:'#fff',width:300}} 
     
     selectedValue={value2} onValueChange={(value)=>{
      setValue2(value);
     }}>
      <Picker.Item label={'06:00'} value={'06:00'}></Picker.Item>
      <Picker.Item label={'07:00'} value={'07:00'}></Picker.Item>
      <Picker.Item label={'08:00'} value={'08:00'}></Picker.Item>
      <Picker.Item label={'09:00'} value={'09:00'}></Picker.Item>
      <Picker.Item label={'10:00'} value={'10:00'}></Picker.Item>
      <Picker.Item label={'11:00'} value={'11:00'}></Picker.Item>
      <Picker.Item label={'12:00'} value={'12:00'}></Picker.Item>
      <Picker.Item label={'13:00'} value={'13:00'}></Picker.Item>
      <Picker.Item label={'14:00'} value={'14:00'}></Picker.Item>
      <Picker.Item label={'15:00'} value={'15:00'}></Picker.Item>
      <Picker.Item label={'16:00'} value={'16:00'}></Picker.Item>
      <Picker.Item label={'17:00'} value={'17:00'}></Picker.Item>
      <Picker.Item label={'18:00'} value={'18:00'}></Picker.Item>
      <Picker.Item label={'19:00'} value={'19:00'}></Picker.Item>
      <Picker.Item label={'20:00'} value={'20:00'}></Picker.Item>
     </Picker>
      {/* <TextInput ref={(da1)=>{this.txtdate2=da1}}   value={String(value2)}  
   onSubmitEditing={()=>{this.txtdate2.blur();}}  
     onFocus={()=>{
      
     // alert('');

     setOpen2(true);
     // alert(open2);
    
    
    }}
     
       style={[styleInput.input,{marginTop:6,backgroundColor:'#1991FB',color:'white'}]}></TextInput> */}

    </View>

    <View style={{marginTop:10, borderRadius:12}}>
     <Text>שעה סיום</Text>   
     <Picker mode='dropdown' 
      itemStyle={{    fontSize: 15,
        height: 75,
       
        color: 'black',
        textAlign:'left',
        fontWeight: 'bold'}} ref={picker2} 
        style={{backgroundColor:"#29A0F2",color:'#fff',width:300}} 
     
     selectedValue={datend} onValueChange={(value)=>{
      setDateEnd(value);
     }}>
      <Picker.Item label={'06:00'} value={'06:00'}></Picker.Item>
      <Picker.Item label={'07:00'} value={'07:00'}></Picker.Item>
      <Picker.Item label={'08:00'} value={'08:00'}></Picker.Item>
      <Picker.Item label={'09:00'} value={'09:00'}></Picker.Item>
      <Picker.Item label={'10:00'} value={'10:00'}></Picker.Item>
      <Picker.Item label={'11:00'} value={'11:00'}></Picker.Item>
      <Picker.Item label={'12:00'} value={'12:00'}></Picker.Item>
      <Picker.Item label={'13:00'} value={'13:00'}></Picker.Item>
      <Picker.Item label={'14:00'} value={'14:00'}></Picker.Item>
      <Picker.Item label={'15:00'} value={'15:00'}></Picker.Item>
      <Picker.Item label={'16:00'} value={'16:00'}></Picker.Item>
      <Picker.Item label={'17:00'} value={'17:00'}></Picker.Item>
      <Picker.Item label={'18:00'} value={'18:00'}></Picker.Item>
      <Picker.Item label={'19:00'} value={'19:00'}></Picker.Item>
      <Picker.Item label={'20:00'} value={'20:00'}></Picker.Item>
     </Picker>
     </View>
    <View style={{marginTop:60,width:200}}>
     <Button title='אישור' onPress={()=>{setVisible(false);}}></Button> 
      </View>
<DatePicker  modal open={open} date={date} onCancel={()=>{setOpen(false);this.txtdate.blur();}} 

onConfirm={(dt)=>{setValue(dt.toISOString().slice(0,10)); setDate(dt);setOpen(false);this.txtdate.blur();}}
></DatePicker>


<DatePicker modal mode='time' open={open2} date={date}  onCancel={()=>{setOpen2(false);this.txtdate2.blur();}} 

onConfirm={(dt)=>{
//  setValue2(dt.toLocaleTimeString());
  setOpen2(false);this.txtdate2.blur();}}
></DatePicker>
   </View>

</Modal>

<Modal visible={visible2} style={{display:1}} onRequestClose={()=>{setVisible2(false)}} animationType='slide'>
<Text style={{marginTop:Constants.statusBarHeight
        ,width:'100%'
        ,textAlign:'center',
        fontSize:23,
        fontWeight:'bold'
        }}>
        שיריון מחזורי
        </Text>
        
<Pressable onPress={()=>{

  setVisible2(false);

}} style={{position:'absolute',left:10,top:10,width:40,height:40,zIndex:1}}>
        <Image style={{width:40,height:40}} source={require('./assets/img-7.png')} ></Image>
        </Pressable>
  
  <ScrollView style={{marginTop:20,marginHorizontal:10}} horizontal={false}>
    

    <View style={{flexDirection:'row',justifyContent:'center',borderWidth:0,borderColor:'red',width:'100%',alignItems:'center'}}>
    <View style={{height:10}}></View>

      <Text style={{width:'33.3%',textAlign:'center',marginLeft:10}}>תאריך</Text>
      <Text style={{width:'33.3%',textAlign:'left'}}>שעה כניסה</Text>
      <Text style={{width:'33.3%',textAlign:'left'}}>שעה סיום</Text>
    </View>
    <View style={{height:10}}></View>
    <View style={{width:'100%',marginHorizontal:10,height:2,backgroundColor:'#ccc'}}></View>
    <View style={{height:10}}></View>
    {      // style={[styleInput.input,{marginTop:6,backgroundColor:'#1991FB',color:'white'}]} 
     days.map((element,index)=>{
   
     // alert(index)
  
      return(
      <View key={index}  style={{flexDirection:'row',alignSelf:'center',direction:'rtl',height:60}}>
       
      <Text style={{color:'#111',marginTop:10}}>{element.date}</Text>
       <Picker key={element.key} onValueChange={(value)=>{
        //alert(value+","+index)
          var ii=days.findIndex(day=>day.key==index);
           if(index>-1){
            days[index].value=value;
           // alert(days[0].value+","+days[1].value)
           // data=value;
           setDataa(value);
           }
          
       }} 
       
       selectedValue={element.value}  
       style={[styleInput.input,{width:140,marginLeft:4,backgroundColor:'#1991FB',color:'white'}]} mode='dialog'>
       <Picker.Item label='-בחר שעה-' value={'-בחר שעה-'} key={0}></Picker.Item>
        <Picker.Item label='06:00' value={'06:00'} key={1}></Picker.Item>
        <Picker.Item label='07:00' value={'07:00'} key={2}></Picker.Item>
        <Picker.Item label='08:00' value={'08:00'} key={3}></Picker.Item>
        <Picker.Item label='09:00' value={'09:00'} key={4}></Picker.Item>
        <Picker.Item label='10:00' value={'10:00'} key={5}></Picker.Item>
        <Picker.Item label='11:00' value={'11:00'} key={6}></Picker.Item>
        <Picker.Item label='12:00' value={'12:00'} key={7}></Picker.Item>
        <Picker.Item label='13:00' value={'13:00'} key={8}></Picker.Item>
        <Picker.Item label='14:00' value={'14:00'} key={9}></Picker.Item>
        <Picker.Item label='15:00' value={'15:00'} key={10}></Picker.Item>
        <Picker.Item label='16:00' value={'16:00'} key={11}></Picker.Item>
        <Picker.Item label='17:00' value={'17:00'} key={12}></Picker.Item>
        <Picker.Item label='18:00' value={'18:00'} key={7}></Picker.Item>
        </Picker>
     
        <Picker key={element.keyend} onValueChange={(value)=>{
        //alert(value+","+index)
          var ii=days.findIndex(day=>day.key==index);
           if(index>-1){
            days[index].value=value;
           // alert(days[0].value+","+days[1].value)
           // data=value;
           setDataEnd(value);
           }
          
       }} 
       
       selectedValue={element.valueend}  
       style={[styleInput.input,{width:140,marginLeft:4,backgroundColor:'#1991FB',color:'white'}]} mode='dialog'>
       <Picker.Item label='-בחר שעה-' value={'-בחר שעה-'} key={0}></Picker.Item>
        <Picker.Item label='06:00' value={'06:00'} key={1}></Picker.Item>
        <Picker.Item label='07:00' value={'07:00'} key={2}></Picker.Item>
        <Picker.Item label='08:00' value={'08:00'} key={3}></Picker.Item>
        <Picker.Item label='09:00' value={'09:00'} key={4}></Picker.Item>
        <Picker.Item label='10:00' value={'10:00'} key={5}></Picker.Item>
        <Picker.Item label='11:00' value={'11:00'} key={6}></Picker.Item>
        <Picker.Item label='12:00' value={'12:00'} key={7}></Picker.Item>
        <Picker.Item label='13:00' value={'13:00'} key={8}></Picker.Item>
        <Picker.Item label='14:00' value={'14:00'} key={9}></Picker.Item>
        <Picker.Item label='15:00' value={'15:00'} key={10}></Picker.Item>
        <Picker.Item label='16:00' value={'16:00'} key={11}></Picker.Item>
        <Picker.Item label='17:00' value={'17:00'} key={12}></Picker.Item>
        <Picker.Item label='18:00' value={'18:00'} key={7}></Picker.Item>
        </Picker>

      </View>)
     })
    }
            <View style={{marginTop:60,width:200,alignSelf:'center'}}>

            <Pressable   onPress={()=>{
      setVisible2(false);
  }} android_ripple={{borderless:false}}  
  style={{alignItems:'center',justifyContent:'center',height:55,color:'black',backgroundColor:'#D8E5AA'}}>
    <Text style={{color:'black'}}>אישור</Text>
  </Pressable>
     {/* <Button title='אישור' onPress={()=>{setVisible2(false);}}></Button>  */}
      </View>
  </ScrollView>
</Modal>
</View>


<View style={{width:'100%',height:160,marginTop:20}} >
   {/* <Button title="הזמן חנייה"  onPress={() => {
     sendParking();
  }}></Button> */}
  <Pressable   onPress={()=>{
       sendParking();
  }} android_ripple={{borderless:false}}  style={{alignItems:'center',justifyContent:'center',height:55,color:'white',backgroundColor:'#1991FB'}}>
    <Text style={{color:'white'}}>הזמן חנייה</Text>
  </Pressable>

</View>

   
  

{/* <View style={{flexDirection:'row',alignItems:'flex-end',flex:1,marginBottom:2}}>
<Text style={{fontFamily:'Calibri',fontSize:14,alignItems:'center',color:'#111',zIndex:10}}>
Back to main </Text>
<Text onPress={()=>{navigation.navigate("Menu",{'key':route.params.key})}} style={{textDecorationLine:'underline',color:'#fff'}}>Menu</Text>
</View> */}

 </View>
 
 

</ScrollView >



<StatusBar hidden></StatusBar>

 </View>
      
  //  <View style={styles.container}>
  //   <Picker style={{marginTop:100}}  selectedValue={test} onValueChange={(value,index)=>{setTest(value);
    
  //   rr(value);
  // //alert(value);


  //   }}>
  //     <Picker.Item  label='row1' value={'row1'} key={0}></Picker.Item>
  //     <Picker.Item label='row2' value={'row2'} key={1}></Picker.Item>
  //   </Picker>

  //   <Button title='btn' onPress={()=>{
  //     alert(test);
  //   }}></Button>
  //  </View>
  
  
      )
  
  
  };
  const styles = StyleSheet.create({
    container: {
        flex:1,
  
        
        // padding:StatusBar.currentHeight,
      // height:'100%', 
      // backgroundColor: '#E7A658',
      // alignItems:'center',
      // height:'100%'
     
    },
  });
  
  const styleInput=StyleSheet.create({
   
      button:{
        width:300,
        height:40
        
      },
      labelHeader:{
        textDecorationLine:'underline',
      marginTop:30,
        fontWeight:'bold',
      fontSize:30,
      fontFamily:'Arial',
      color:'black'
      },
      label:{
        
      width:300,
      textAlign:'right',
      fontWeight:'bold',
      color:'#111'
      },
      labelmargin:{
       marginTop:2,
      textAlign:'right'
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
  export default Parking;

  

  