import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HomeScreen from "./pages/HomeScreen";
import htmlImage from "./assets/images/icon-html.svg";
import cssImage from "./assets/images/icon-css.svg";
import javascriptImage from "./assets/images/icon-js.svg";
import accessibilityImage from "./assets/images/icon-accessibility.svg";
import QuizScreen from "./pages/QuizScreen";
import ResultsScreen from "./pages/ResultsScreen";
import quizData from "./data.json";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [currentScreen, setCurrentScreen] = useState("home");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [theme, setTheme] = useState("light");

  // Use Effect for Category Selection - Quiz Starting
  useEffect(() => {
    if (currentCategory) {
      setQuizStarted(true);
      setCurrentScreen("quiz");
    }
  }, [currentCategory]); // ← runs whenever currentCategory changes

  // Use Effect for Theme Selection
  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

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

  const handleQuizCompleted = () => {};

  // useTheme(theme);

  return (
    <>
      <div>
        <div className="topSection">
          {quizStarted && (
            <div className="categoryInformation">
              <div className={"imageContainer " + currentCategory.toLowerCase()}>
                <img className="categoryIcon" src={returnCategoryImage()} />
              </div>
              <p>{currentCategory}</p>
            </div>
          )}
          <div className="theme-selector">
            <p>Theme Placeholder</p>
          </div>
        </div>
        {currentScreen === "home" && <HomeScreen currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></HomeScreen>}
        {currentScreen === "quiz" && <QuizScreen currentCategory={currentCategory} handleQuizCompleted={handleQuizCompleted}></QuizScreen>}
        {currentScreen === "results" && <ResultsScreen></ResultsScreen>}
      </div>
    </>
  );
}

export default App;
