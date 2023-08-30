import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import global from './global';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  Pressable,
  Image,
  TextInput,
  View

} from 'react-native';

var arr=[];
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.confirmationTitle, {color: textColor}]}>{item.Name}</Text>
    {/* <Text style={[styles.confirmationCar, {color: textColor}]}>{item.Vehicle}</Text> */}
    <View style={[styles.confirmationCar, {color: textColor,flexDirection:'row'}]}>
    <Image style={{width:15,height:15}} source={require('./assets/img-9.png')}></Image>
    <Text style={{marginLeft:5}} >{item.Vehicle}</Text>
    </View>
    <View style={[styles.confirmationCar, {color: textColor,flexDirection:'row'}]}>
    <Image style={{width:15,height:15}} source={require('./assets/img-8.png')}></Image>
    <Text style={{marginLeft:5}} >{item.Phone}</Text>
    </View>
    <View style={[styles.confirmationCar, {color: textColor,flexDirection:'row'}]}>
    
    <Text style={{marginLeft:5}} >{item.Paking}</Text>
    </View>
    <View style={[styles.confirmationCar, {color: textColor,flexDirection:'row'}]}>
    
    <Text style={{marginLeft:5}} >{new Date(item.Date).toISOString().slice(0,10)}</Text>
    </View>
    {/* <View style={[styles.confirmationCar, {color: textColor,flexDirection:'row'}]}>
    
    <Text style={{marginLeft:5}} >{item.Time}</Text>
    </View> */}
    <View style={[styles.confirmationCar, {color: textColor,flexDirection:'row'}]}>
    
    <Text style={{marginLeft:5}} >{`Time Start:${item.Time}`}</Text>
    </View>
    <View style={[styles.confirmationCar, {color: textColor,flexDirection:'row'}]}>
    
    <Text style={{marginLeft:5}} >{`Time End:${item.TimeEnd}`}</Text>
    </View>
  </TouchableOpacity>
);

const Reportparking = ({navigation,route}) => {
    const [value, setValue] = useState(new Date().toISOString().split('T')[0].toString());
    const [dt,setDt]=useState(new Date());
    const[open,setOpen]=useState(false);
    const [selectedId, setSelectedId] = useState();
    const[bool,setBool]=useState(false);

    const renderItem = ({item}) => {
    const backgroundColor = item._id === selectedId ? '#DADADA' : '#95E0FF';
    const color = item._id === selectedId ? 'black' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item._id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  const addItem=()=>{
    arr=[];
    setSelectedId('');
    // setSelectedId("Four Item");
   
   // arr.push({_id:'000694a0f-3da1-471f-bd96-145571e29d72',title:'Four Item'});

   // alert(value)

    fetch(`${global.ip.key}:3000/reportBydate/`,{
        method:'post',
        headers:{
          Accept: 'application/json',
          'Content-Type':'application/json'},
        body:JSON.stringify({'data':value})
      })
      .then(res=>res.json())
      .then(res=>{
        if(res.data){
            res.data.forEach(item=>{
                setSelectedId(item.Name);
                arr.push({_id:item._id,Name:item.Name,Vehicle:item.Vehicle,Phone:item.Phone,Paking:item.Paking,Date:item.DatePaking,Time:item.TimePaking,TimeEnd:item.TimePakingEnd});
            })
            //alert(res.data[0]._id);
          // 
        
           //
         //  alert(selectedId)
          //  arr=res.data;
           // alert(arr);
           // alert(arr.length)
            //alert(arr[0]._id);
            //arr=res.data;
         //  alert(arr.length);
           // alert('ok:'+arr[0].Name);
        }
     //   alert(res.data[0].Name);
       // alert(JSON.parse(res.data));
      })
      .catch(err=>{});
    
    // DATA.push({id:'000694a0f-3da1-471f-bd96-145571e29d72',title:'Four Item'});


    // fetch(`${global.ip.key}:3000/report?q=${JSON.stringify({'date':data})}`)
    // .then(res=>{res.json()})
    // .then(res=>{
    //      alert(res);
    //     if(res)
    //     alert(JSON.parse(res.data));

    // })
    // .catch(err=>{

    //     alert(err);
    // });
  };

  if(bool==false){
    //alert('')
    setBool(true);
    addItem();
  
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* <FlatList  
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
      <Button title='add' onPress={()=>{
   addItem();
      }}></Button> */}

<Pressable onPress={()=>{navigation.replace('Admin',{})}} style={{position:'absolute',left:10,top:10,width:40,height:40,zIndex:1}}>
        <Image style={{width:40,height:40}} source={require('./assets/img-7.png')} ></Image>
        </Pressable>
    <Text style={{color:'#111',fontSize:22,marginTop:20}}>
    Report on parking situation
    </Text>
    <Text style={{color:'black',textAlign:'left', width:200,marginTop:49}}>
                Search
            </Text>
    <TextInput  style={{
         color:'#111',
         backgroundColor:'#fff',
         textAlign:'left',
         paddingLeft:14,
         marginTop:0,
         borderRadius:10,
         height:40,
         width:200,
         borderWidth:1
    }}  keyboardType="default" onSubmitEditing={()=>{Keyboard.dismiss()}}  onFocus={()=>{ this.txtDate.blur();setOpen(true)}}
            ref={(t)=>{this.txtDate=t;}} value={value}></TextInput>
     
     <DatePicker    date={dt}  modal open={open} onCancel={()=>{setOpen(false);this.txtDate.blur();}} onConfirm={(d)=>{
                          
                          setValue(d.toISOString().slice(0,10));
                          setDt(d);
                          setOpen(false);
                          
                          }}></DatePicker>

                           <Pressable onPress={()=>{addItem();}}  android_ripple={{borderless:false}} style={{backgroundColor:'#6EB7E1',alignItems:'center',justifyContent:'center',borderRadius:4,marginTop:10,width:100,height:30}}>
                          <Text style={{color:'white',textAlign:'center'}}>
                              Search
                          </Text>
                         </Pressable>


                        
                         <FlatList style={{flex:1}}
           data={arr}
          
            renderItem={renderItem}
 
           keyExtractor={(item)=>item._id}
           extraData={selectedId}
           ItemSeparatorComponent={()=>{
            return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
           }}
           ListEmptyComponent={()=>{

           return( <View style={{ alignItems: "center" }}>
           <Text style={{ padding: 20,marginTop: 5, fontSize: 15,}}>No data found</Text>
           </View>)
           }}

           ListHeaderComponent={() => (
            <Text style={{ fontSize: 20, textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline' }}>
              List Result
            </Text>
          )}

          ListFooterComponent={() => (
            <Text style={{ fontSize: 20, textAlign: "center",marginBottom:20,fontWeight:'bold' ,display:'none'}}>End Of List</Text>
          )}
           >
                 
           </FlatList>
    </SafeAreaView>
  );
};

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

export default Reportparking;