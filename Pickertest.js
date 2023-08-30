import React from "react";
import { Picker } from '@react-native-picker/picker';
import { View } from "react-native";
import { StyleSheet } from "react-native";
const Pp=()=>{
  
    return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
           <Picker
        style={styles.picker}
        mode="dropdown"
        itemStyle={styles.itemStyle}>
            <Picker.Item label="1 Hr" value="1" />
            <Picker.Item label="4 Hrs" value="4" />
            <Picker.Item label="8 Hrs" value="8" />
            <Picker.Item label="16 Hrs" value="16" />
            <Picker.Item label="24 Hrs" value="24" />
    </Picker>
    </View>)
};
const styles=StyleSheet.create({
    itemStyle: {
        fontSize: 15,
        height: 75,
        color: 'black',
        textAlign: 'right',
        fontWeight: 'bold'
      },
    picker: {
        backgroundColor:'#ccc',
        width: 200
      },
})
export default Pp;