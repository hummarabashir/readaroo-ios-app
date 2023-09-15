/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { SvgXml } from 'react-native-svg';
import Greetings from './screens/greetings';

// import Blob from './assets/images/blob.svg';
// source={ { uri: "https://facebook.github.io/react-native/img/header_logo.png" } }
const xml = `
<svg width="348" height="384" viewBox="0 0 348 384" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M193.176 379.644C152.654 377.186 115.472 363.874 83.2145 339.226C49.2502 313.274 20.7413 281.238 10.1808 239.818C-2.44003 190.319 -6.55844 136.162 20.3722 92.754C50.5348 44.1369 101.577 -7.89928 158.005 1.55049C213.602 10.8612 221.223 87.0191 255.114 132.065C275.93 159.732 304.061 178.837 315.874 211.382C332.965 258.468 365.382 314.075 335.868 354.549C306.288 395.114 243.288 382.683 193.176 379.644Z" fill="#294461"/>
</svg>

`;
export default function App() {
  return (
    <>
     <StatusBar style="light" />
    <View style={styles.container}>
   <SvgXml xml={xml} style={styles.blob}/>
    {/* <ImageBackground source={require('./assets/images/blob.svg')} resizeMode="cover" style={styles.bgimage}> */}
   <View style={styles.row}>
    <View style={styles.logocontainer}>
<Image
                  source={require('./assets/images/bee-logo.png')}
                  style={styles.image}
                />
                </View>
                <View style={styles.logocontainer}>
                <Text style={styles.title}>buzz<Text style={styles.titlespan}>phonics</Text></Text>
                </View>
                </View>
                {/* </ImageBackground> */}
                <Greetings/>
                <View style={styles.box}>
                  <View>
                  <Text>Phase 2</Text>
                  <Text>19 Letters</Text>
                  </View>
                  <View>
                  <Image style={{width:20, height: 20}}
                  source={require('./assets/images/bee-logo.png')}/>
                  </View>

                </View>
    </View>
    </>
  )};
  var styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      backgroundColor: '#1f354b',
      fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
    },
    bgimage:{
      flex: 1,
      justifyContent: 'center',
    },
    blob: {
      marginTop: -150
    },
    image: {
    width: 80,
    height: 80,  
    margin: 5
  },
title: {
  color: '#f7bf31',
  fontWeight: '900',
  fontSize: 30,
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',

},
titlespan: {
  color: '#ffffff',
  fontWeight: '200'
},
row: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: -200

},
logocontainer: {
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
},
box: {
  backgroundColor: '#6b74e0',
  width: 200,
  borderRadius: 16,
  padding: 10,
  color: '#ffffff',
  marginTop: 30,
  flexDirection: 'row',
  flexWrap: 'wrap',
}
});
