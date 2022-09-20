import { Button, Col } from "bootstrap";
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Form, useParams } from "react-router-dom";
import { updateProfileAction } from "../redux/actions";

const FormComponentPutRequest = () => {
    const [data, setData] = useState(null);
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => dispatch(updateProfileAction(data)));

    const handleSubmit = () => {};

    return (
        <Container>
            <Row>
                {/* <Col xs={12} md={6}> */}
                <Col>
                    <Form className="text-left" onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Company</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your Name"
                                value={data.name}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        name: e.target.value,
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
                            Invia
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default FormComponentPutRequest;
