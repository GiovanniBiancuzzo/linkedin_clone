import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import HomeComponent from "./components/HomeComponent";
import MyCustomProfile from "./components/MyCustomProfile";
import NotFoundComponent from './components/NotFoundComponent';
import SidebarRight from './components/SidebarRight';
import { Col, Container, Row } from 'react-bootstrap';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App () {
  return (
    <BrowserRouter>
      <Row className="App">
        <MyNavbar />
        <Container >
          <Row>
            <Routes>
              <Route path='/' element={<HomeComponent />} />
              <Route path='/profile' element={<MyCustomProfile />} />
              <Route path='*' element={<NotFoundComponent />} />
            </Routes>
            <Col lg={3}><SidebarRight /></Col>
          </Row>
        </Container>
        <Footer />
      </Row>
    </BrowserRouter>
  );
}

export default App;
