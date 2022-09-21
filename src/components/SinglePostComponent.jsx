import { useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePostAction, updatePostAction } from "../redux/actions";
import { format } from "date-fns";

const SinglePostComponent = ({ post }) => {
    const [data, setData] = useState({
        text: post.text,
    });
    const [showUpdate, setShowUpdate] = useState(false);
    const showUpdateModal = () => setShowUpdate(!showUpdate);
    const [showDelete, setShowDelete] = useState(false);
    const showDeleteModal = () => setShowDelete(!showDelete);

    const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("update post");
        dispatch(updatePostAction(post._id, data));
        showUpdateModal();
    };

    const handleDelete = (e) => {
        e.preventDefault();
        console.log("delete post");
        dispatch(deletePostAction(post._id));
        showDeleteModal();
    };

    return (
        <>
            <Card>
                <Card.Header>
                    <Row>
                        <Col>{post.username}</Col>
                        <Col>
                            <Card.Link onClick={showUpdateModal}>
                                Modifica
                            </Card.Link>
                            <Card.Link onClick={showDeleteModal}>
                                Elimina
                            </Card.Link>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>{post.text}</p>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">
                                Creato alle{" "}
                                {format(new Date(post.createdAt), "p P")}
                            </cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>

            <Modal centered show={showUpdate} onHide={showUpdateModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifica post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUpdate}>
                        <Form.Group>
                            <Form.Label>Post da modificare</Form.Label>
                            <Form.Control
                                type="textarea"
                                as="textarea"
                                rows={4}
                                placeholder="Edit your post"
                                value={data.text}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        text: e.target.value,
                                    });
                                }}
                            />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Conferma modifica
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={showUpdateModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal centered show={showDelete} onHide={showDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Elimina post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Sei sicuro di voler eliminare questo post?</p>
                    <Button
                        variant="danger"
                        type="button"
                        onClick={handleDelete}
                    >
                        Conferma modifica
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={showDeleteModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SinglePostComponent;
