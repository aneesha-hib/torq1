import 'react-native-gesture-handler';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Home from './Home.js'
import Header from './Header.js'
import Login from './Login.js';
import PostAdd from './postAdd.js';
import LoginMain from './LoginMain.js'
import PostaddVan from './PostaddVan.js'
import Example from './Example.js'
import * as React from 'react';
import Signin from './Signin';
import Signup from './Signup';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="header" component={Header} />
      <Stack.Screen name="postAdd" component={PostAdd} />
      <Stack.Screen name="LoginMain" component={LoginMain} />
      <Stack.Screen name="PostaddVan" component={PostaddVan} />
      <Stack.Screen name="Example" component={Example} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'auto',
    backgroundColor: '#fff',
    justifyContent: 'center',
 
  },
});


