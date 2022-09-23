import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BsInfoSquareFill } from "react-icons/bs";

function SidebarRight() {
    return (
        <Row
            style={{
                position: "sticky",
                top: "125px",
            }}
        >
            <Card
                style={{
                    width: "20rem",
                    height: "28rem",
                }}
                className="notiziecard0"
            >
                <Card.Body>
                    <Card.Title className="cardttl">
                        {" "}
                        <h5>LinkedIn Notizie</h5> <BsInfoSquareFill size={13} />
                    </Card.Title>
                    <Card.Text className="notiziecard" as="div">
                        <ul>
                            <li>
                                <h6 className="notiziah6">
                                    Ucraina: gli ultimi aggiornamenti
                                </h6>
                                <p>Notizie principali - 11.152 lettori</p>
                            </li>
                            <li>
                                <h6 className="notiziah6">
                                    Una nuova pagina per Spotify
                                </h6>
                                <p>2 ore fa</p>
                            </li>
                            <li>
                                <h6 className="notiziah6">
                                    Lo sprint dei family office italiani
                                </h6>
                                <p>3 ore fa</p>
                            </li>
                            <li>
                                <h6 className="notiziah6">
                                    Si è inceppata la transizione ecologica
                                </h6>
                                <p> 4 ore fa - 168 lettori</p>
                            </li>
                            <li>
                                <h6 className="notiziah6">
                                    Eataly passa a Investindustrial
                                </h6>
                                <p>8 ore fa - 368 lettori</p>
                            </li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    );
}

export default SidebarRight;
