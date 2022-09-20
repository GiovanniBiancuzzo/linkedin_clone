import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import MyCustomProfile from "./components/MyCustomProfile";
import MyExperiences from "./components/MyExperiences";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <MyCustomProfile />
        <MyExperiences/>
      </div>
    </BrowserRouter>
  );
}

export default App;
