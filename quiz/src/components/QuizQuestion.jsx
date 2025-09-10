import classes from "./QuizQuestion.module.css";
import QuestionOption from "./QuestionOption";
import incorrectIcon from "../assets/images/icon-incorrect.svg";
import classNames from "classnames";

const QuizQuestion = ({ index, question, numberOfQuestions, handleSelectAnswer, handleSubmitAnswer, handleNextQuestion, isAnswered, isCorrect, selectedOption, correctAnswer, invalidSelection }) => {
  const buttonClassNames = classNames(classes.proceedButton, invalidSelection ? classes.invalidButton : null);

  return (
    <div key={index} className={classes.quizQuestionContainer}>
      <div className={classes.questionContainer}>
        <p className={classes.numberOfQuestions}>
          Question {index + 1} of {numberOfQuestions}
        </p>
        <p className={classes.question}>{question.question}</p>
        <progress className={classes.progressBar} value={(index + 1) / numberOfQuestions}></progress>
      </div>

      <div className={classes.optionContainer}>
        {question.options.map((option, currentIndex) => {
          let currentOptionSelected = selectedOption == currentIndex;

          let localCorrectAnswer = false;

          if (currentIndex === correctAnswer) {
            localCorrectAnswer = true;
          }

          return (
            <QuestionOption key={currentIndex} questionIndex={currentIndex} option={option} isAnswered={isAnswered} isCorrect={isCorrect} isSelected={currentOptionSelected} handleSelect={handleSelectAnswer} correctAnswer={localCorrectAnswer}>
              {" "}
            </QuestionOption>
          );
        })}

        {!isAnswered ? (
          <button onClick={handleSubmitAnswer} className={buttonClassNames}>
            Submit Answer
          </button>
        ) : (
          <button onClick={handleNextQuestion} className={classes.proceedButton}>
            {index + 1 == numberOfQuestions ? "Show Results" : "Next Question"}
          </button>
        )}

        {invalidSelection ? (
          <div className={classes.invalidSelectionContainer}>
            <img src={incorrectIcon} /> <p>Please select an answer</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default QuizQuestion;
