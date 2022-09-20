import { useState } from "react";
import { Form, Button, Col, Row, Container, Modal } from "react-bootstrap";
import { updateExperienceAction } from "../redux/actions";

const ExperienceForm = ({ experience }) => {
    const [data, setData] = useState({
        area: "", //   experience.area,
        company: "", //     experience.company,
        description: "", //     experience.description,
        role: "", //  experience.role,
        startDate: "", //      experience.startDate,
        endDate: "", //      experience.endDate,
    });

    const handleUpdate = (e) => {
        e.preventDefault();
        updateExperienceAction(experience, data);
    };

    return (
        // <div>
        <Container>
            <Row>
                {/* <Col xs={12} md={6}> */}
                <Col>
                    <Form className="text-left" onSubmit={handleUpdate}>
                        <Form.Group>
                            <Form.Label>Company</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your Company's Name"
                                value={data.company}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        company: e.target.value,
                                    });
                                }}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your Role"
                                value={data.role}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        role: e.target.value,
                                    });
                                }}
                            />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group>
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="Enter Date"
                                    value={data.startDate}
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            startDate: e.target.value,
                                        });
                                    }}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>End Date(or expected)</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="Enter Date"
                                    value={data.endDate}
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            endDate: e.target.value,
                                        });
                                    }}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                as="textarea"
                                rows={2}
                                value={data.description}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        description: e.target.value,
                                    });
                                }}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Area</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your Area"
                                value={data.area}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        area: e.target.value,
                                    });
                                }}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

        //     <Modal>
        //        <Modal.Header closeButton>
        //            <Modal.Title>Modal heading</Modal.Title>
        //        </Modal.Header>
        //        <Modal.Body>
        //            Woohoo, you're reading this text in a modal!
        //        </Modal.Body>
        //        <Modal.Footer>
        //            <Button variant="secondary">Close</Button>
        //            <Button variant="primary">Save Changes</Button>
        //        </Modal.Footer>
        //    </Modal>
        //</div>
    );
};

export default ExperienceForm;
