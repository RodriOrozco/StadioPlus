import "./sass/main.scss";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { ThemeContext } from "./context/ThemeContext";

import Home from "./pages/Home";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <div className="background">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          switch
        </button>
      </div>
    </div>
  );
}

export default App;
