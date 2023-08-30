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

const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
   
      <View style={[styles.confirmationCar, {color: textColor,flexDirection:'row'}]}>
      
      <Text style={{marginLeft:5}} >{new Date(item.Date).toISOString().slice(0,10)}</Text>
      </View>
      <View style={[styles.confirmationCar, {color: textColor,flexDirection:'row'}]}>
      
      <Text style={{marginLeft:5}} >{item.TimePaking}</Text>
      </View>

      <View style={[styles.confirmationCar, {color: textColor,flexDirection:'row'}]}>
      
      <Text style={{marginLeft:5}} >{item.TimeEnd}</Text>
      </View>

      <View style={[styles.confirmationCar, {color: textColor,flexDirection:'row'}]}>
      
      <Text style={{marginLeft:5,color:'#F1543B',fontWeight:'bold'}} >{`\u20AA`+item.Price}</Text>
      </View>
    </TouchableOpacity>
  );
const Reportdriver=({navigation,route})=>{


    const [value, setValue] = useState(new Date().toISOString().split('T')[0].toString());
    const [dt,setDt]=useState(new Date());
    const[open,setOpen]=useState(false);
    const [selectedId, setSelectedId] = useState();
    const[bool,setBool]=useState(false);
    const [driver,setDriver]=useState(false);
    const [idDriver,setIdDriver]=useState("");
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
    if(idDriver==''){

        alert('id is empty');
        return;
    }
    setSelectedId('');
    setDriver(false);

    var dx={
        data:value,
        id:idDriver
    }
  //alert(dx.id)
 fetch(`${global.ip.key}:3000/reportbyid/`,{
    method:'post',
    headers:{
      Accept: 'application/json',
      'Content-Type':'application/json'},
    body:JSON.stringify(dx)
  })
  .then(res=>res.json())
  .then(res=>{
    //alert(res.data)
    if(res.data && res.data.length>0){
        setDriver(true);
      //  alert(res.data.length)
        res.data.forEach(item=>{
            setSelectedId(item.Name);
            arr.push({
                _id:item._id,
                Name:item.Name,
                Vehicle:item.Vehicle,
                Phone:item.Phone,
                Paking:item.Paking,
                Date:item.DatePaking,
                TimePaking:item.TimePaking,
                Price:item.Price,
                TimeEnd:item.TimePakingEnd
            });
        })

    }
    else{
        alert('No Data');
    }
 
  })
  .catch(err=>{});
 
  };
 
  if(bool==false){
//     setBool(true);
//   addItem();
  }
    return(


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
  
  <Pressable onPress={()=>{navigation.navigate('Admin',{})}} style={{position:'absolute',left:10,top:10,width:40,height:40,zIndex:1}}>
          <Image style={{width:40,height:40}} source={require('./assets/img-7.png')} ></Image>
          </Pressable>
      <Text style={{color:'#111',fontSize:22,marginTop:80}}>
     Search Report Driver
      </Text>

      <TextInput  style={{
         color:'#111',
         backgroundColor:'#fff',
         textAlign:'left',
         paddingLeft:14,
         marginTop:10,
         borderRadius:10,
         height:40,
         width:200,
         borderWidth:1
    }}  keyboardType="default" onChangeText={(t)=>setIdDriver(t)}
            ref={(t)=>{this.txtDate=t;}}></TextInput>

<Pressable onPress={()=>{addItem();}}  android_ripple={{borderless:false}} style={{backgroundColor:'#6EB7E1',alignItems:'center',justifyContent:'center',borderRadius:4,marginTop:10,width:100,height:30}}>
                          <Text style={{color:'white',textAlign:'center'}}>
                              Search
                          </Text>
                         </Pressable>
   
   {
    driver && 
        <FlatList style={{flex:1}}
        data={arr}
       
         renderItem={renderItem}

        keyExtractor={(item)=>item._id}
        extraData={selectedId}
        ItemSeparatorComponent={()=>{
         return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
        }}
        // ListEmptyComponent={()=>{

        // return( <View style={{ alignItems: "center" }}>
        // <Text style={{ padding: 20,marginTop: 5, fontSize: 15,color:'red'}}>No data found</Text>
        // </View>)
        // }}

       //  ListHeaderComponent={() => (
       //   <Text style={{ fontSize: 20, textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline' }}>
       //     List Result
       //   </Text>
       // )}

       // ListFooterComponent={() => (
       //   <Text style={{ fontSize: 20, textAlign: "center",marginBottom:20,fontWeight:'bold' ,display:'none'}}>End Of List</Text>
       // )}
        >
              
        </FlatList>
    
   }
                          
         
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      backgroundColor:'#FAF5D7',
      // marginTop: StatusBar.currentHeight || 0,
    },
        item: {
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
  
export default Reportdriver;