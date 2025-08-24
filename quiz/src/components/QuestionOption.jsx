import classes from "./QuestionOption.module.css";
import classNames from "classnames";

const QuestionOption = ({ questionIndex, option, isAnswered, isCorrect, isSelected, handleSelect }) => {
  const optionClasses = classNames(classes.optionContainer, isAnswered && isCorrect ? classes.optionCorrect : null, isAnswered && !isCorrect ? classes.optionIncorrect : null, isSelected && !isAnswered ? classes.optionSelected : null);

  const letters = ["A", "B", "C", "D"];
  return (
    <div key={questionIndex} id={questionIndex} className={optionClasses} onClick={handleSelect}>
      <div className={classes.questionLetterContainer}>
        <p className={classes.questionLetter}>{letters[questionIndex]}</p>
      </div>
      <p className={classes.optionText}>{option}</p>
      {/* <p className={classes.test}>Test</p> */}
    </div>
  );
};

export default QuestionOption;
