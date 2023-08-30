import React,{useState} from 'react';
import {StyleSheet, View, Dimensions,Text, Button} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'
//import getDirections from 'react-native-google-maps-directions'
import getDirections from 'react-native-google-maps-directions';
const App = () => {
    const [coordinates] = useState([
      {
        latitude: 48.8587741,
        longitude: 2.2068751,
      },
      {
        latitude: 48.8423785,
        longitude:2.2068759,
      },
      ,
      {
        latitude: 48.8323785,
        longitude:2.2068759,
      },
    ]);

   const handleGetDirectionsOrgin = () => {
        const data = {
           source: {
            latitude: -33.8356372,
            longitude: 18.6947617
          },
          destination: {
            latitude: -33.8600024,
            longitude: 18.697459
          },
          params: [
            {
              key: "travelmode",
              value: "driving"        //  "walking"
            },
            {
              key: "dir_action",
              value: "navigate"       // travel 
            }
          ],
          waypoints: [
            {
              latitude: -33.8600025,
              longitude: 18.697452,
            },
            {
              latitude: -33.8600026,
              longitude: 18.697453,
            },
               {
              latitude: -33.8600036,
              longitude: 18.697493,
            },
               {
              latitude: -33.8600046,
              longitude: 18.69743,
            },
    
          ]
        }
    
        getDirections(data)
      }

      handleGetDirections = () => {
        const data = {
           source:
            // {
            // latitude: -33.8356372,
            // longitude: 18.6947617
            // }
               {
              latitude: 32.090358,
              longitude: 34.803521,
            }
            ,
          destination:
          {
            latitude:32.090605,
            longitude:34.803064
          }
          //  {
          //   latitude: -33.8600024,
          //   longitude: 18.697459
          // }
          ,
          params: [
            {
              key: "travelmode",
              value: "driving"        //  "walking"
            },
            {
              key: "dir_action",
              value: "navigate"       // travel 
            }
          ],
          waypoints: [
            // {
            //   latitude: -33.8600025,
            //   longitude: 18.697452,
            // },
            // {
            //   latitude: -33.8600026,
            //   longitude: 18.697453,
            // },
            //    {
            //   latitude: -33.8600036,
            //   longitude: 18.697493,
            // },
            //    {
            //   latitude: -33.8600046,
            //   longitude: 18.69743,
            // },
            {
              latitude: 32.090358,
              longitude: 34.803521,
            },
            {
              latitude: 32.090441,
              longitude:34.803275,
            },
            ,
            {
              latitude: 32.090619,   
              longitude:34.803142,
            },
            {
              latitude:32.090605,
              longitude:34.803064
            }
            ,
          {
            latitude:32.090605,
            longitude:34.803064
          }
          ]
        }
    
        getDirections(data)
      }
    return (
        <View style={styles.container}>
           {/* this.handleGetDirections  */}
        <Button onPress={this.handleGetDirections} title="Get Directions" />
      </View>
    );
  };

const styles=StyleSheet.create({
    container:{
        display:'flex'
    },
    map:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})
  export default App