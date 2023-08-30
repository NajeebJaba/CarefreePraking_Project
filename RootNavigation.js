import 'react-native-gesture-handler';
import React from 'react';
import  Register from './Register';
import 'react-native-gesture-handler';
import Main from './Main';
import Menu from './Menu';
import Profile from './Profile';
import Test from './Test'
import Parking from './Parking'
import Bg from './bg';
import Navigate  from './Navigate';
import Map from './Map'
import Admin from './Admin';
import Price from './Price';
import Report from './Report';
import Message from './Message';
import Myreport from './Myreport';
import Reportdriver from './Reportdriver';
import useTest from './usetstate';
import Create from './create';
import Delete from './delete';
import Update from './update';
import MessageCustom from './messagecustom';
import Poly from './poly';
import Reportparking from './Reportparking';
import Reportroute from './reportroute';
import Pp from './Pickertest';
import Administrator from './Administrator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScrollData from './ScrollData';
const RootNavigation = () => {
 const Stack = createNativeStackNavigator();

 return (
   <NavigationContainer>
    
     <Stack.Navigator  
     


        screenOptions={{headerShown:false}} initialRouteName={Main} >
                  <Stack.Screen name="Main" component={Main} /> 
            <Stack.Screen name="ScrollData" component={ScrollData}></Stack.Screen>
      
          <Stack.Screen name='useTest' component={useTest}/>    
           <Stack.Screen name="Poly" component={Poly} /> 
           <Stack.Screen name='MessageCustom' component={MessageCustom}/>
            <Stack.Screen name='Create' component={Create}/>
            <Stack.Screen name='Delete' component={Delete}/>
            <Stack.Screen name='Update' component={Update}/>
            <Stack.Screen name='Reportroute' component={Reportroute}/>
            <Stack.Screen name='Reportparking' component={Reportparking}/>
           <Stack.Screen name='Pp' component={Pp}/>          
           <Stack.Screen name='Reportdriver' component={Reportdriver}/>
           <Stack.Screen name='Map' component={Map}/> 
            <Stack.Screen name='Report' component={Report}></Stack.Screen>
            <Stack.Screen name='Message' component={Message}></Stack.Screen>
            <Stack.Screen name='Myreport' component={Myreport}></Stack.Screen>
             <Stack.Screen name='Admin' component={Admin}/>
             <Stack.Screen name='Administrator' component={Administrator}/>
             <Stack.Screen name='Price' component={Price}/>
        
       
         <Stack.Screen name="Navigate" component={Navigate}/>
          
          <Stack.Screen name="Parking" component={Parking}/>
          
          <Stack.Screen name="Bg" component={Bg}></Stack.Screen>
          <Stack.Screen name="Menu" component={Menu}/> 
          <Stack.Screen name="Profile" component={Profile}/>     
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Test" component={Test}/>
       

       
     </Stack.Navigator>
   </NavigationContainer>
 );
};
export default RootNavigation