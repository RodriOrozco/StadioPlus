import "./sass/main.scss";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { ThemeContext } from "./context/ThemeContext";

import Home from "./pages/Home";
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";
import Menu from "./componentes/Menu";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <div className="background">
        <Nav setTheme={setTheme} theme={theme} />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
