import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import { Audio } from "expo-av";
import { SvgXml } from 'react-native-svg';

const xml = `<svg stroke="currentColor" fill="#fff" stroke-width="0" viewBox="0 0 24 24" class="toggle" height="20em" width="20em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M9 12c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path><path d="M8 10V8H5.09C6.47 5.61 9.05 4 12 4c3.72 0 6.85 2.56 7.74 6h2.06c-.93-4.56-4.96-8-9.8-8-3.27 0-6.18 1.58-8 4.01V4H2v6h6zM16 14v2h2.91c-1.38 2.39-3.96 4-6.91 4-3.72 0-6.85-2.56-7.74-6H2.2c.93 4.56 4.96 8 9.8 8 3.27 0 6.18-1.58 8-4.01V20h2v-6h-6z"></path></svg>`;
const alphabetSounds = {
    a: require("../assets/audio/A.m4a"),
    b: require("../assets/audio/B.m4a"),
    c: require("../assets/audio/C.m4a"),
    d: require("../assets/audio/A.m4a"),
    e: require("../assets/audio/B.m4a"),
    f: require("../assets/audio/C.m4a"),
    g: require("../assets/audio/A.m4a"),
    h: require("../assets/audio/B.m4a"),
    i: require("../assets/audio/C.m4a"),
    j: require("../assets/audio/A.m4a"),
    k: require("../assets/audio/B.m4a"),
    l: require("../assets/audio/C.m4a"),
    m: require("../assets/audio/A.m4a"),
    n: require("../assets/audio/B.m4a"),
    o: require("../assets/audio/C.m4a"),
    p: require("../assets/audio/A.m4a"),
    q: require("../assets/audio/B.m4a"),
    r: require("../assets/audio/C.m4a"),
    s: require("../assets/audio/A.m4a"),
    t: require("../assets/audio/B.m4a"),
    u: require("../assets/audio/C.m4a"),
    v: require("../assets/audio/A.m4a"),
    w: require("../assets/audio/B.m4a"),
    x: require("../assets/audio/C.m4a"),
    y: require("../assets/audio/A.m4a"),
    z: require("../assets/audio/B.m4a"),
};

const alphabetImages = {
  a: require("../assets/images/quizimages/pairs/ant.png"),
  b: require("../assets/images/quizimages/pairs/bell.png"),
  c: require("../assets/images/quizimages/pairs/cat.png"),
  d: require("../assets/images/quizimages/pairs/dog.png"),
  e: require("../assets/images/quizimages/pairs/egg.png"),
  f: require("../assets/images/quizimages/pairs/frog.png"),
  g: require("../assets/images/quizimages/pairs/guitar.png"),
  h: require("../assets/images/quizimages/pairs/hat.png"),
  i: require("../assets/images/quizimages/pairs/igloo.png"),
  j: require("../assets/images/quizimages/pairs/jam.png"),
  k: require("../assets/images/quizimages/pairs/king.png"),
  l: require("../assets/images/quizimages/pairs/leaf.png"),
  m: require("../assets/images/quizimages/pairs/muffin.png"),
  n: require("../assets/images/quizimages/pairs/net.png"),
  o: require("../assets/images/quizimages/pairs/octopus.png"),
  p: require("../assets/images/quizimages/pairs/penguin.png"),
  q: require("../assets/images/quizimages/pairs/queen.png"),
  r: require("../assets/images/quizimages/pairs/rat.png"),
  s: require("../assets/images/quizimages/pairs/sun.png"),
  t: require("../assets/images/quizimages/pairs/tap.png"),
  u: require("../assets/images/quizimages/pairs/umbrella.png"),
  v: require("../assets/images/quizimages/pairs/van.png"),
  w: require("../assets/images/quizimages/pairs/watch.png"),
  x: require("../assets/images/quizimages/pairs/x-ray.png"),
  y: require("../assets/images/quizimages/pairs/yacht.png"),
  z: require("../assets/images/quizimages/pairs/zebra.png"),


  // Add more letters and their corresponding image files here
};
const alphabetColors = {
    a: "#f878b5", // pink
    b: "#0671d5", // blue
    c: "#11c684", // green
    d: "#6cdfef",
    e: "#f7bf31",
    f: "#6b74e0", //purple
    g: "#f7bf31", //yellow
    h: "#0671d5",
    i: "#f878b5",
    j: "#6cdfef", //lightblue
    k: "#11c684",
    l: "#f878b5",
    m: "#6b74e0",
    n: "#0671d5",
    o: "#6cdfef",
    p: "#f7bf31",
    q: "#f878b5",
    r: "#11c684",
    s: "#0671d5",
    t: "#6b74e0",
    u: "#6cdfef",
    v: "#f7bf31",
    w: "#f878b5",
    x: "#11c684",
    y: "#0671d5",
    z: "#6b74e0",
  };

  export default function App() {
    const [sound, setSound] = useState(null);
    const [toggle, setToggle] = useState(false);
  
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
  
    const toggleDisplay = () => {
      setToggle(!toggle);
    };
  
    return (
      <View style={styles.container}>
              <ImageBackground source={require('../assets/images/blob3.png')} resizeMode="contain"   style={styles.bgimage}>

        <TouchableOpacity style={styles.toggleButton} onPress={toggleDisplay}>
          {/* <Text style={styles.toggleButtonText}>
            {toggle ? "Show Letters" : "Show Images"}
          </Text> */}
                            <SvgXml xml={xml} style={styles.svg}/>

        </TouchableOpacity>
        <View style={styles.grid}>
          {Object.keys(alphabetSounds).map((letter) => (
            <TouchableOpacity
              key={letter}
              style={[
                styles.letterButton,
                { backgroundColor: alphabetColors[letter] },
              ]}
              onPress={() => playSound(letter)}
              onLongPress={stopSound}
            >
              {toggle ? (
                   <Image
                   source={alphabetImages[letter]}
                   style={styles.letterImage}
                 />
               
              ) : (
                <Text style={styles.letterText}>{letter}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
        </ImageBackground>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#1f354b",
    },
    bgimage: {
        flex: 1,
        justifyContent: 'center',
      },
    toggleButton: {
      position: "absolute",
      top: 20,
      right: 20,
      padding: 6,
      backgroundColor: "#32746d",
      borderRadius: 8,
    },
    toggleButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    grid: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 10,
      paddingBottom: 2,
      width: 300,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30
    },
    letterButton: {
      width: "20%",
      padding: 6,
      margin: 0,
      borderRadius: 16,
      aspectRatio: 1 / 1,
      display: "flex",
      backgroundColor: "#11c684",
      justifyContent: "center",
      alignItems: "center",
    },
    letterText: {
      fontSize: 30,
      fontWeight: "bold",
    },
    letterImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
    },
  });
  