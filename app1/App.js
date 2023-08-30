import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Main from './Main';
import Register from './Register';
import RootNavigation from './RootNavigation';
import Map from './Map'
import Poly from './poly';
export default function App(){
   return (<RootNavigation/>)
  //return (<Poly/>)
}

