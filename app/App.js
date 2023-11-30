import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createRootNavigator} from './router';
import Home from './screens/Home';
import Buttons from './screens/Buttons';
import Phase2 from './screens/Phase2';
import AlphaPhonics from './screens/AlphaPhonics';
import Playcard from './screens/Playcard';
import Quiz from './screens/Quiz';
import Games from './screens/Games';
import MatchingPairs from './screens/MatchingPairs';
import SpellingGame from './screens/SpellingGame';
import ReadingGame from './screens/ReadingGame';
import WordGame from './screens/WordGame';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export default function App() { 
    return ( 
      <NavigationContainer> 
        <Stack.Navigator> 
          <Stack.Screen name="Home" component = {Home} options={{ headerShown: false }} /> 
          <Stack.Screen name="Buttons" component = {Buttons} /> 
          <Stack.Screen name="Phase2" component = {Phase2} />
          <Stack.Screen name="AlphaPhonics" component = {AlphaPhonics} />
          <Stack.Screen name="Playcard" component = {Playcard} />
          <Stack.Screen name="Quiz" component = {Quiz} />
          <Stack.Screen name="Games" component = {Games} />
          <Stack.Screen name="MatchingPairs" component={MatchingPairs} options={{ headerTitle: "Matching Pairs" }} />
          {/* options={{ headerShown: false }} */}
          <Stack.Screen name="SpellingGame" component={SpellingGame} options={{ headerTitle: "Spelling Game" }} />
          <Stack.Screen name="ReadingGame" component={ReadingGame} options={{ headerTitle: "Reading Game" }} />
          <Stack.Screen name="WordGame" component={WordGame} options={{ headerTitle: "Word Game" }} />
        </Stack.Navigator> 
      </NavigationContainer> 
    );
  }

// import * as React from 'react';
// import { Text, View, StyleSheet, StatusBar } from 'react-native';
// import { SafeAreaView, SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';


// const CustomStatusBar = (
//   {
//     backgroundColor,
//     barStyle = "light-content",
//     //add more props StatusBar
//   }
// ) => { 
   
//    const insets = useSafeAreaInsets();

//    return (
//      <View style={{ height: insets.top, backgroundColor }}>
//         <StatusBar
//           animated={true}
//           backgroundColor={backgroundColor}
//           barStyle={barStyle} />
//      </View>
//    );
// }


// export default function App() {

//   return (
//     <SafeAreaProvider>
//       <CustomStatusBar backgroundColor="#1f354b" />
//       <View style={{ flex: 1, backgroundColor: '#1f354b' }}>
         
//       </View>
//     </SafeAreaProvider>
//   );

// }
