import React, { useState } from "react";
import QuizQuestion from "../components/QuizQuestion";
import quizData from "../data.json";

const QuizScreen = ({ currentCategory, handleCompletion }) => {
  const categoryObject = quizData["quizzes"].find((category) => category.title.toLowerCase() === currentCategory.toLowerCase());
  const questions = categoryObject?.questions || []; // This makes the use of questions.map() safe - meaning it won't crash if the category isn't found

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSelectAnswer = (option) => {
    if (!isAnswered) {
      setSelectedOption(option.currentTarget.id);
    }
  };

  const handleSubmitAnswer = () => {};

  return <QuizQuestion question={questions[currentIndex]} index={currentIndex} numberOfQuestions={questions.length} handleSelectAnswer={handleSelectAnswer} handleSubmitAnswer={handleSubmitAnswer} isAnswered={isAnswered} selectedOption={selectedOption} isCorrect={isCorrect}></QuizQuestion>;
};

export default QuizScreen;
