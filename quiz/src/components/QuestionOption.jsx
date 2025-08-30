import classes from "./QuestionOption.module.css";
import classNames from "classnames";
import correctIcon from "../assets/images/icon-correct.svg";
import incorrectIcon from "../assets/images/icon-incorrect.svg";

const QuestionOption = ({ questionIndex, option, isAnswered, isCorrect, isSelected, handleSelect, correctAnswer }) => {
  const optionClasses = classNames(classes.optionContainer, isAnswered && isCorrect && isSelected ? classes.optionCorrect : null, isAnswered && !isCorrect && isSelected ? classes.optionIncorrect : null, isSelected && !isAnswered ? classes.optionSelected : null);

  const letters = ["A", "B", "C", "D"];

  console.log(correctAnswer);

  return (
    <div key={questionIndex} id={questionIndex} className={optionClasses} onClick={handleSelect}>
      <div className={classes.questionLetterContainer}>
        <p className={classes.questionLetter}>{letters[questionIndex]}</p>
      </div>
      <p className={classes.optionText}>{option}</p>
      {isAnswered && isSelected && isCorrect && correctAnswer ? <img src={correctIcon} /> : null}
      {isAnswered && !isSelected && !isCorrect && correctAnswer ? <img src={correctIcon} /> : null}
      {isAnswered && isSelected && !isCorrect && !correctAnswer ? <img src={incorrectIcon} /> : null}
    </div>
  );
};

export default QuestionOption;
