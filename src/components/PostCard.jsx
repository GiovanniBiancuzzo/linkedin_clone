import { GrLike } from "react-icons/gr";
import { BiCommentDetail, BiDotsVerticalRounded } from "react-icons/bi";
import { RiShareForwardLine, RiSendPlaneFill } from "react-icons/ri";

import "../styles/postCard.css";
import { useState } from "react";
import {
    Button,
    Col,
    Dropdown,
    Form,
    Image,
    Modal,
    Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
    deletePostAction,
    updatePostAction,
    uploadImagePostAction,
} from "../redux/actions";
import { format } from "date-fns";

const PostCard = ({ post }) => {
    const profiles = useSelector((state) => state.profile.profiles);
    const [data, setData] = useState({
        text: post.text,
    });
    const [showUpdate, setShowUpdate] = useState(false);
    const showUpdateModal = () => setShowUpdate(!showUpdate);
    const [showDelete, setShowDelete] = useState(false);
    const showDeleteModal = () => setShowDelete(!showDelete);

    const dispatch = useDispatch();
    const [dataImage, setDataImage] = useState(null);

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("update post");
        if (dataImage !== null) {
            const formData = new FormData();
            formData.append("post", {
                dataImage,
            });
            dispatch(uploadImagePostAction(post._id, formData));
        } else {
            dispatch(updatePostAction(post._id, data));
        }
        showUpdateModal();
    };

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deletePostAction(post._id));
        showDeleteModal();
    };

    return (
        <>
            <div className="post">
                <div className="d-flex justify-content-between post-body">
                    <Row>
                        <Col>
                            <Image
                                src={post.user.image}
                                rounded
                                width={"25px"}
                            ></Image>
                            <p>{post.username}</p>
                        </Col>
                    </Row>
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
                </div>
                <blockquote className="blockquote mb-0">
                    <p>{post.text}</p>
                    {post.image && (
                        <Image src={post.image} width={"100px"}></Image>
                    )}
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
                        <Form.Label>Post da modificare</Form.Label>
                        <Form.Group>
                            <div className=" m-2">
                                <Image src={data.image} width={"30px"}></Image>
                            </div>
                            <Form.Control
                                type="file"
                                placeholder="Upload your image"
                                accept="image"
                                onChange={(e) =>
                                    setDataImage(e.target.files[0])
                                }
                            />
                        </Form.Group>

                        <Form.Group>
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
                    </Button>{" "}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default PostCard;
