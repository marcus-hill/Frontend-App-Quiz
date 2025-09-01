import htmlImage from "../assets/images/icon-html.svg";
import cssImage from "../assets/images/icon-css.svg";
import javascriptImage from "../assets/images/icon-js.svg";
import accessibilityImage from "../assets/images/icon-accessibility.svg";
import classes from "./DisplayCategory.module.css";
import classNames from "classnames";

const DisplayCategory = ({ currentCategory }) => {
  const returnCategoryImage = () => {
    if (currentCategory.toLowerCase() === "html") {
      return htmlImage;
    } else if (currentCategory.toLowerCase() === "css") {
      return cssImage;
    } else if (currentCategory.toLowerCase() === "javascript") {
      return javascriptImage;
    } else if (currentCategory.toLowerCase() === "accessibility") {
      return accessibilityImage;
    }
  };

  const imageClassNames = classNames(classes.imageContainer, currentCategory.toLowerCase());

  return (
    <div className={classes.categoryInformation}>
      <div className={imageClassNames}>
        <img className={classes.categoryIcon} src={returnCategoryImage()} />
      </div>
      <p>{currentCategory}</p>
    </div>
  );
};

export default DisplayCategory;
