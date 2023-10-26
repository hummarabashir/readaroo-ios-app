import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Audio } from "expo-av";

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
      {/* <Text style={styles.title}>Kids Alphabet Listening</Text> */}
      <View style={styles.grid}>
        {Object.keys(alphabetSounds).map((letter) => (
          <TouchableOpacity
            key={letter}
            style={[styles.letterButton, {backgroundColor:getRandomColor()}]}
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f354b",
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
