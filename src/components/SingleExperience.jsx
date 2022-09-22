import { useState } from "react";
import { Badge, Button, Card, Col, Image, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
    deleteExperienceAction,
    updateExperienceAction,
} from "../redux/actions";
import ExperienceForm from "./ExperienceForm";
import { format } from "date-fns";
import { HiOutlinePencil } from "react-icons/hi";

const SingleExperience = ({ experience }) => {
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    const showModal = () => setShow(!show);

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteExperienceAction(experience));
        setShow(false);
    };

    return (
        <>
            <Modal centered show={show} onHide={showModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifica esperienza</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ExperienceForm
                        update={updateExperienceAction}
                        experience={experience}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={showModal}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Elimina
                    </Button>
                </Modal.Footer>
            </Modal>

            <div id="experience-container">
                <Row>
                    <Col xs={6}>
                        <div className="d-flex justify-content-between">
                            <h4>{experience.company} </h4>
                        </div>
                        <div>Role: {experience.role}</div>
                        {experience.endDate ? (
                            <div>
                                Duration: from{" "}
                                {format(new Date(experience.endDate), "PP")} to{" "}
                                {format(new Date(experience.startDate), "PP")}
                            </div>
                        ) : (
                            <div>
                                Start date:{" "}
                                {format(new Date(experience.startDate), "PP")}
                            </div>
                        )}
                        <div>Area: {experience.area}</div>
                        <p>Description: {experience.description}</p>
                    </Col>
                    <Col xs={5}>
                        <Image src={experience.image} width={"20px"}></Image>
                    </Col>
                    <Col xs={1}>
                        <Button
                            onClick={showModal}
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                            }}
                        >
                            <HiOutlinePencil style={{ textAlign: "end" }} />
                        </Button>{" "}
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default SingleExperience;
