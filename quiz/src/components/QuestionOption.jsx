import classes from "./QuestionOption.module.css";
import classNames from "classnames";
import correctIcon from "../assets/images/icon-correct.svg";
import incorrectIcon from "../assets/images/icon-incorrect.svg";

const QuestionOption = ({ questionIndex, option, isAnswered, isCorrect, isSelected, handleSelect, correctAnswer }) => {
  const optionClasses = classNames(classes.optionContainer, isAnswered && isCorrect && isSelected ? classes.optionCorrect : null, isAnswered && !isCorrect && isSelected ? classes.optionIncorrect : null, isSelected && !isAnswered ? classes.optionSelected : null);

  const containerLetterClasses = classNames(classes.questionLetterContainer, isAnswered && correctAnswer ? classes.questionLetterCorrect : null, isAnswered && !isCorrect && isSelected ? classes.questionLetterIncorrect : null);

  const containerLetter = classNames(classes.questionLetter, isAnswered && isCorrect && isSelected ? classes.questionLetterText : null, isAnswered && !isCorrect && isSelected ? classes.questionLetterText : null);

  const letters = ["A", "B", "C", "D"];

  console.log(correctAnswer);

  return (
    <button key={questionIndex} id={questionIndex} className={optionClasses} onClick={handleSelect}>
      <div className={containerLetterClasses}>
        <p className={containerLetter}>{letters[questionIndex]}</p>
      </div>
      <p className={classes.optionText}>{option}</p>
      {isAnswered && isSelected && isCorrect && correctAnswer ? <img className={classes.correctIcon} src={correctIcon} /> : null}
      {isAnswered && !isSelected && !isCorrect && correctAnswer ? <img className={classes.correctIcon} src={correctIcon} /> : null}
      {isAnswered && isSelected && !isCorrect && !correctAnswer ? <img className={classes.correctIcon} src={incorrectIcon} /> : null}
    </button>
  );
};

export default QuestionOption;
