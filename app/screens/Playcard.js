import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import SoundPlayer from "react-native-sound-player";
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { Audio } from 'expo-av';


const FlashCardsApp = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [sound, setSound] = useState(null);


  const cards = [
    {
      image: require("../assets/images/quizimages/cat.png"),
      heading: "Cat",
      audio: require("../assets/audio/A.m4a"),
      backgroundColor: "#f878b5", // Add background color for Card 1
    },
    {
      image: require("../assets/images/quizimages/bus.png"),
      heading: "Bus",
      audio: require("../assets/audio/A.m4a"),
      backgroundColor: "#6b74e0", // Add background color for Card 2
    },
    {
        image: require("../assets/images/quizimages/duck.png"),
        heading: "Duck",
        audio: require("../assets/audio/A.m4a"),
        backgroundColor: "#6cdfef", // Add background color for Card 3
      },
    // Add more cards here
  ];

//   const playAudio = async () => {
//     try {
//       const audioPath = cards[currentCardIndex].audio;
//       await SoundPlayer.playSoundFile(audioPath, "m4a");

//       setIsPlaying(true);
//     } catch (error) {
//       console.log("Error playing audio:", error);
//     }
//   };

// const playAudio = async () => {
//     const sound = new Audio.Sound();

//     try {
//       // Get the audio path from the current card
//       const audioPath = cards[currentCardIndex].audio;

//       // Create a new sound object
//     //   const { sound } = await Audio.Sound.createAsync({ uri: audioPath });
//     await sound.loadAsync({
//         uri: audioPath,
//         shouldPlay: true,
//     });
//     await sound.playAsync();
//       // Set the sound object
//       setSound(sound);

//       // Play the audio
//       await sound.playAsync();
//     } catch (error) {
//       console.log('Error playing audio: ', error);
//     }
//   };

const playAudio = async () => {
    const sound = new Audio.Sound();
  
    try {
      // Get the audio path from the current card
      const audioPath = cards[currentCardIndex].audio;
  
      if (audioPath) {
        // Create a new sound object
        await sound.loadAsync({
          uri: audioPath,
          shouldPlay: true,
        });
  
        // Set the sound object
        setSound(sound);
  
        // Play the audio
        await sound.playAsync();
      } else {
        console.log('Invalid audio path');
      }
    } catch (error) {
      console.log('Error playing audio: ', cards[currentCardIndex]);
    }
  };
  
  


  const stopAudio = async () => {
    try {
      await SoundPlayer.stop();
      setIsPlaying(false);
    } catch (error) {
      console.log("Error stopping audio:", error);
    }
  };

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      setProgress(newIndex / (cards.length - 1));
      return newIndex;
    });
    stopAudio();
  };

  const goToPreviousCard = () => {
    setCurrentCardIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      setProgress(newIndex / (cards.length - 1));
      return newIndex;
    });
    stopAudio();
  };

  const shuffleCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCurrentCardIndex(0);
    stopAudio();
  };

  const currentCard = cards[currentCardIndex];

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
<>
    <Progress.Bar
    progress={progress}
    width={null}
    height={5}
    color="#6cdfef"
    borderColor="#1f354b"
    fill="#1f354b"
    backgroundColor="#1f354b"
    borderRadius= {0}
    style={styles.progressBar}
  />
    <View style={styles.container}>
  
      <View style={[styles.card, { backgroundColor: currentCard.backgroundColor }]}>
        <Image source={currentCard.image} style={styles.image} />
        <Text style={styles.heading}>{currentCard.heading}</Text>
      </View>
      {/* <ProgressBar /> */}
      <Text
        title={isPlaying ? "Stop" : "Play"}
        onPress={isPlaying ? stopAudio : playAudio}
     
        style={styles.playButton}
      > <Ionicons
      name={isPlaying ? "stop" : "play"}
      size={40}
      color="blue"
    /></Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Previous"
          onPress={goToPreviousCard}
          disabled={currentCardIndex === 0}
          style={styles.navigationButton}
  icon={<Ionicons name="arrow-back" size={24} color="pink"/>} />
        <Button
          title="Next"
          onPress={goToNextCard}
          disabled={currentCardIndex === cards.length - 1}
          icon={<Ionicons name="arrow-forward" size={24} color="white" />}
          style={styles.navigationButton}
        />
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f354b",
    alignItems: "center",
    justifyContent: "center",
  },
  progressBarContainer: {
    // marginTop: 10,
  },
  progressBar: {
    // borderRadius: 5,
  },
  
  card: {
    alignItems: "center",
    padding: 45,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  playButton: {
    marginBottom: 20,
    borderWidth: 6,
    borderColor: "#fff",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: -30
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 30
  },
  navigationButton: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default FlashCardsApp;
