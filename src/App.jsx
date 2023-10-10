import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components";
import { HomePage } from "./pages";
import Aos from "aos";
import { Route, Routes } from "react-router-dom";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const App = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  useEffect(() => {
    // We init the Aos package for animations
    Aos.init();
  }, []);

  //const checkPortfolios = projects?.length === 0 ? false : true;
  //const checkResumes = resumes?.length === 0 ? false : true;
  // const checkServices = services?.length === 0 ? false : true;
  ///const checkAchievements = achievements?.length === 0 ? false : true;

  return (
    <div>
      <Header
        theme={theme}
        setTheme={setTheme}
        // checkPortfolios={checkPortfolios}
        // checkAchievements={checkAchievements}
        // checkResumes={checkResumes}
      />
      <Routes>
        <Route path="/quintinnguyen" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
