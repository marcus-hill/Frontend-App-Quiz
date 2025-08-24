import classes from "./QuizQuestion.module.css";
import QuestionOption from "./QuestionOption";

const QuizQuestion = ({ index, question, numberOfQuestions, handleSelectAnswer, handleSubmitAnswer, isAnswered, isCorrect, selectedOption }) => {
  return (
    <div key={index} className={classes.quizQuestionContainer}>
      <p className={classes.numberOfQuestions}>
        Question {index + 1} of {numberOfQuestions}
      </p>
      <p className={classes.question}>{question.question}</p>
      <progress className={classes.progressBar} value={index + 1 / numberOfQuestions}></progress>
      {question.options.map((option, currentIndex) => {
        let currentOptionSelected = selectedOption == currentIndex;
        return (
          <QuestionOption questionIndex={currentIndex} option={option} isAnswered={isAnswered} isCorrect={isCorrect} isSelected={currentOptionSelected} handleSelect={handleSelectAnswer}>
            {" "}
          </QuestionOption>
        );
      })}
    </div>
  );
};

export default QuizQuestion;
