import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { quizData } from '../quizData'; // Import your quiz data here

const QuizScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate('Result', { score });
    }
  };

  return (
    <View>
      <Text>Question {currentQuestionIndex + 1}:</Text>
      <Text>{quizData[currentQuestionIndex].question}</Text>
      {quizData[currentQuestionIndex].options.map((option, index) => (
        <Button
          key={index}
          title={option}
          onPress={() => handleAnswer(index === quizData[currentQuestionIndex].correctIndex)}
        />
      ))}
    </View>
  );
};

export default QuizScreen;
