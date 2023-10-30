import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest country in the world?",
    options: ["Russia", "Canada", "China", "USA"],
    answer: "Russia",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Dollar", "Euro", "Pound"],
    answer: "Yen",
  },
];

const QuizScreen = ({ question, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        {question}
      </Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          onPress={() => {
            setSelectedOption(option);
            onSelect(option);
          }}
          style={{
            backgroundColor: selectedOption === option ? "green" : "lightgray",
            padding: 10,
            borderRadius: 10,
            marginVertical: 10,
            width: "80%",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{option}</Text>
        </TouchableOpacity>
      ))}
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

  const handleNext = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setShowScore(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const score = selectedOptions.filter(
    (option, index) => option === questions[index].answer
  ).length;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {showScore ? (
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
            Your Score: {score}/{questions.length}
          </Text>
          {score === questions.length ? (
            <Text style={{ fontSize: 48 }}>😎</Text>
          ) : score >= questions.length / 2 ? (
            <Text style={{ fontSize: 48 }}>🙂</Text>
          ) : (
            <Text style={{ fontSize: 48 }}>😞</Text>
          )}
        </View>
      ) : (
        <QuizScreen
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onSelect={handleSelect}
        />
      )}
      {!showScore && (
        <TouchableOpacity
          onPress={handleNext}
          style={{
            backgroundColor: "blue",
            padding: 10,
            borderRadius: 10,
            marginVertical: 10,
            width: "80%",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Next
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default QuizApp;
