import { Card } from "react-bootstrap";

const SinglePostComponent = ({ post }) => {
    return (
        <Card>
            <Card.Header>{post.username}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>{post.text}</p>
                    <footer className="blockquote-footer">
                        Creato alle{" "}
                        <cite title="Source Title">{post.createdAt}</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default SinglePostComponent;
