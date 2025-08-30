import classes from "./QuizQuestion.module.css";
import QuestionOption from "./QuestionOption";

const QuizQuestion = ({ index, question, numberOfQuestions, handleSelectAnswer, handleSubmitAnswer, handleNextQuestion, isAnswered, isCorrect, selectedOption, correctAnswer }) => {
  return (
    <div key={index} className={classes.quizQuestionContainer}>
      <p className={classes.numberOfQuestions}>
        Question {index + 1} of {numberOfQuestions}
      </p>
      <p className={classes.question}>{question.question}</p>
      <progress className={classes.progressBar} value={index + 1 / numberOfQuestions}></progress>
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
        <button onClick={handleSubmitAnswer} className={classes.proceedButton}>
          Submit Answer
        </button>
      ) : (
        <button onClick={handleNextQuestion} className={classes.proceedButton}>
          Next Question
        </button>
      )}
    </div>
  );
};

export default QuizQuestion;
