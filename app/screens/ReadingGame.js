import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const questions = [
    {
      id: 1,
      name: "octopus",
      image: require("../assets/images/quizimages/octopus.png"),
      options: ["require('../assets/images/quizimages/octopus.png')", "require('../assets/images/quizimages/bus.png')", "require('../assets/images/quizimages/cat.png')"],
      correctOption: "o",
    },
    // {
    //   id: 2,
    //   name: "Igloo",
    //   image: require("../assets/images/quizimages/igloo.png"),
    //   options: ["p", "m", "i"],
    //   correctOption: "i",
    // },
    // {
    //   id: 3,
    //   name: "King",
    //   image: require("../assets/images/quizimages/king.png"),
    //   options: ["k", "h", "q"],
    //   correctOption: "k",
    // },
    // {
    //   id: 4,
    //   name: "Umbrella",
    //   image: require("../assets/images/quizimages/umbrella.png"),
    //   options: ["a", "u", "b"],
    //   correctOption: "u",
    // },
    // {
    //     id: 5,
    //     name: "Socks",
    //     image: require("../assets/images/quizimages/socks.png"),
    //     options: ["s", "k", "o"],
    //     correctOption: "s",
    //   },
  ];

const QuizScreen = ({ image, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View>
      <View style={styles.imageContainer}>
      <Image
              style={styles.image}
              source={image}
            />
      </View>
      <View style={styles.optionsContainer}>

      {options.map((option) => (
        <TouchableOpacity
          key={option}
          onPress={() => {
            setSelectedOption(option);
            onSelect(option);
          }}
          style={{
            backgroundColor: selectedOption === option ? "#6cdfef" : "#f878b5",
        padding: 6,
        borderRadius: 16,
        flexDirection: "column",
        width: "28%",
        aspectRatio:1/1,
        alignItems: "center",
        justifyContent: "center"
          }}
        >
          {/* <Text style={styles.optionButtonText}>{option}</Text> */}
          <Image
              style={styles.image}
              source={option}
            />
        </TouchableOpacity>
      ))}
      </View>
    </View>
  );
};

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showScore, setShowScore] = useState(false);

  const handleSelect = (option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = option;
    setSelectedOptions(newSelectedOptions);
  };
  const handleRestartButtonClick = () => {
    setCurrentQuestionIndex(0);
    // setScore(0);
    setShowScore(false);
  };

  const handleNext = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setShowScore(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const score = selectedOptions.filter(
    (option, index) => option === questions[index].correctOption
  ).length;

  return (
    <View style={styles.container}>
      {showScore ? (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>
            Your Score: {score}/{questions.length}
          </Text>
          {score === questions.length ? (
            <Text style={{ fontSize: 48 }}>😎</Text>
          ) : score >= questions.length / 2 ? (
            <Text style={{ fontSize: 48 }}>🙂</Text>
          ) : (
            <Text style={{ fontSize: 48 }}>😞</Text>
          )}
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
        <QuizScreen
          image={questions[currentQuestionIndex].image}
          options={questions[currentQuestionIndex].options}
          onSelect={handleSelect}
        />
      )}
      {!showScore && (
        <TouchableOpacity
          onPress={handleNext}
          style={styles.nextButton}>
          <Text style={styles.nextButtonText}>
            Next
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    //   flexWrap: "wrap",
      backgroundColor: "#1f354b",
      alignItems: "center",
      justifyContent: "center",
    },
    imageContainer: {
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
        height: 200,
        width: 200,
        backgroundColor: "#0671d5"
      },
      image: {
        // width: 300,
        // height: 300,
        resizeMode: "contain",
        padding: 1,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        width: "85%"
      },
    scoreContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      scoreText: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 16,
      },
      optionsContainer: {
        // flex: 1,
        display: "flex",
        gap: 10,
        flexDirection: "row",
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
      },
      optionButtonText: {
        color: "#000",
        fontSize: 22,
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
        marginTop: 40
    },
    nextButtonText: {
        fontWeight: "bold",
        fontSize: 16
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
});

export default QuizApp;
