import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { Audio } from "expo-av";

const alphabetSounds = {
  s: require("../assets/audio/A.m4a"),
  a: require("../assets/audio/B.m4a"),
  t: require("../assets/audio/C.m4a"),
  p: require("../assets/audio/A.m4a"),
  i: require("../assets/audio/B.m4a"),
  n: require("../assets/audio/C.m4a"),
  m: require("../assets/audio/A.m4a"),
  d: require("../assets/audio/B.m4a"),
  g: require("../assets/audio/C.m4a"),
  o: require("../assets/audio/A.m4a"),
  c: require("../assets/audio/B.m4a"),
  k: require("../assets/audio/C.m4a"),
  ck: require("../assets/audio/A.m4a"),
  e: require("../assets/audio/B.m4a"),
  u: require("../assets/audio/C.m4a"),
  r: require("../assets/audio/A.m4a"),
  h: require("../assets/audio/B.m4a"),
  b: require("../assets/audio/C.m4a"),
  f: require("../assets/audio/A.m4a"),
  ff: require("../assets/audio/B.m4a"),
  l: require("../assets/audio/C.m4a"),
  ll: require("../assets/audio/A.m4a"),
  ss: require("../assets/audio/B.m4a"),
  z: require("../assets/audio/C.m4a"),
  ee: require("../assets/audio/A.m4a"),
  ow: require("../assets/audio/B.m4a"),
  // Add more letters and their corresponding sound files here
};

const alphabetColors = {
  s: "#f878b5", // pink
  a: "#0671d5", // blue
  t: "#11c684", // green
  p: "#6cdfef",
  i: "#f7bf31",
  n: "#6b74e0", //purple
  m: "#f7bf31", //yellow
  d: "#0671d5",
  g: "#f878b5",
  o: "#6cdfef", //lightblue
  c: "#11c684",
  k: "#f878b5",
  ck: "#6b74e0",
  e: "#0671d5",
  u: "#6cdfef",
  r: "#f7bf31",
  h: "#f878b5",
  b: "#11c684",
  f: "#0671d5",
  ff: "#6b74e0",
  l: "#6cdfef",
  ll: "#f7bf31",
  ss: "#f878b5",
  z: "#11c684",
  ee: "#0671d5",
  ow: "#6b74e0",


  // Add more letters and their corresponding colors here
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
  var getRandomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

  return (
    <View style={styles.container}>
          <ImageBackground source={require('../assets/images/blob3.png')} resizeMode="contain" style={styles.bgimage}>

      {/* <Text style={styles.title}>Kids Alphabet Listening</Text> */}
      <View style={styles.subContainer}>
      <View style={styles.grid}>
        {Object.keys(alphabetSounds).map((letter) => (
          <TouchableOpacity
            key={letter}
            style={[styles.letterButton, { backgroundColor: alphabetColors[letter] }]}
            onPress={() => playSound(letter)}
            onLongPress={stopSound}
          >
            <Text style={styles.letterText}>{letter}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
  subContainer: {
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    paddingBottom: 2,
    width: 300,
    justifyContent: "center",
    alignItems: "center"
  },
  letterButton: {
    width: "20%",
    padding: 6,
    // height: 80,
    margin: 0,
    borderRadius: 16,
    aspectRatio: 1/1,
    display: "flex",
    backgroundColor: "#11c684",
    justifyContent: "center",
    alignItems: "center",
  },
  letterText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
