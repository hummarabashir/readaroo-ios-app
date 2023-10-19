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
<View style={styles.hexagon}>
  <Button  color="#ffffff"

        title="Little 2 Trivia"
        onPress={() => navigation.navigate('Buttons')}
      />
      </View>
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
  btn: {
    borderWidth: 2,
    borderColor: '#f7bf31',
    borderRadius: 5,
  marginTop: 10,
  width: "90%",
  },
  hexagon: {
    backgroundColor: "#f7bf31",
      ClipPath: "polygon(25% 5%,75% 5%,100% 50%,75% 95%,25% 95%,0 50%)",
      color: "#000",
      fontSize: "1.125rem",
      fontWeight: 600,
      height: "60px",
      textAlign: "center",
      width: "60px"
  }
});

export default Home;
