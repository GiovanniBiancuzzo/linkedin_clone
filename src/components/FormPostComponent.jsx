import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createPostAction } from "../redux/actions";

const FormPostComponent = () => {
    const [data, setData] = useState({
        text: "",
    });
    const dispatch = useDispatch();

    const handleCreate = (e) => {
        e.preventDefault();
        console.log("update post");
        dispatch(createPostAction(data));
        setData({
            text: "",
        });
    };

    return (
        <Form onSubmit={handleCreate}>
            <Form.Group>
                <Form.Label>Crea un post!</Form.Label>
                <Form.Control
                    type="textarea"
                    as="textarea"
                    rows={2}
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
                Crea
            </Button>
        </Form>
    );
};

export default FormPostComponent;
