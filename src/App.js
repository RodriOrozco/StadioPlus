import "./sass/main.scss";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { ThemeContext } from "./context/ThemeContext";

import Home from "./pages/Home";
import Nav from "../componentes/Nav";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <div className="background">
        <Nav prop={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
