import { useEffect } from "react";
import { Col, Spinner } from "react-bootstrap";
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
        <Col sm={9}>
            <FormPostComponent />
            {!postLoading ? (
                <Col>
                    {posts.map((post) => (
                        <SinglePostComponent key={post._id} post={post} />
                    ))}
                </Col>
            ) : (
                <Spinner
                    animation="grow"
                    variant="primary"
                    className="loadingSpinner"
                />
            )}
        </Col>
    );
};

export default PostFeatureComponent;
