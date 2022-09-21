import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import MyCustomProfile from "./components/MyCustomProfile";
import Home from "./components/Home";
import Sidebarleft from "./components/Sidebarleft";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <Sidebarleft/>
        <MyCustomProfile />
      </div>
    </BrowserRouter>
  );
}

export default App;
