import React from "react";
import classes from "./ResultsScreen.module.css";
import DisplayCategory from "../components/DisplayCategory";

const ResultsScreen = ({ currentCategory, points, totalQuestions, handlePlayAgain }) => {
  return (
    <div className={classes.resultsContainer}>
      <p className={classes.title}>
        Quiz completed<br></br>
        <span>You scored...</span>
      </p>

      <div className={classes.rightContainer}>
        <div className={classes.resultBox}>
          <DisplayCategory currentCategory={currentCategory}></DisplayCategory>
          <p className={classes.result}>{points}</p>
          <p className={classes.resultOutOf}>out of {totalQuestions}</p>
        </div>
        <button onClick={handlePlayAgain} className={classes.playAgainButton}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;
