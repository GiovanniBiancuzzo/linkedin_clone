import { useEffect } from "react";
import { Col, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction } from "../redux/actions";
import FormPostComponent from "./FormPostComponent";
import PostCard from "./PostCard";

const PostsComponent = () => {
    const posts = useSelector((state) => state.post.posts);
    const errorPosts = useSelector((state) => state.post.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("dispatch della action per recuperare i post");
        dispatch(getPostsAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Col sm={6}>
            <div>
                <FormPostComponent />
                {errorPosts ? (
                    posts && (
                        <Col>
                            {posts.map((post) => (
                                <PostCard key={post._id} post={post} />
                            ))}
                        </Col>
                    )
                ) : (
                    <Spinner
                        animation="grow"
                        variant="primary"
                        style={{ width: "60px", height: "60px" }}
                    />
                )}
            </div>
        </Col>
    );
};

export default PostsComponent;
