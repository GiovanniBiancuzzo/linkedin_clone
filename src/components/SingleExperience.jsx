import { useState } from "react";
import { Badge, Button, Card, Form, Modal } from "react-bootstrap";
import {
    deleteExperienceAction,
    updateExperienceAction,
} from "../redux/actions";

const SingleExperience = ({ experience }) => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        area: "",
        company: "",
        description: "",
        role: "",
        startDate: "",
        user: "",
        userName: "",
    });

    const showModal = () => setShow(!show);
    // const showModal = () => setShow(true);

    const handleUpdate = (e) => {
        e.preventDefault();
        updateExperienceAction(experience, data);
    };
    const handleDelete = (e) => {
        e.preventDefault();
        deleteExperienceAction(experience);
    };

    return (
        <>
            <Modal centered show={show} onHide={showModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifica esperienza</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleUpdate}>
                    {" "}
                    <Modal.Body>
                        {" "}
                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Compagnia</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Modifica nome compagnia"
                                value={data.company}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        company: e.target.value,
                                    });
                                }}
                            />
                        </Form.Group>
                        <Form.Group controlId="formGridPassword">
                            <Form.Label>Ruolo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Modifica il tuo ruolo"
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
                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Inizio</Form.Label>
                                <Form.Control
                                    placeholder="Data d'inizio"
                                    value={data.startDate}
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            startDate: e.target.value,
                                        });
                                    }}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Area</Form.Label>
                            <Form.Control
                                placeholder="Svolto a"
                                value={data.area}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        area: e.target.value,
                                    });
                                }}
                            />
                        </Form.Group>
                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Descrizione</Form.Label>
                            <Form.Control
                                placeholder="Svolto a"
                                value={data.description}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        description: e.target.value,
                                    });
                                }}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={showModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleUpdate}>
                            Salva modifiche
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

            <Card>
                <Card.Header as="h5">{experience.company}</Card.Header>
                <Card.Body>
                    <Card.Title>
                        Ruolo: {experience.role}, dal{" "}
                        <Badge variant="primary">{experience.startDate}</Badge>
                    </Card.Title>
                    <Card.Text>{experience.description}</Card.Text>
                    <Button variant="primary" onClick={showModal}>
                        Modifica
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Elimina
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default SingleExperience;
