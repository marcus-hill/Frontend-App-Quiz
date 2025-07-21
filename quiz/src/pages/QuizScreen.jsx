import React, { useState } from "react";
import quizData from "../data.json";

const QuizScreen = ({ currentCategory }) => {
  const categoryObject = quizData["quizzes"].find((category) => category.title.toLowerCase() === currentCategory.toLowerCase());
  const questions = categoryObject?.questions || []; // This makes the use of questions.map() safe - meaning it won't crash if the category isn't found

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSelect = (option) => {

  };

  const handleSubmit
  return <div></div>;
};

export default QuizScreen;
