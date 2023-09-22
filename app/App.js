/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createRootNavigator} from './router';
import Home from './screens/Home';
import Buttons from './screens/Buttons';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()


// export default createRootNavigator();
export default function App() { 
    return ( 
      <NavigationContainer> 
        <Stack.Navigator> 
          <Stack.Screen name="Home" component = {Home} /> 
          <Stack.Screen name="Buttons" component = {Buttons} /> 
        </Stack.Navigator> 
      </NavigationContainer> 
    );
  }
