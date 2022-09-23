import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdPersonAddAlt1 } from "react-icons/md";
import { Button, Col, Image, Row } from "react-bootstrap";
import { AiFillSketchSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebarleft = () => {
    const profile = useSelector((state) => state.profile.actualProfile);

    return (
        <Col md={3} lg={3}>
            <Row
                style={{
                    position: "sticky",
                    top: "125px",
                }}
            >
                <Card style={{ width: "15rem" }} className="Cardside">
                    <Card.Header className="cardheader">
                        <img
                            src="https://i.pinimg.com/736x/9d/64/ea/9d64eabe1a8e84fd246ade05b727ed6f.jpg"
                            alt=""
                            className="imgsideprofile"
                        />
                        <Image
                            className="imgsidebar"
                            src={profile.image}
                            roundedCircle
                            width={"68px"}
                        />

                        <h5>
                            <b>
                                <Link
                                    to="/profile"
                                    style={{
                                        color: "#212529",
                                    }}
                                >
                                    {profile.name} {profile.surname}
                                </Link>
                            </b>
                        </h5>
                        <h6>{profile.title}</h6>
                    </Card.Header>

                    <ListGroup variant="flush" className="listgroup">
                        <ListGroup.Item id="list__group">
                            <p>Collegamenti</p>
                            <p>
                                <b>Espandi la tua rete</b> <MdPersonAddAlt1 />
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item id="list__group" className="listgroup2">
                            <p>
                                Accedi a strumenti e informazioni in esclusiva
                            </p>
                            <p>
                                <Button variant="link" className="link-p">
                                    <AiFillSketchSquare
                                        size="20"
                                        className="premiumicons"
                                    />{" "}
                                    Prova premium gratis
                                </Button>
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item id="list__group">
                            <p>
                                {" "}
                                <BsFillBookmarkFill className="iconsbook" />{" "}
                                <b>I miei elementi</b>
                            </p>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>

                <Card style={{ width: "15rem" }} className="Cardside2">
                    <Button variant="link" className="link-c">
                        <b>Gruppi</b>
                    </Button>
                    <Button variant="link" className="link-c">
                        <b>Eventi</b>
                    </Button>
                    <Button variant="link" className="link-c">
                        <b>Hashtag seguiti</b>
                    </Button>
                    <hr />
                    <Button variant="link" className="link-d">
                        <b>Scopri di più</b>
                    </Button>
                </Card>
            </Row>
        </Col>
    );
};

export default Sidebarleft;
