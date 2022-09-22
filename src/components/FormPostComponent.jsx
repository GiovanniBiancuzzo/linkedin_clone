import { useState } from "react";
import { Button, Form, Image, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createPostAction, uploadImagePostAction } from "../redux/actions";

const FormPostComponent = () => {
    const [data, setData] = useState({
        text: "",
    });
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const showModal = () => setShow(!show);

    const [dataImage, setDataImage] = useState(null);
    const formData = new FormData();

    const handleCreate = (e) => {
        e.preventDefault();
        console.log("create post");
        dispatch(createPostAction(data, formData));
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
                        <Form.Group>
                            <div className=" m-2">
                                <Form.Label>Logo esperienza</Form.Label>
                                <Image src={data.image} width={"30px"}></Image>
                            </div>
                            <Form.Control
                                type="file"
                                placeholder="Upload your image"
                                // accept="image"
                                onChange={(e) => {
                                    console.log("onchange di upload");
                                    setDataImage(e.target.files[0]);
                                    formData.append("post", {
                                        dataImage,
                                    });
                                }}
                            />
                        </Form.Group>

                        <Form.Group>
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
                        </Form.Group>
                        <a href="#">Aggiungi hashtag</a>
                    </Modal.Body>
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
