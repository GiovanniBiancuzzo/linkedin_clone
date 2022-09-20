import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";
import profliePic from "../assets/d9569bbed4393e2ceb1af7ba64fdf86a.jpg";
import {HiOutlinePencil} from 'react-icons/hi';





const MyCustomProfile = () => {





  return (
    
      <Container>
        <Row>
          <Col className="profile-section">
            <div className="profile-details">
            <Image src ="" alt=""/>
              <Image id="profile-pic" src={profliePic} roundedCircle   />
            
              <div className="name">Name Surname  <HiOutlinePencil className="pencil-icon float-right"/> </div>
              <div>Title</div>
              <div>Area</div>

              <Button className="bottone">Disponibile per</Button>
            </div>
          </Col>
        </Row>
      </Container>
    
  );
};

export default MyCustomProfile;
