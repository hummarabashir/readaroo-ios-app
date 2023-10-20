import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Audio } from "expo-av";

const alphabetSounds = {
  A: require("../assets/audio/A.m4a"),
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
      <Text style={styles.title}>Kids Alphabet Listening</Text>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
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
