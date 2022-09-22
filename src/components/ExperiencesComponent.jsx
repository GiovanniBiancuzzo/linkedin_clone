import { useEffect, useState } from "react";
import { Button, Col, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createExperienceAction, getExperiencesAction } from "../redux/actions";
import ExperienceForm from "./ExperienceForm";
import MyExperiences from "./MyExperiences";

const ExperiencesComponent = () => {
    const experiences = useSelector((state) => state.experience.experiences); // recupero delle experiences dallo store
    const loadedExperiences = useSelector((state) => state.experience.loading);
    const errorExperiences = useSelector((state) => state.experience.error);
    const userID = "6328189d6d79a500150902e7"; //mio id
    const userIDPierdomenico = "5fc4da7fed266800170ea3e5"; //o qualunque id

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
            <Button onClick={showModal}>Aggiungi esperienza</Button>
            <Col>
                {!loadedExperiences ? (
                    !errorExperiences && (
                        <MyExperiences experiences={experiences} />
                    )
                ) : (
                    <Spinner
                        animation="grow"
                        variant="primary"
                        style={{ width: "60px", height: "60px" }}
                    />
                )}
            </Col>
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
