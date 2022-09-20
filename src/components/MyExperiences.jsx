import { Card } from "react-bootstrap/esm";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/myExperience.css";
import { HiOutlinePencil } from "react-icons/hi";

const MyExperiences = () => {
  return (


    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <div id="experience-container">
            <h4>Esperienza </h4> 
            <div>Role</div>
            <div>Company</div>
            <div>Duration</div>
            <div>Area</div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              veniam mollitia alias ratione, facilis a iusto assumenda!
              Assumenda consequuntur excepturi eligendi fugiat temporibus odit
              dolorem praesentium repellat mollitia, pariatur aut.
            </p>
          </div>
        </Col>
      </Row>
    </Container>

    //   <Container>
    //     <Row>
    //       <Col>
    //         <Card className="experience-card">
    //           <Card.Body>
    //             <Card.Title>Special title treatment</Card.Title>
    //             <Card.Text >
    //               With supporting text below as a natural lead-in to additional
    //               content.
    //             </Card.Text>

    //             <div>

    //             </div>

    //         <hr />

    //         <Card.Title>Special title treatment</Card.Title>
    //             <Card.Text >
    //               With supporting text below as a natural lead-in to additional
    //               content.
    //             </Card.Text>

    //           </Card.Body>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Container>
  );
};

export default MyExperiences;
