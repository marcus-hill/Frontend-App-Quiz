import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HomeScreen from "./pages/HomeScreen";
import QuizScreen from "./pages/QuizScreen";
import ResultsScreen from "./pages/ResultsScreen";
import iconMoonLight from "./assets/images/icon-moon-light.svg";
import iconMoonDark from "./assets/images/icon-moon-dark.svg";
import iconSunLight from "./assets/images/icon-sun-light.svg";
import iconSunDark from "./assets/images/icon-sun-dark.svg";
import DisplayCategory from "./components/DisplayCategory";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [currentScreen, setCurrentScreen] = useState("home");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [points, setCurrentPoints] = useState(null);
  const [totalQuestions, setTotalQuestions] = useState(null);
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

  const handleQuizCompleted = (points, totalQuestions) => {
    setQuizStarted(false);
    setCurrentPoints(points);
    console.log("Completed with " + points + " points");
    setTotalQuestions(totalQuestions + 1);
    setCurrentScreen("results");
  };

  const handlePlayAgain = () => {
    setCurrentScreen("home");
    setCurrentCategory(null);
    setCurrentPoints(null);
    setTotalQuestions(null);
  };

  const handleThemeChange = (event) => {
    console.log("Checked: " + event.target.checked);

    if (event.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // useTheme(theme);

  return (
    <>
      <div>
        <div className="topSection">
          {(quizStarted || currentScreen === "results") && <DisplayCategory currentCategory={currentCategory}></DisplayCategory>}
          <div className="theme-selector">
            <img className="icon" src={iconSunDark} />
            <label class="switch">
              <input type="checkbox" onChange={handleThemeChange} />
              <span class="slider round"></span>
            </label>
            <img className="icon" src={iconMoonDark} />
          </div>
        </div>
        {currentScreen === "home" && <HomeScreen currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></HomeScreen>}
        {currentScreen === "quiz" && <QuizScreen currentCategory={currentCategory} handleQuizCompleted={handleQuizCompleted}></QuizScreen>}
        {currentScreen === "results" && <ResultsScreen currentCategory={currentCategory} points={points} handlePlayAgain={handlePlayAgain} totalQuestions={totalQuestions}></ResultsScreen>}
      </div>
    </>
  );
}

export default App;
