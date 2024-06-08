import { Route, Routes } from "react-router-dom";
import "../App/App.scss"
import About from "../pages/AboutPage/AboutPage"
import Homepage from "../pages/Homepage/Homepage";
import TokenPage from "../pages/TokenPage/TokenPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/token" element={<TokenPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
    </div>
  );
}

export default App;
