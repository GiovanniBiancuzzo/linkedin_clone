import { GrLike } from "react-icons/gr";
import { BiCommentDetail, BiDotsVerticalRounded } from "react-icons/bi";
import { RiShareForwardLine, RiSendPlaneFill } from "react-icons/ri";

import "../styles/postCard.css";
import { useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePostAction, updatePostAction } from "../redux/actions";
import { format } from "date-fns";

const PostCard = ({ post }) => {
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
            <div className="post">
                {
                    //todo: serve un post header per l'autore dei post con pulsanti cancella
                }
                <div className="post-body">
                    <p>{post.username}</p>
                </div>
                <span>
                    {" "}
                    <Dropdown alignRight>
                        <Dropdown.Toggle
                            variant="secondary"
                            id="dropdown-basic"
                        >
                            {/* <BiDotsVerticalRounded />{" "} */}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={showUpdateModal}>
                                Modifica
                            </Dropdown.Item>
                            <Dropdown.Item onClick={showDeleteModal}>
                                Elimina
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </span>
                <blockquote className="blockquote mb-0">
                    <p>{post.text}</p>
                    <footer className="blockquote-footer">
                        <cite title="Source Title">
                            Creato alle{" "}
                            {format(new Date(post.createdAt), "p P")}
                        </cite>
                    </footer>
                </blockquote>
                <hr />
                <div className="post-buttons">
                    <span>
                        {" "}
                        <GrLike /> Like
                    </span>
                    <span>
                        {" "}
                        <BiCommentDetail /> Comment
                    </span>
                    <span>
                        {" "}
                        <RiShareForwardLine /> Share
                    </span>
                    <span>
                        {" "}
                        <RiSendPlaneFill /> Send
                    </span>
                </div>
            </div>

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

export default PostCard;
