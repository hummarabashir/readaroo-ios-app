import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, StyleSheet, ImageBackground } from "react-native";
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
      audio: require("../assets/audio/B.m4a"),
      backgroundColor: "#6b74e0", // Add background color for Card 2
    },
    {
        image: require("../assets/images/quizimages/duck.png"),
        heading: "Duck",
        audio: require("../assets/audio/C.m4a"),
        backgroundColor: "#6cdfef", // Add background color for Card 3
      },
    // Add more cards here
  ];

  // const playAudio = async () => {
  //   try {
  //     const audioPath = cards[currentCardIndex].audio;
  //     await SoundPlayer.playSoundFile(audioPath, "m4a");

  //     setIsPlaying(true);
  //   } catch (error) {
  //     console.log("Error playing audio:", error);
  //   }
  // };

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

// const playAudio = async () => {
//     const sound = new Audio.Sound();
  
//     try {
//       // Get the audio path from the current card
//       const audioPath = cards[currentCardIndex].audio;
  
//       if (audioPath) {
//         // Create a new sound object
//         await sound.loadAsync({
//           uri: audioPath,
//           shouldPlay: true,
//         });
  
//         // Set the sound object
//         setSound(sound);
  
//         // Play the audio
//         await sound.playAsync();
//       } else {
//         console.log('Invalid audio path');
//       }
//     } catch (error) {
//       console.log('Error playing audio: ', error);
//     }
//   };
  
  

useEffect(() => {
  return sound
    ? () => {
        sound.unloadAsync();
      }
    : undefined;
}, [sound]);

const playAudio = async () => {
  try {
    const audioPath = cards[currentCardIndex].audio;

    const { sound } = await Audio.Sound.createAsync(
      // require('../assets/audio/A.m4a')
    audioPath
    );
    setSound(sound);
    await sound.playAsync();
  } catch (error) {
    console.log('Error loading audio:', error);
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
    if(currentCardIndex === cards.length - 1) {
      setProgress(0);
      setCurrentCardIndex(0);
    }
    else {
    setCurrentCardIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      setProgress(newIndex / (cards.length - 1));
      return newIndex;
    });
  }
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
    <ImageBackground source={require('../assets/images/blob3.png')} resizeMode="contain"   style={styles.bgimage}>

      {/* <View style={[styles.card, { backgroundColor: currentCard.backgroundColor }]}> */}
      <View style={styles.quizContainer}>
      <View style={styles.bdayDecorContainer}>
        <View style={[styles.bdayPic, { backgroundColor: currentCard.backgroundColor }]}>
        <Image source={currentCard.image} style={styles.image} />
        </View>
        </View>
        <View style={styles.bdayBanner}>
        <Text style={styles.heading}>{currentCard.heading}</Text>
        </View>
        <View style={styles.bdayMessage}>
        <Text style={styles.bdayMessageText}>
        Fun Facts!!
        {"\n"} 
          Ana, yet another year that we get to celebrate together! Hope you have
          a great day
          
        </Text>
      </View>
      {/* </View> */}
      {/* <ProgressBar /> */}
      <View style={styles.playView}>
      <Text 
        title={isPlaying ? "Stop" : "Play"}
        onPress={isPlaying ? stopAudio : playAudio}
     
        style={styles.playButton}
      > <Ionicons
      name={isPlaying ? "stop" : "play"}
      size={40}
      color="#6cdfef"
    /></Text>
    </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Previous"
          onPress={goToPreviousCard}
          disabled={currentCardIndex === 0}
          // color= {currentCardIndex === 0 ? "gray" : "blue"}
          style={styles.navigationButton}
  icon={<Ionicons name="arrow-back" size={24} color="pink"/>} />
        <Button
           title={currentCardIndex === cards.length - 1 ? 'Start Over' : 'Next'}
          onPress={goToNextCard}
          // disabled={currentCardIndex === cards.length - 1}
          icon={<Ionicons name="arrow-forward" size={24} color="white" />}
          style={styles.navigationButton}
        />
      </View>
      </View>
      </ImageBackground>
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
  bgimage: {
    flex: 1,
    justifyContent: 'center',
  },
  quizContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 350
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
  // image: {
  //   width: 200,
  //   height: 200,
  //   marginBottom: 30,
  // },
  bdayPic: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 280,
    height: 240,
    padding: 8,
    // backgroundColor: "white",
    borderRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "white",
    borderWidth: 6,
    borderColor: "white",
    shadowOpacity: 1,
    transform: [{ rotate: "5deg" }, { translateX: 20 }, { translateY: 45 }],
  },
  image: {
    width: 160,
    height: 160,
    resizeMode: "cover",
  },
  bdayDecorContainer: {
    position: "relative",
  },
  bdayBanner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    zIndex: 1,
   
    transform: [{ rotate: "-5deg" }],
    marginVertical: 6,
  },
  heading: {
    backgroundColor: "#0671d5",
    paddingVertical: 12,
    paddingHorizontal: 40,
    fontWeight: "bold",
    fontSize: 32,
    color: "white",
    textTransform: "uppercase",
    flexGrow: 0
  },
  bdayMessage: {
    maxWidth: "72%",
    padding: 24,
    fontFamily: "Shadows Into Light",
    fontSize: 18,
    lineHeight: 32,
    color: "#333333",
    backgroundColor: "#F1EDE9",
    background: 'repeating-linear-gradient(#F1EDE9, #F1EDE9 31px, #94ACD4 31px, #94ACD4 32px)',
    boxShadow: '5px 5px 15px rgba(0,0,0, .15)',
  },
  bdayMessageText: {
    marginBottom: 16,
  },
  playView: {
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#6cdfef",
    backgroundColor: "#0671d5",
    borderRadius: 10,
    marginTop: -30,
    padding: 4
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
  buttonDisabled : {
    color: "gray"
  }
});

export default FlashCardsApp;
