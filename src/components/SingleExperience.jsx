import { useState } from "react";
import { Badge, Button, Card, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
    deleteExperienceAction,
    updateExperienceAction,
} from "../redux/actions";
import ExperienceForm from "./ExperienceForm";

const SingleExperience = ({ experience }) => {
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    const showModal = () => setShow(!show);

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteExperienceAction(experience));
        setShow(false);
    };

    return (
        <>
            <Modal centered show={show} onHide={showModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifica esperienza</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ExperienceForm
                        update={updateExperienceAction}
                        experience={experience}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={showModal}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Elimina
                    </Button>
                </Modal.Footer>
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
                </Card.Body>
            </Card>
        </>
    );
};

export default SingleExperience;
