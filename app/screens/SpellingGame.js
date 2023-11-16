import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
const questions = [
    {
      image: require("../assets/images/quizimages/cat.png"),
      answer: ["c", "a", "t"],
      options: ["r", "a", "c", "v", "t", "m"],
    },
    {
      image: require("../assets/images/quizimages/bus.png"),
      answer: ["b", "u", "s"],
      options: ["p", "b", "s", "o", "e", "u"],
    },
    {
      image: require("../assets/images/quizimages/sun.png"),
      answer: ["s", "u", "n"],
      options: ["s", "g", "x", "n", "j", "u"],
    },
  ];
  
  function SpellingGame() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState(questions[currentQuestion].answer);
    const [selectedLetters, setSelectedLetters] = useState(
      Array(answer.length).fill("")
    );
    const [selectedOption, setSelectedOption] = useState("");
  
    const handleOptionPress = (option) => {
      setSelectedOption(option);
      if (answer.includes(option)) {
        const index = answer.indexOf(option);
        const newSelectedLetters = [...selectedLetters];
        newSelectedLetters[index] = option;
        setSelectedLetters(newSelectedLetters);
      }
    };
  
    const handleNextPress = () => {
      if (selectedLetters.join("") === answer.join("")) {
        setScore(score + 1);
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setAnswer(questions[currentQuestion + 1].answer);
          setSelectedLetters(
            Array(questions[currentQuestion + 1].answer.length).fill("")
          );
          setSelectedOption("");
        } else {
          alert(`Game Over! Your score is ${score}/${questions.length}`);
          setCurrentQuestion(0);
          setScore(0);
          setAnswer(questions[0].answer);
          setSelectedLetters(Array(questions[0].answer.length).fill(""));
          setSelectedOption("");
        }
      } else {
        alert("Please fill all the blanks correctly!");
      }
    };
  
    return (
      <View style={styles.container}>
            <ImageBackground source={require('../assets/images/blob3.png')} resizeMode="contain"   style={styles.bgimage}>
<View style={styles.subContainer}>
              <View style={styles.imageContainer}>
              <Image source={questions[currentQuestion].image} style={styles.image} />
      </View>
       
        <View style={styles.answerContainer}>
          {selectedLetters.map((letter, index) => (
              <View key={index} style={styles.answerOptions}>
            <Text key={index} style={styles.answerText}>
              {letter || "_"}
            </Text>
            </View>
          ))}
        </View>
        <View style={styles.optionsContainer}>
          {questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedOption === option && styles.selectedOptionButton,
              ]}
              onPress={() => handleOptionPress(option)}
              disabled={selectedLetters.includes(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={[
            styles.nextButton,
            selectedLetters.join("") === answer.join("") &&
              styles.enabledNextButton,
          ]}
          onPress={handleNextPress}
        >
          <Text  style={[
            styles.nextButtonText,
            selectedLetters.join("") === answer.join("") &&
              styles.enabledNextButton,
          ]}>Next</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
      //   flexWrap: "wrap",
        backgroundColor: "#1f354b",
        alignItems: "center",
        justifyContent: "center",
    },
    bgimage: {
      flex: 1,
      justifyContent: 'center',
    },
    subContainer: {
      width: 350,
      justifyContent: 'center',
      alignItems: 'center'
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
    answerContainer: {
    //   flexDirection: "row",
    //   marginBottom: 20,
    display: "flex",
    gap: 10,
    flexDirection: "row",
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
    },
    answerOptions: {
        padding: 6,
        borderRadius: 16,
        flexDirection: "column",
        width: "28%",
        aspectRatio:1/1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f878b5"
    },
    answerText: {
      fontSize: 22,
      fontWeight: "bold",
      marginHorizontal: 5,
    },
    optionsContainer: {
        display: "flex",
        gap: 10,
        flexDirection: "row",
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        flexWrap: "wrap"
    },
    optionButton: {
      backgroundColor: "#f878b5",
      borderRadius: 16,
      padding: 6,
      margin: 0,
      aspectRatio: 1/1,
      flexDirection: "column",
      width: "28%",
      alignItems: "center",
        justifyContent: "center",
    },
    selectedOptionButton: {
      backgroundColor: "#6cdfef",
    },
    optionText: {
      fontSize: 22,
      fontWeight: "bold",
    },
    nextButton: {
      backgroundColor: "#fff",
      borderRadius: 16,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 30,
      paddingRight: 30,
      marginTop: 32
    },
    enabledNextButton: {
    //   opacity: 1,
      color: "#000"
    },
    nextButtonText: {
      fontWeight: "bold",
        fontSize: 16,
      color: "rgba(16, 16, 16, 0.3)",
    },
  });
  
  
  
  
  export default SpellingGame;
