import React from "react";
import classes from "./HomeScreen.module.css";
import htmlImage from "../assets/images/icon-html.svg";
import cssImage from "../assets/images/icon-css.svg";
import javascriptImage from "../assets/images/icon-js.svg";
import accessibilityImage from "../assets/images/icon-accessibility.svg";
import clsx from "clsx";

const HomeScreen = ({ currentCategory, setCurrentCategory }) => {
  return (
    <div className={classes.homeScreenContainer}>
      <div className={classes.titleSection}>
        <p className={classes.title}>
          Welcome to the <span>Frontend Quiz</span>
        </p>
        <p className={classes.description}>Pick a subject to get started</p>
      </div>

      <div className={classes.categorySelection}>
        <div onClick={() => setCurrentCategory("HTML")} className={classes.category}>
          <div className={clsx(classes.imageContainer, classes.htmlImageContainer)}>
            <img className={classes.categoryIcon} src={htmlImage} />
          </div>
          <p className={classes.categoryName}>HTML</p>
        </div>

        <div onClick={() => setCurrentCategory("CSS")} className={classes.category}>
          <div className={clsx(classes.imageContainer, classes.cssImageContainer)}>
            <img className={classes.categoryIcon} src={cssImage} />
          </div>
          <p className={classes.categoryName}>CSS</p>
        </div>

        <div onClick={() => setCurrentCategory("JavaScript")} className={classes.category}>
          <div className={clsx(classes.imageContainer, classes.javascriptImageContainer)}>
            <img className={classes.categoryIcon} src={javascriptImage} />
          </div>
          <p className={classes.categoryName}>Javascript</p>
        </div>

        <div onClick={() => setCurrentCategory("Accessibility")} className={classes.category}>
          <div className={clsx(classes.imageContainer, classes.accessibilityImageContainer)}>
            <img className={classes.categoryIcon} src={accessibilityImage} />
          </div>
          <p className={classes.categoryName}>Accessibility</p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
