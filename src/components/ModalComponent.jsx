import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { updateExperienceAction } from "../redux/actions";

const ModalComponent = (props) => {
    const [show, setShow] = useState(true);
    const [data, setData] = useState({
        area: "",
        company: "",
        description: "",
        role: "",
        startDate: "",
        endDate: "",
    });

    const showModal = () => setShow(!show);

    const handleUpdate = (e) => {
        e.preventDefault();
        updateExperienceAction(props.experience, data);
    };

    return (
        <>
            <Form.Group controlId="formGridEmail">
                <Form.Label>Compagnia</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Modifica nome compagnia"
                    value={data.company}
                    onChange={(e) => {
                        setData({
                            ...data,
                            company: e.target.value,
                        });
                    }}
                />
            </Form.Group>
            <Form.Group controlId="formGridPassword">
                <Form.Label>Ruolo</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Modifica il tuo ruolo"
                    value={data.role}
                    onChange={(e) => {
                        setData({
                            ...data,
                            role: e.target.value,
                        });
                    }}
                />
            </Form.Group>
            <Form.Row>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Inizio</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Data d'inizio"
                        value={data.startDate}
                        onChange={(e) => {
                            setData({
                                ...data,
                                startDate: e.target.value,
                            });
                        }}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridAddress2">
                <Form.Label>Area</Form.Label>
                <Form.Control
                    placeholder="Svolto a"
                    value={data.area}
                    onChange={(e) => {
                        setData({
                            ...data,
                            area: e.target.value,
                        });
                    }}
                />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
                <Form.Label>Descrizione</Form.Label>
                <Form.Control
                    placeholder="Svolto a"
                    value={data.description}
                    onChange={(e) => {
                        setData({
                            ...data,
                            description: e.target.value,
                        });
                    }}
                />
            </Form.Group>
        </>
    );
};

export default ModalComponent;
