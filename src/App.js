import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import HomeComponent from "./components/HomeComponent";
import MyCustomProfile from "./components/MyCustomProfile";

import NotFoundComponent from './components/NotFoundComponent';
import ExperiencesComponent from "./components/ExperiencesComponent";
import PostCard from './components/PostCard';
import MyFeed from './components/MyFeed';
import Sidebarleft from './components/Sidebarleft';

function App () {
  return (
    <BrowserRouter>
      <div className="App">

        <MyNavbar />
        <Sidebarleft/>
        {/* <MyFeed/> */}

        <PostCard/>
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
