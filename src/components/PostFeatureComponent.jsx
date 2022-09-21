import { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction } from "../redux/actions";
import FormPostComponent from "./FormPostComponent";
import SinglePostComponent from "./SinglePostComponent";

const PostFeatureComponent = () => {
    const posts = useSelector((state) => state.post.posts);
    const postLoading = useSelector((state) => state.post.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("dispatch della action per recuperare i post");
        dispatch(getPostsAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <FormPostComponent />
            {!postLoading ? (
                <Row>
                    {posts.map((post) => (
                        <SinglePostComponent key={post._id} post={post} />
                    ))}
                </Row>
            ) : (
                <Spinner
                    animation="grow"
                    variant="primary"
                    className="loadingSpinner"
                />
            )}
        </Container>
    );
};

export default PostFeatureComponent;
