import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SoundPlayer from "react-native-sound-player";

const AlphabetSounds = () => {
  const alphabets = [
    { letter: "A", sound: require("../assets/audio/A.m4a") },
    { letter: "B", sound: require("../assets/audio/B.m4a") },
    // Add more alphabets and their corresponding sound files here
  ];

  const playSound = (sound) => {
    try {
      SoundPlayer.playSoundFile(sound, "mp3");
    } catch (error) {
      console.log("Error playing sound:", error);
    }
  };

  useEffect(() => {
    SoundPlayer.onFinishedPlaying((success) => {
      if (success) {
        console.log("Sound finished playing");
      } else {
        console.log("Sound failed to play");
      }
    });

    return () => {
      SoundPlayer.unmount();
    };
  }, []);

  return (
    <View>
      {alphabets.map((alphabet, index) => (
        <TouchableOpacity key={index} onPress={() => playSound(alphabet.sound)}>
          <Text>{alphabet.letter}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AlphabetSounds;
