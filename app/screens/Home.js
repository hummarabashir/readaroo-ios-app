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
  TouchableOpacity,
  Button,
  ImageBackground
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { SvgXml, ClipPath } from 'react-native-svg';
import Greetings from './screens/greetings';
import { createStackNavigator } from '@react-navigation/native-stack';
import { before } from 'node:test';


const Home = ({navigation}) => (
  <>
  <StatusBar style="light" />
  <View style={styles.container}>
    <ImageBackground source={require('../assets/images/blob.png')} resizeMode="cover" style={styles.bgimage}>
      {/* <Text style={styles.text}>Inside</Text> */}
      <View style={styles.contain}>

      <View style={styles.row}>
    <View style={styles.logocontainer}>
<Image
                  source={require('../assets/images/bee-logo.png')}
                  style={styles.image}
                />
                </View>
                <View style={styles.logocontainer}>
                <Text style={styles.title}>buzz<Text style={styles.titlespan}>phonics</Text></Text>
                </View>
                </View>
                {/* </ImageBackground> */}

                <Greetings/>
                {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Buttons')}>
                    <Text>Let's GO -></Text>
</TouchableOpacity> */}
{/* <View style={styles.hexagon}>
  <Button  color="#ffffff"

        title="Little 2 Trivia"
        onPress={() => navigation.navigate('Buttons')}
      />
      </View> */}
      <TouchableOpacity style={styles.hexagon} onPress={() => navigation.navigate('Buttons')}>
      <View style={styles.hexagonInner}>
        <Text style={styles.hexagonText}>Little 2</Text>
      </View>
      <View style={styles.hexagonBefore}></View>
      <View style={styles.hexagonAfter}></View>
    </TouchableOpacity>

      </View>

    </ImageBackground>
  </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#1f354b',
    fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
  },
  bgimage: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  image: {
    width: 80,
    height: 80,  
    margin: 5
  },
  title: {
    color: '#f7bf31',
    fontWeight: '900',
    fontSize: 33,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  titlespan: {
    color: '#ffffff',
    fontWeight: '200'
  },
  contain: {
    flex: 1,
     flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: -30
  },
  logocontainer: {
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  hexagon: {
    width: 80,
    height: 40,
    backgroundColor: "#f7bf31",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  hexagonInner: {
    width: 80,
    height: 40,
    backgroundColor: "#f7bf31",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  hexagonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  hexagonBefore: {
    position: "absolute",
    top: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 40,
    borderLeftColor: "transparent",
    borderRightWidth: 40,
    borderRightColor: "transparent",
    borderBottomWidth: 25,
    borderBottomColor: "#FFC107",
  },
  hexagonAfter: {
    position: "absolute",
    bottom: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 40,
    borderLeftColor: "transparent",
    borderRightWidth: 40,
    borderRightColor: "transparent",
    borderTopWidth: 25,
    borderTopColor: "#FFC107",
  },
});

export default Home;
