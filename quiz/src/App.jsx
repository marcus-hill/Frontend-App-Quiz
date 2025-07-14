import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomeScreen from './pages/HomeScreen'
import QuizScreen from './pages/QuizScreen'
import ResultsScreen from './pages/ResultsScreen'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [currentScreen, setCurrentScreen] = useState("home");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [theme, setTheme] = useState('dark');

  // Use Effect for Category Selection - Quiz Starting
  useEffect(() => {
    if (currentCategory) {
      setQuizStarted(true);
      setCurrentScreen("quiz");
      console.log("Use Effect has been run")
    }
  }, [currentCategory]); // ← runs whenever currentCategory changes

  // Use Effect for Theme Selection
  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);


  // useTheme(theme);

  return (
    <>
      <div>
        { currentScreen === "home" && <HomeScreen currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></HomeScreen>}
        { currentScreen === "quiz" && <QuizScreen currentCategory={currentCategory}></QuizScreen>}
        { currentScreen === "results" && <ResultsScreen></ResultsScreen>}

      </div>
    </>
  )
}

export default App
