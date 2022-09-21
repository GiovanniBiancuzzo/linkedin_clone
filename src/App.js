import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import HomeComponent from "./components/HomeComponent";
import MyCustomProfile from "./components/MyCustomProfile";
import Home from "./components/Home";
import Sidebarleft from "./components/Sidebarleft";
import NotFoundComponent from './components/NotFoundComponent';

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <Sidebarleft/>
        <MyCustomProfile />
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/profile' element={<MyCustomProfile />} />
          <Route path='*' element={<NotFoundComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
