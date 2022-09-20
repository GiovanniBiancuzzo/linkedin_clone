import { useEffect, useState } from "react";
import { Button, Col, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createExperienceAction, getExperiencesAction } from "../redux/actions";
import ExperienceForm from "./ExperienceForm";
import SingleExperience from "./SingleExperience";

const ExperiencesComponent = () => {
    const experiences = useSelector((state) => state.experience.experiences); // recupero delle experiences dallo store
    const userID = "me"; //o qualunque id
    const userIDPierdomenico = "5fc4da7fed266800170ea3e5"; //o qualunque id

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const showModal = () => setShow(!show);

    const handleCreate = () => {};

    useEffect(() => {
        dispatch(getExperiencesAction(userIDPierdomenico)); // si caricano in store tutte le experiences
        // in base all'id selezionato, si setta un profilo attuale
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Button onClick={showModal}>Aggiungi esperienza</Button>
            <Col>
                {experiences &&
                    experiences.map((experience) => (
                        <SingleExperience
                            key={experience._id}
                            userID={experience.user}
                            experience={experience}
                        />
                    ))}
            </Col>

            <Modal centered show={show} onHide={showModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Crea esperienza</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ExperienceForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={showModal}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleCreate}>
                        Elimina
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ExperiencesComponent;
