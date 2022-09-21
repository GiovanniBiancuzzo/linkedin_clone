import { useEffect, useState } from "react";
import {
    Accordion,
    Button,
    Modal,
    Card,
    Col,
    ListGroup,
    ListGroupItem,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
    getProfilesAction,
    getActualProfileAction,
    updateProfileAction,
} from "../redux/actions";
import FormUpdateProfile from "./FormUpdateProfile";

const FetchProfileFeature = () => {
    const profile = useSelector((state) => state.profile.actualProfile); // recupero di un profilo dallo store
    const userID = "6328189d6d79a500150902e7"; //mio id

    const [show, setShow] = useState(false);
    const showModal = () => setShow(!show);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfilesAction()); // si caricano in store tutti i profili
        dispatch(getActualProfileAction(userID)); // in base all'id selezionato, si setta un profilo attuale
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Col>
                {profile && (
                    <Card style={{ width: "18rem" }}>
                        <Card.Img
                            variant="top"
                            width={"50px"}
                            src={profile.image}
                        />
                        <Card.Body>
                            <Card.Title>
                                {profile.name} {profile.surname}
                            </Card.Title>

                            <Card.Text>{profile.title}</Card.Text>
                        </Card.Body>

                        <Accordion>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    ⬇ Bio ⬇
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>{profile.bio}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <br></br>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                Email: {profile.email}
                            </ListGroupItem>
                            <ListGroupItem>
                                Nazione: {profile.area}
                            </ListGroupItem>
                        </ListGroup>
                        <br></br>
                        <Card.Body>
                            <Card.Link onClick={showModal}>
                                Modifica utente
                            </Card.Link>
                        </Card.Body>
                    </Card>
                )}
            </Col>

            <Modal centered show={show} onHide={showModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifica profilo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormUpdateProfile />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={showModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default FetchProfileFeature;
