import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from "react-native";

const animalData = [
  {
    id: 1,
    name: "Sun",
    image: require("../assets/images/quizimages/sun.png"),
    options: ["Moon", "Sun", "Cloud", "Star"],
    correctOption: "Sun",
  },
  {
    id: 2,
    name: "Cat",
    image: require("../assets/images/quizimages/cat.png"),
    options: ["Dog", "Lion", "Cat", "Panda"],
    correctOption: "Cat",
  },
  {
    id: 3,
    name: "Bus",
    image: require("../assets/images/quizimages/bus.png"),
    options: ["Bus", "Car", "Truck", "Bike"],
    correctOption: "Bus",
  },
  {
    id: 4,
    name: "Map",
    image: require("../assets/images/quizimages/map.png"),
    options: ["Plan", "Chart", "Map", "Globe"],
    correctOption: "Map",
  },
  {
    id: 5,
    name: "Duck",
    image: require("../assets/images/quizimages/duck.png"),
    options: ["Parrot", "Duck", "Sparrow", "Dove"],
    correctOption: "Duck",
  },
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState(null);

  const handleAnswerButtonClick = (selectedOption) => {
    
    if (selectedOption === animalData[currentQuestion].correctOption) {
      setSelectedOpt(selectedOption);

      setScore(score + 1);
   

    }
    // if (currentQuestion === animalData.length - 1) {
    //   setShowScore(true);

    // }else{
    // }
  //   const nextQuestion = currentQuestion + 1;

  //   if (nextQuestion > animalData.length) {
  //     setShowScore(true);

  //     // setCurrentQuestion(nextQuestion);
  //   } else {
  //     // setShowScore(true);
  //   }
  };

  const handleNextQuestion = () => {
    if (currentQuestion === animalData.length - 1) {
      setShowScore(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
    // setCurrentQuestion(currentQuestion + 1);
    setSelectedOpt(null);
  };

  const handleRestartButtonClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <View style={styles.container}>
          <ImageBackground source={require('../assets/images/blob3.png')} resizeMode="contain"   style={styles.bgimage}>
      {showScore ? (
        <View style={styles.scoreContainer}>
              {score === animalData.length ? (
            <Text style={{ fontSize: 48 }}>😎</Text>
          ) : score >= animalData.length / 2 ? (
            <Text style={{ fontSize: 48 }}>🙂</Text>
          ) : (
            <Text style={{ fontSize: 48 }}>😞</Text>
          )}
          <Text style={styles.scoreText}>
            You scored {score} out of {animalData.length}!
          </Text>
          <TouchableOpacity
            style={styles.restartButton}
            onPress={handleRestartButtonClick}
          >
            <Text style={styles.restartButtonText}>Play again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleRestartButtonClick}
          >
            <Text style={styles.restartButtonText}>Back to Games</Text>
          </TouchableOpacity>
        </View>
      ) : (

        <View style={styles.quizContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={animalData[currentQuestion].image}
            />
          </View>
          <View style={styles.optionsContainer}>
            {animalData[currentQuestion].options.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.optionButton}
                onPress={() => handleAnswerButtonClick(option)}
              >
                <Text style={styles.optionButtonText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
        style={[
          styles.nextButton,
          selectedOpt === null && styles.disabledButton,
        ]}
        onPress={handleNextQuestion}
        disabled={selectedOpt === null}
      >
        <Text style={[styles.nextButtonText, selectedOpt === null && styles.disabledButton]}>Next</Text>
      </TouchableOpacity>
        </View>
      )}
      </ImageBackground>
    </View>
  );
}

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
  scoreContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 350
  },
  scoreText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 16,
  },
  restartButton: {
    backgroundColor: "#f878b5",
    padding: 12,
    borderRadius: 8,
    width: 160,
    marginTop: 18
  },
  backButton: {
    backgroundColor: "#6cdfef",
    padding: 12,
    borderRadius: 8,
    width: 160,
    marginTop: 18
  },
  restartButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    height: 200,
    width: 200,
    backgroundColor: "#0671d5"
  },
  image: {
    resizeMode: "contain",
    padding: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    width: "80%"
  },
  optionsContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15
  },
  optionButton: {
    backgroundColor: "#f878b5",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    width: 200,
  },
  optionButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  nextButton: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 18,
    alignItems: "center",
    justifyContent: "center",
},
nextButtonText: {
    fontWeight: "bold",
    fontSize: 16
},
  disabledButton: {
    backgroundColor: "#fff",
    color: "lightgray"
  },
});
