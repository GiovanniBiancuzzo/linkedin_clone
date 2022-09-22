import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createPostAction } from "../redux/actions";

const FormPostComponent = () => {
    const [data, setData] = useState({
        text: "",
    });
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const showModal = () => setShow(!show);

    const handleCreate = (e) => {
        e.preventDefault();
        console.log("update post");
        dispatch(createPostAction(data));
        setData({
            text: "",
        });
    };

    return (
        <>
            <div className="feed">
                <div className="feed-inputContainer">
                    <div className="feed-input">
                        <Button
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                width: "100%",
                                textAlign: "start",
                            }}
                            onClick={showModal}
                        >
                            Avvia un post
                        </Button>
                    </div>
                </div>
            </div>

            <Modal centered show={show} onHide={showModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Crea un post</Modal.Title>
                </Modal.Header>{" "}
                <Form onSubmit={handleCreate}>
                    <Modal.Body>
                        <Form.Control 
                            type="text"
                            as="textarea"
                            rows={2}
                            placeholder="Di che cosa vorresti parlare?"
                            value={data.text}
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    text: e.target.value,
                                });
                            }}
                            onClick={showModal}
                        />
                    </Modal.Body>
                    <a href="#">Aggiungi hashtag</a>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Pubblica
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

export default FormPostComponent;
