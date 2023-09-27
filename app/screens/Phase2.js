/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
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
  TouchableOpacity
} from 'react-native';
import { Audio } from "expo-av";

const alphabetSounds = {
    A: require("../assets/audio/A.mp3"),
    B: require("../assets/audio/B.m4a"),
    C: require("../assets/audio/C.m4a"),
    // Add more letters and their corresponding sound files here
  };
  export default function App() {
    const [sound, setSound] = useState(null);
  
    const playSound = async (letter) => {
      const { sound } = await Audio.Sound.createAsync(alphabetSounds[letter]);
      setSound(sound);

      await sound.playAsync();
    };
  
    const stopSound = async () => {
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(null);
      }
    };
  
    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>Kids Alphabet Listening</Text> */}
        <View style={styles.grid}>
          {Object.keys(alphabetSounds).map((letter) => (
            <TouchableOpacity
              key={letter}
              style={styles.letterButton}
              onPress={() => playSound(letter)}
              onLongPress={stopSound}
            >
              <Text style={styles.letterText}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#1f354b',
        fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
      },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    letterButton: {
      width: 80,
      height: 80,
      margin: 10,
      borderRadius: 40,
      backgroundColor: "#f2f2f2",
      justifyContent: "center",
      alignItems: "center",
    },
    letterText: {
      fontSize: 32,
      fontWeight: "bold",
    },
  });
  
