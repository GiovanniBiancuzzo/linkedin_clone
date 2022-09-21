import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction } from "../redux/actions";
import SinglePostComponent from "./SinglePostComponent";

const PostFeatureComponent = () => {
    const posts = useSelector((state) => state.post.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("dispatch della action per recuperare i post");
        dispatch(getPostsAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            {/*//todo: funzionalità aggiungi post}
             <Row></Row> */}
            {posts && (
                <Row>
                    {posts.map((post) => (
                        <SinglePostComponent key={post._id} post={post} />
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default PostFeatureComponent;
