import { useEffect } from "react";
import {
    Accordion,
    Card,
    Col,
    ListGroup,
    ListGroupItem,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToListAction, getProfileAction } from "../redux/actions";

const FetchProfileFeature = () => {
    const profile = useSelector((state) => state.profile.actualProfile); // recupero di un profilo dallo store
    const userID = "me"; //o qualunque id

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(addToListAction()); // si caricano in store tutti i profili
        dispatch(getProfileAction(userID)); // in base all'id selezionato, si setta un profilo attuale
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
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
                        <ListGroupItem>Email: {profile.email}</ListGroupItem>
                        <ListGroupItem>Nazione: {profile.area}</ListGroupItem>
                    </ListGroup>
                    <br></br>
                    <Card.Body>
                        <Card.Link
                            onClick={() => navigate(`/form/${profile._id}`)}
                        >
                            Modifica utente
                        </Card.Link>
                    </Card.Body>
                </Card>
            )}
        </Col>
    );
};

export default FetchProfileFeature;
