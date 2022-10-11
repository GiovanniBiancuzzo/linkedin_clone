import { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createExperienceAction, getExperiencesAction } from "../redux/actions";
import ExperienceForm from "./ExperienceForm";
import SingleExperience from "./SingleExperience";
import "../styles/myExperience.css";

const ExperiencesComponent = () => {
    const experiences = useSelector((state) => state.experience.experiences); // recupero delle experiences dallo store
    const loadedExperiences = useSelector((state) => state.experience.loading);
    const errorExperiences = useSelector((state) => state.experience.error);
    const userID = "me"; //mio id

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const showModal = () => setShow(!show);

    useEffect(() => {
        dispatch(getExperiencesAction(userID)); // si caricano in store tutte le experiences
        // in base all'id selezionato, si setta un profilo attuale
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Row className="justify-content-around my-3">
                <Button onClick={showModal} className="experience-button">
                    Aggiungi esperienza
                </Button>
            </Row>
            <Row>
                <Col>
                    {!loadedExperiences ? (
                        !errorExperiences &&
                        experiences.map((experience) => (
                            <SingleExperience
                                key={experience._id}
                                userID={experience.user}
                                experience={experience}
                            />
                        ))
                    ) : (
                        <Spinner
                            animation="grow"
                            variant="primary"
                            style={{ width: "60px", height: "60px" }}
                        />
                    )}
                </Col>
            </Row>
            {
                //visualizzazione delle esperienze con spinner per il loading
            }
            <Modal centered show={show} onHide={showModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Crea esperienza</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ExperienceForm
                        create={createExperienceAction}
                        showModal={showModal}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={showModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {
                //modale per la creazione delle esperienze
            }
        </>
    );
};

export default ExperiencesComponent;
