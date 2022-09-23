import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaHome } from "react-icons/fa";
import { BsPeopleFill, BsGrid3X3GapFill } from "react-icons/bs";
import { MdWork, MdNotifications } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Form, Button, Image, Col } from "react-bootstrap";

function MyNavbar() {
    const profile = useSelector((state) => state.profile.actualProfile);
    const navigate = useNavigate();

    return (
        <Col
            style={{
                position: "sticky",
                top: "0px",
                zIndex: "99",
            }}
        >
            <Navbar collapseOnSelect bg="#fff" className="navbar">
                <Link to="/">
                    <Navbar.Brand xs={5}>
                        <img
                            src="https://packagingspace.net/files/chunks/5d03ab97a0d5566f83000237/5d03aba5a0d5566f83000238.png"
                            alt=""
                            id="imglink"
                        />
                    </Navbar.Brand>
                </Link>
                <Button variant="outline-success">Search</Button>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    id="searchBar"
                    aria-label="Search"
                />
                <Container xs={7} className="ms-auto" id="Container">
                    <section className="ml-auto">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link
                                    href="#features"
                                    id="link"
                                    to="/"
                                    className="ms-3 mt-1"
                                >
                                    <FaHome id="icona" size={22} /> <p>Home</p>
                                </Link>
                                <Link
                                    href="#pricing"
                                    id="link"
                                    to="/"
                                    className="ms-3 mt-1"
                                >
                                    {" "}
                                    <BsPeopleFill id="icona" size={22} />{" "}
                                    <p>Rete</p>
                                </Link>

                                <Link
                                    href="#deets"
                                    id="link"
                                    to="/"
                                    className="ms-3 mt-1"
                                >
                                    {" "}
                                    <MdWork id="icona" size={22} />{" "}
                                    <p>Lavoro</p>
                                </Link>
                                <Link
                                    id="link"
                                    href="#memes"
                                    to="/"
                                    className="ms-3 mt-1"
                                >
                                    {" "}
                                    <AiFillMessage id="icona" size={22} />{" "}
                                    <p>Messaggistica</p>
                                </Link>
                                <Link to="/" id="link" className="ms-3 mt-1">
                                    <MdNotifications id="icona" size={22} />{" "}
                                    <p>Notifiche</p>
                                </Link>

                                <div className="IconTu">
                                    <Image
                                        src={profile.image}
                                        roundedCircle
                                        width={"25px"}
                                    />
                                    {/* <CgProfile id="icona" size={30} /> */}
                                    <NavDropdown
                                        title={profile.name}
                                        id="collasible-nav-dropdown"
                                    >
                                        <NavDropdown.Item
                                            onClick={() => navigate("/profile")}
                                        >
                                            <Image
                                                src={profile.image}
                                                roundedCircle
                                                width={"45px"}
                                            />
                                            <h6>
                                                {profile.name} {profile.surname}
                                            </h6>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item>
                                            <h5>Account</h5>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.0">
                                            Prova premium gratis
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">
                                            Impostazioni e privacy
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Guida
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">
                                            Lingua
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Esci
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </div>

                                <div className="iconLavoro">
                                    <BsGrid3X3GapFill id="icona" size={22} />
                                    <NavDropdown
                                        title="Lavoro"
                                        id="collasible-nav-dropdown"
                                    >
                                        <NavDropdown.Item href="#action/3.1">
                                            Action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">
                                            Something
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Esci
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                                <Button variant="link" className="link-p">
                                    Prova premium gratis
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </section>
                </Container>
            </Navbar>
        </Col>
    );
}

export default MyNavbar;
