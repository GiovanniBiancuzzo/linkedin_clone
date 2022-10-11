import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";
import { HiOutlinePencil } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getActualProfileAction, getProfilesAction } from "../redux/actions";
import FormUpdateProfile from "./FormUpdateProfile";
import ExperiencesComponent from "./ExperiencesComponent";

const MyCustomProfile = () => {
    const profile = useSelector((state) => state.profile.actualProfile);
    const IDGiovanni = "me"; //mio id

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
            <Col xs={12} lg={9}>
                <Row>
                    <Col className="profile-section">
                        <div className="profile-details">
                            {profile && (
                                <>
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
                                </>
                            )}{" "}
                        </div>
                    </Col>
                </Row>

                <ExperiencesComponent />
            </Col>

            <Modal centered show={show} onHide={showModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifica profilo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormUpdateProfile
                        profile={profile}
                        showModal={showModal}
                    />
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
