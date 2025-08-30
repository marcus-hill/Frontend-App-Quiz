import React, { useState } from "react";
import QuizQuestion from "../components/QuizQuestion";
import quizData from "../data.json";

const QuizScreen = ({ currentCategory, handleQuizCompleted }) => {
  const categoryObject = quizData["quizzes"].find((category) => category.title.toLowerCase() === currentCategory.toLowerCase());
  const questions = categoryObject?.questions || []; // This makes the use of questions.map() safe - meaning it won't crash if the category isn't found

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [correctPoints, setCorrectPoints] = useState(0);

  const handleSelectAnswer = (option) => {
    if (!isAnswered) {
      console.log(option.currentTarget.id);
      setSelectedOption(option.currentTarget.id);
      setIsSelected(true);
    }
  };

  const handleSubmitAnswer = () => {
    if (isSelected) {
      setIsAnswered(true);

      questions[currentIndex].options.map((option, key) => {
        if (questions[currentIndex].answer === option) {
          setCorrectAnswer(key);

          if (key.toString() === selectedOption.toString()) {
            setIsCorrect(true);

            console.log(correctPoints);
            setCorrectPoints(correctPoints + 1);
          }
        }
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsSelected(false);
      setIsAnswered(false);
      setIsCorrect(false);
      setCorrectAnswer(false);
    } else {
      handleQuizCompleted(correctPoints);
    }
  };

  return <QuizQuestion question={questions[currentIndex]} index={currentIndex} handleNextQuestion={handleNextQuestion} numberOfQuestions={questions.length} correctAnswer={correctAnswer} handleSelectAnswer={handleSelectAnswer} handleSubmitAnswer={handleSubmitAnswer} isAnswered={isAnswered} selectedOption={selectedOption} isCorrect={isCorrect}></QuizQuestion>;
};

export default QuizScreen;
