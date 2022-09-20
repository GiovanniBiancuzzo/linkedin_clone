import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';



function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
      </div>
    </BrowserRouter>
  );
}

export default App;