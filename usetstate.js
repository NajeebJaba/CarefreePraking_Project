import React from "react";
import { useState,useRef,useEffect } from "react";
import { Text,TextInput,Button,TouchableOpacity,Pressable, View } from "react-native";
import Icons from 'react-native-vector-icons/FontAwesome5'
var datas=[];

const UseTest=()=>{
 const[visible,setVisible]=useState(false);
 const[counter=-1,setCounter]=useState();
 const[len=0,setLen]=useState();
 const[array=[],setArray]=useState(); 
 const[change=1,setChange]=useState();
 const st=useRef(1);

 return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

<Text style={{margin: 10}}>TextInput with icon</Text>
<View  style={{justifyContent:'center'}}>
    <Icons name="user" size={20} style={{position:'absolute',}}></Icons>
<TextInput
        style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
       
        inlineImageLeft="username"
        inlineImagePadding={2}
        underlineColorAndroid="transparent"
      
      />
</View>

{
    visible && <Text style={{fontSize:30}}>{

        st.current
          
            
        
        
        }</Text>
}

{
    visible && 
    <Pressable style={{
        marginTop:30,
        borderColor:'#ccc',
        alignItems:'center',
        backgroundColor:'#13AFE4',
        borderRadius:14,
        justifyContent:'center',
        borderWidth:2,
      
        width:200,
        height:50}} 
        android_ripple={{borderless:false}}
         onPress={()=>{
           var counter=change+1;
           st.current=counter;
           datas.push({counter:counter});
          // alert(datas.length);
         
         // alert(array)
          var len=datas.length-1;
    
          setArray({counter:1});
         // setArray({counter:datas[len].center});
         // setCounter(array[len].counter);
          //alert(array[len].counter)
           setChange(counter);
            
         }}
        >
        <Text style={{  fontSize:22,color:'white'}}>Text</Text>
    </Pressable>

}
{
    visible && <View>

<Button title="Test Button" width={100}></Button>
    </View>
}
 </View>)
}
export default UseTest;