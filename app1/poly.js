import React from "react";
import { useState,useRef,useEffect } from "react";
import { View,StyleSheet,Button,Text,TextInput } from "react-native";
import MapView, {Polyline,PROVIDER_GOOGLE} from 'react-native-maps'
import global from "./global";
var regions=[

  {
    latitude: 32.090358,
    longitude: 34.803521,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  },
  {
    latitude: 32.090441,
    longitude:34.803275,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  },
  
  {
    latitude: 32.090619,   
    longitude:34.803142,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  },
  {
    latitude:32.090605,
    longitude:34.803064,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  }
  ,
{
  latitude:32.090636,
  longitude:34.803034,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
}
];
var _arr=[];
export default function Poly({navigation,route}) {

//  alert(route.params.key.id);
  var id=route.params.key.id;
  const[index,setIndex]=useState(0);
  const mapRef = useRef(null);
 const[read,setRead]=useState(false);
 const[draw,setDraw]=useState(false);
// const[regions=[],setRegions]=useState();
  const [region, setRegion] = useState({latitude:0,longitude:0});


  useEffect(()=>{

    navigation.addListener("didFocus",()=>{
      setRead(false); 
    })
  },[navigation]);
  const getRegions=()=>{

    fetch(`${global.ip.key}:3000/getRoutePacking/`,{
      method:'post',
      headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'},
      body:JSON.stringify({'id':id})
    })
    .then(res=>res.json())
    .then(res=>{
   setDraw(false);
  // alert(res.data);
 // alert(res.message)
      if(res.message.toString()=='no data'){

      // alert('')
        regions=[];
        setDraw(false);
        mapRef.clear();

    
        
     // alert(regions.length)
     
      //  mapRef.current.animateToRegion({},3000);
      }
      else{
       //alert('')
     setIndex(0);
     regions=[];

     res.data.forEach(element => {
      
      regions.push({
        latitude:parseFloat(element.latuide),
        longitude:parseFloat(element.longitude)
      });

         
      _arr.push({
        latitude:parseFloat(element.latuide),
        longitude:parseFloat(element.longitude)
      });
     });


     //alert(regions.length)
  //   alert(typeof(__regions[0].latitude))
   //  alert(regions.length)
      // regions=res.data;
      //alert(res.data.length)
      //setRegions(res.data);
     // alert(regions)
      // alert(regions[0].latuide+","+regions[0].longitude)
      // alert(regions.length)
  // alert(regions[0].latuide)
     // alert(regions[0].latuide+","+regions[0].longitude)
     setRegion({
      latitude: regions[index].latitude,
      longitude: regions[index].longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    })

    //alert(region.latitude+","+region.longitude)
   // alert(region)
       setDraw(true)
     //   mapRef.current.animateToRegion(region, 3 * 1000);
      //  alert(region.latitude)
       // alert(regions.length)
      }
     //alert(res.message)
  
    })
    .catch(err=>{});
  };
  if(read==false){
    setRead(true);
  getRegions();
  }
  
  // var  Next = {
  //   latitude: regions[index].latitude,
  //   longitude:  regions[index].longitude,
  //   latitudeDelta: 0.01,
  //   longitudeDelta: 0.01,
  // };
  const nextPoint = () => {
    //complete this animation in 3 seconds
    if(index+1<_arr.length){
      //alert(_arr.length)
    // regions=[];
    // _arr.forEach(element=>{
    //   regions.push(element)
    // });
     var Next={};
     // alert(index)
      Next={
        latitude: _arr[index+1].latitude,
        longitude: _arr[index+1].longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
      setRegion({
        latitude: _arr[index+1].latitude,
        longitude: _arr[index+1].longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      })

      setIndex(index+1);
    mapRef.current.animateToRegion(Next, 3 * 1000);
    }
  };

  return (

    <View style={styles.container}>
  {
    regions && draw &&   
     <MapView
     provider={PROVIDER_GOOGLE}
     showsPointsOfInterest={false}
     showsUserLocation={true}
     showsMyLocationButton={true}
     followsUserLocation={true}
    minZoomLevel={20}
    zoomEnabled={true}
     ref={mapRef}
     style={styles.map}

     initialRegion={{
       latitude:  regions[index].latitude,
       longitude: regions[index].longitude,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421,
     }}
     onRegionChangeComplete={(region) => setRegion(region)}
   >
    {
     draw && 
     <Polyline
     coordinates={ regions
       
      //[

   
     //   {
     //     latitude: 32.090358,
     //     longitude: 34.803521,
    
     //   },
     //   {
     //     latitude: 32.090441,
     //     longitude:34.803275,

     //   },
       
     //   {
     //     latitude: 32.090619,   
     //     longitude:34.803142,
       
     //   },
     //   {
     //     latitude:32.090605,
     //     longitude:34.803064,
      
     //   }
     //   ,
     // {
     //   latitude:32.090605,
     //   longitude:34.803064,

     // }

     // ]
   } //specify our coordinates
     strokeColor={"#DA341A"}
     strokeWidth={3}
     lineDashPattern={[3]}
   />
    }
   </MapView>
  }

{
    region &&   draw &&   <Button onPress={() => nextPoint()} title="Go Next" />
    }
      {
       region &&  draw &&
        <Text style={styles.text}>Current latitude{region.latitude}</Text>
      }
      {
       region &&  draw &&
        <Text style={styles.text}>Current longitude{region.longitude}</Text>
      }
    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    
     ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
    
  },
  map: {
   ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 20,
    backgroundColor: "lightblue",
  },
});