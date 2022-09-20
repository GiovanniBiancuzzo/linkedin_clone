import { Form, Button, Col, Row, Container,Modal } from "react-bootstrap";

const ExperienceForm = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Form className="text-left">
              <Form.Group>
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Company's Name"
                />
              </Form.Group>

              <Form.Group >
                <Form.Label>Role</Form.Label>
                <Form.Control type="text" placeholder="Enter your Role" />
              </Form.Group>

              <Form.Group >
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" placeholder="Enter Date" />
              </Form.Group>

              <Form.Group >
                <Form.Label>End Date(or expected)</Form.Label>
                <Form.Control type="date" placeholder="Enter Date" />
              </Form.Group>

              <Form.Group >
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" as="textarea" rows={2} />
              </Form.Group>

              <Form.Group >
                <Form.Label>Area</Form.Label>
                <Form.Control type="text" placeholder="Your Area" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Modal >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ExperienceForm;
