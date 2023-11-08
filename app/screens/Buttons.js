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
  Pressable,
  Image,
  Alert,
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
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" style={styles.dove} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 167.2v-28.1c-28.2-36.3-47.1-79.3-54.1-125.2-2.1-13.5-19-18.8-27.8-8.3-21.1 24.9-37.7 54.1-48.9 86.5 34.2 38.3 80 64.6 130.8 75.1zM400 64c-44.2 0-80 35.9-80 80.1v59.4C215.6 197.3 127 133 87 41.8c-5.5-12.5-23.2-13.2-29-.9C41.4 76 32 115.2 32 156.6c0 70.8 34.1 136.9 85.1 185.9 13.2 12.7 26.1 23.2 38.9 32.8l-143.9 36C1.4 414-3.4 426.4 2.6 435.7 20 462.6 63 508.2 155.8 512c8 .3 16-2.6 22.1-7.9l65.2-56.1H320c88.4 0 160-71.5 160-159.9V128l32-64H400zm0 96.1c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"></path></svg>
`;
// const Buttons = ({route}) => {
  export default function Buttons({navigation}) {

    return (
    <>
     <StatusBar barStyle= "dark-content" hidden= {false} backgroundColor="#00BCD4" translucent= {true} />
     <SafeAreaView style={styles.container}>
     <ScrollView style={styles.scrollView}>

    <View style={styles.container}>
    <Image
                  source={require('../assets/images/bee-logo.png')}
                  style={styles.image}
                />
                {/* <Pressable style={styles.box}   title="Press me"
        onPress={() => Alert.alert('Phase 2')}> */}
          <Pressable style={styles.box} onPress={() => navigation.navigate('Phase2')}>
                  <View style={{width: "60%"}}>
                  <Text style={styles.heading}>Phase 2</Text>
                  <Text style={styles.phrasetext}>19 Letters</Text>
                  </View>
                  <View style={{width: "40%"}}>
                  <Image style={styles.boxImage} source={require('../assets/images/bird.png')}/>
                  {/* <SvgXml xml={xml} style={styles.svg}/> */}
                  </View>
                </Pressable>
                <Pressable style={styles.box2} onPress={() => navigation.navigate('Phase3')}>
                  <View style={{width: "60%"}}>
                  <Text style={styles.heading}>Phase 3</Text>
                  <Text style={styles.phrasetext}>25 Letters</Text>
                  </View>
                  <View style={{width: "40%"}}>
                  <Image style={styles.boxImage}
                  source={require('../assets/images/leaf.png')}/>
                  </View>
                </Pressable>

                <Pressable style={styles.box3} onPress={() => navigation.navigate('Phase5')}>
                  <View style={{width: "60%"}}>
                  <Text style={styles.heading}>Phase 5</Text>
                  <Text style={styles.phrasetext}>22 Letters</Text>
                  </View>
                  <View style={{width: "40%"}}>
                  <Image style={styles.boxImage}
                  source={require('../assets/images/butterfly.png')}/>
                  </View>
                </Pressable>

                <Pressable style={styles.box4} onPress={() => navigation.navigate('Phase')}>
                  <View style={{width: "60%"}}>
                  <Text style={styles.heading}>Games</Text>
                  <Text style={styles.phrasetext}>Practice your sounds</Text>
                  </View>
                  <View style={{width: "40%"}}>
                  <Image style={styles.boxImage}
                  source={require('../assets/images/flower.png')}/>
                  </View>
                </Pressable>

    </View>
    </ScrollView>
    </SafeAreaView>
    </>
  )
};
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
    image: {
    width: 50,
    height: 50,  
    marginTop: 10,
  },
heading: {
  fontWeight: "bold",
  paddingBottom: 3,
  color: '#ffffff',
  fontSize: 18
 },
phrasetext: {
  color: '#ffffff',
  fontSize: 11,
},
box: {
  backgroundColor: '#6b74e0',
  width: 180,
  borderRadius: 16,
  padding: 20,
  color: '#ffffff',
  marginTop: 30,
  flexDirection: 'row',
  flexWrap: 'wrap',
},
box2: {
  backgroundColor: '#11c684',
  width: 180,
  borderRadius: 16,
  padding: 20,
  color: '#ffffff',
  marginTop: 30,
  flexDirection: 'row',
  flexWrap: 'wrap',
},
box3: {
  backgroundColor: '#0671d5',
  width: 180,
  borderRadius: 16,
  padding: 20,
  color: '#ffffff',
  marginTop: 30,
  flexDirection: 'row',
  flexWrap: 'wrap',
},
box4: {
  backgroundColor: '#f878b5',
  width: 180,
  borderRadius: 16,
  padding: 20,
  color: '#ffffff',
  marginTop: 30,
  flexDirection: 'row',
  flexWrap: 'wrap',
},
boxImage: {
  width: 32,
  height: 32,
  marginLeft: 40,
  marginTop: 20,
},
});
