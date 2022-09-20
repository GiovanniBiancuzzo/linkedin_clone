import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import MyCustomProfile from "./components/MyCustomProfile";
import FetchExperienceFeature from "./components/FetchExperienceFeature";

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <MyCustomProfile />
        <FetchExperienceFeature />
      </div>
    </BrowserRouter>
  );
}

export default App;
