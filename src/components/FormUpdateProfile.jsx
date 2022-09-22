import { useState, useEffect } from "react";
import { Container, Row, Button, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateProfileAction } from "../redux/actions";

const FormUpdateProfile = ({ profile }) => {
    const [data, setData] = useState({
        name: profile.name,
        surname: profile.surname,
        email: profile.email,
        bio: profile.bio,
        title: profile.title,
        area: profile.area,
    });
    const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("update profile");
        dispatch(updateProfileAction(data));
    };

    // useEffect(() => dispatch(updateProfileAction(data)));

    return (
        <Container>
            <Row>
                {/* <Col xs={12} md={6}> */}
                <Col>
                    <Form className="text-left" onSubmit={handleUpdate}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
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
                            <Form.Label>Surname</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your surname"
                                value={data.surname}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        surname: e.target.value,
                                    });
                                }}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={data.title}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        title: e.target.value,
                                    });
                                }}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={data.email}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        email: e.target.value,
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

                        <Form.Group>
                            <Form.Label>Bio</Form.Label>
                            <Form.Control
                                type="textarea"
                                rows={3}
                                placeholder="Enter bio"
                                value={data.bio}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        bio: e.target.value,
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

export default FormUpdateProfile;