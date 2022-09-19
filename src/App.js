import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyCustomProfile from './components/MyCustomProfile';

function App () {
  return (
    <BrowserRouter>
      <div className="App">
       <MyCustomProfile/>
      </div>
    </BrowserRouter>
  );
}

export default App;
