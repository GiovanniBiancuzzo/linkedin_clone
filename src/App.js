import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundComponent from './components/NotFoundComponent';
import { Row, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyCustomProfile from "./components/MyCustomProfile";
import ExperiencesComponent from "./components/ExperiencesComponent";
import PostCard from './components/PostCard';
import MyFeed from './components/MyFeed';

function App () {
  return (
    <BrowserRouter>
      <div className="App">

        <MyNavbar />
        {/* <MyFeed/> */}

        <PostCard/>
        <MyCustomProfile />
        <ExperiencesComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
