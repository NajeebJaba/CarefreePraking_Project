import  React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView,SafeAreaView,FlatList,TextInput } from 'react-native';

const Scroll=()=>{

  
  const[visible,setVisible]=useState(false);
    const persons = [
        {
          id: "1",
          name: "Earnest Green",
        },
        {
          id: "2",
          name: "Winston Orn",
        },
        {
          id: "3",
          name: "Carlton Collins",
        },
        {
          id: "4",
          name: "Malcolm Labadie",
        },
        {
          id: "5",
          name: "Michelle Dare",
        },
        {
          id: "6",
          name: "Carlton Zieme",
        },
        {
          id: "7",
          name: "Jessie Dickinson",
        },
        {
          id: "8",
          name: "Julian Gulgowski",
        },
        {
          id: "9",
          name: "Ellen Veum",
        },
        {
          id: "10",
          name: "Lorena Rice",
        },
      
        {
          id: "11",
          name: "Carlton Zieme",
        },
        {
          id: "12",
          name: "Jessie Dickinson",
        },
        {
          id: "13",
          name: "Julian Gulgowski",
        },
        {
          id: "14",
          name: "Ellen Veum",
        },
        {
          id: "15",
          name: "Lorena Rice",
        },
      ];


      const myItemSeparator = () => {
        return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
        };
      
      const myListEmpty = () => {
        return (
          <View style={{ alignItems: "center" }}>
          <Text style={styles.item}>No data found</Text>
          </View>
        );
      };
      return (
        // <View style={styles.container}>
     
        // </View>

        <SafeAreaView style={styles.container}>
         
          <ScrollView>
            <View style={{flex:1,width:'90%',alignSelf:'center'}}>
              {persons.map((person) => {
                return (
                   <View  key={person.id}>
                    <TextInput style={{ height:60,borderWidth:1,marginTop:10,borderColor:'#111'}}></TextInput>
                    {/* <Text  ref={(r)=>{this.label=r}} key={person.id} style={styles.item} onPress={()=>{alert(person.name)}}>{person.name}</Text> */}
                   </View>
                );
              })}
            </View>
          </ScrollView>
          
     {
      visible &&   <FlatList
      data={persons}
      renderItem={({ item }) => <Text onPress={()=>{alert(item.name)}} style={styles.item}>{item.name}</Text>}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={myItemSeparator}
      ListEmptyComponent={myListEmpty}
      ListHeaderComponent={() => (
        <Text style={{ fontSize: 30, textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline' }}>
          List of Data Parking
        </Text>
      )}
      ListFooterComponent={() => (
        <Text style={{ fontSize: 30, textAlign: "center",marginBottom:20,fontWeight:'bold' }}>List Row: {persons.length}</Text>
      )}
    />
     }
  </SafeAreaView>
      );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    fontSize: 30,
  },
  item: {
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },
});
// const styles = StyleSheet.create({
//   container: {
//     padding: 50,
//     flex: 1,
//   },
//   item: {
//     padding: 20,
//     fontSize: 15,
//     marginTop: 5,
//   }
// });
export default Scroll