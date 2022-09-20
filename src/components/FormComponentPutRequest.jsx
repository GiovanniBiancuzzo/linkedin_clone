import { Button, Col } from "bootstrap";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form, useParams } from "react-router-dom";
import { updateProfileAction } from "../redux/actions";

const FormComponentPutRequest = () => {
    const [data, setData] = useState(null);
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => dispatch(updateProfileAction(data)));

    return (
        <Col>
            {/* <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> */}
        </Col>
    );
};

export default FormComponentPutRequest;
