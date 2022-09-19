import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FetchProfileFeature from './components/FetchProfileFeature';
import FormComponentPutRequest from './components/FormComponentPutRequest';
import NotFoundComponent from './components/NotFoundComponent';
import { Row, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function App () {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row className="App">
          <Routes>
            <Route path='/' element={<FetchProfileFeature />}></Route>
            <Route path='/form/:id' element={<FormComponentPutRequest />}></Route>
            <Route path='*' element={<NotFoundComponent />}></Route>
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
