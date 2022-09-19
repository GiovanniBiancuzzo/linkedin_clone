import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";
import profliePic from "../assets/d9569bbed4393e2ceb1af7ba64fdf86a.jpg";
import {HiOutlinePencil} from 'react-icons/hi';





const MyCustomProfile = () => {





  return (
    <div>
      <Container>
        <Row>
          <Col className="profile-section">
            <div className="profile-details">
            <Image src ="" alt=""/>
              <Image id="profile-pic" src={profliePic} roundedCircle   />
            
              <div className="name">Name Surname  <HiOutlinePencil /> </div>
              <div>Title</div>
              <div>Area</div>

              <Button className="bottone">CLICK ME</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyCustomProfile;
