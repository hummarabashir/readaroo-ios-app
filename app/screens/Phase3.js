import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import quizData from "./screens/quizData";


const QuizScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const showScores = () => {
    alert(`Quiz finished! Your score is ${score}`);
  }

  if (currentQuestionIndex < quizData.length) {
    return (
      <View>
        <Text>{quizData[currentQuestionIndex].question}</Text>
        {quizData[currentQuestionIndex].options.map((option, index) => (
          <Button
            key={index}
            title={option}
            onPress={() => handleAnswer(option)}
          />
        ))}
              <Button title="Scores" onPress={showScores} />

                <Text>Your score: {score}</Text>

      </View>
    );
  } else {
    return (
      <View>
        <Text>Quiz completed!</Text>
        <Text>Your score: {score}</Text>
        {/* Add a message based on the score */}
      </View>
    );
  }
};

export default QuizScreen;
