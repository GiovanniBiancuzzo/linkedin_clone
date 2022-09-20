import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";
import profliePic from "../assets/d9569bbed4393e2ceb1af7ba64fdf86a.jpg";
import { HiOutlinePencil } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getActualProfileAction, getProfilesAction } from "../redux/actions";

const MyCustomProfile = () => {
    const profile = useSelector((state) => state.profile.actualProfile);
    const userID = "me";

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfilesAction()); // si caricano in store tutti i profili
        dispatch(getActualProfileAction(userID)); // in base all'id selezionato, si setta un profilo attuale
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Container>
            <Row>
                {profile && (
                    <Col className="profile-section">
                        <div className="profile-details">
                            <Image src="" alt="" />
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
                                <HiOutlinePencil className="pencil-icon float-right" />{" "}
                            </div>
                            <div>Titolo: {profile.title}</div>
                            <div>Area: {profile.area}</div>
                            <Button className="bottone">Disponibile per</Button>
                        </div>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default MyCustomProfile;
