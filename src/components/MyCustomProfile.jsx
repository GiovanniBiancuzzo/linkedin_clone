import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";
import profliePic from "../assets/d9569bbed4393e2ceb1af7ba64fdf86a.jpg";
import { HiOutlinePencil } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getActualProfileAction, getProfilesAction } from "../redux/actions";
import FormUpdateProfile from "./FormUpdateProfile";
import ExperiencesComponent from "./ExperiencesComponent";

const MyCustomProfile = () => {
    const profile = useSelector((state) => state.profile.actualProfile);
    const IDGiovanni = "6328189d6d79a500150902e7"; //mio id

    const [show, setShow] = useState(false);
    const showModal = () => setShow(!show);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfilesAction()); // si caricano in store tutti i profili
        dispatch(getActualProfileAction(IDGiovanni)); // in base all'id selezionato, si setta un profilo attuale
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Container>
                <Row>
                    {profile && (
                        <Col className="profile-section">
                            <div className="profile-details">
                                <Image
                                    id="profile-pic"
                                    src={profile.image}
                                    roundedCircle
                                />
                                {
                                    //? aggiungiamo la bio? {profile.bio}
                                    //? aggiungiamo l'email? {profile.email}
                                }
                                <div className="name">
                                    {profile.name} {profile.surname}{" "}
                                    <HiOutlinePencil
                                        className="pencil-icon float-right"
                                        onClick={showModal}
                                    />{" "}
                                </div>
                                <div>Titolo: {profile.title}</div>
                                <div>Area: {profile.area}</div>
                                <Button className="bottone">
                                    Disponibile per
                                </Button>
                            </div>
                        </Col>
                    )}
                </Row>
                <ExperiencesComponent />
            </Container>

            <Modal centered show={show} onHide={showModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifica profilo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormUpdateProfile profile={profile} />
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

export default MyCustomProfile;
