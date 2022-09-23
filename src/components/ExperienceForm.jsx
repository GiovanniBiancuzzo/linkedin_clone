import { useEffect, useState } from "react";
import {
    Form,
    Button,
    Col,
    Row,
    Container,
    Modal,
    Image,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
    createExperienceAction,
    updateExperienceAction,
    uploadImageExperienceAction,
} from "../redux/actions";

const ExperienceForm = (props) => {
    const actualProfile = useSelector((state) => state.profile.actualProfile);
    const [data, setData] = useState({
        //! autoriempi i campi per l'update
        area: "", //   actualProfile.area,
        company: "", //     actualProfile.company,
        description: "", //     actualProfile.description,
        role: "", //  actualProfile.role,
        startDate: "", //      actualProfile.startDate,
        endDate: "", //      actualProfile.endDate,
        image: "",
    });

    const [dataImage, setDataImage] = useState(null);

    const dispatch = useDispatch();

    const handleCRUD = (e) => {
        e.preventDefault();

        if (dataImage !== null) {
            const formData = new FormData();
            formData.append("experience", dataImage);
            if (props.create) {
                console.log("create");
                dispatch(createExperienceAction(data, formData));
                // props.showModal
            } else if (props.update) {
                console.log("update");
                dispatch(updateExperienceAction(props.experience, data));
                // props.showModal;
            }
        }
    };

    return (
        <Container>
            <Row>
                {/* <Col xs={12} md={6}> */}
                <Col>
                    <Form className="text-left" onSubmit={handleCRUD}>
                        <Form.Group>
                            <div className=" m-2">
                                <Form.Label>Logo esperienza</Form.Label>
                                <Image src={data.image} width={"30px"}></Image>
                            </div>
                            <Form.Control
                                type="file"
                                placeholder="Upload your image"
                                // accept="image"
                                onChange={(e) => {
                                    setDataImage(e.target.files[0]);
                                }}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Company</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your Company's Name"
                                value={data.company}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        company: e.target.value,
                                    });
                                }}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your Role"
                                value={data.role}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        role: e.target.value,
                                    });
                                }}
                            />
                        </Form.Group>

                        <Form.Row className="justify-content-space-around">
                            <Form.Group>
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="Enter Date"
                                    value={data.startDate}
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            startDate: e.target.value,
                                        });
                                    }}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>End Date(or expected)</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="Enter Date"
                                    value={data.endDate}
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            endDate: e.target.value,
                                        });
                                    }}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                as="textarea"
                                rows={2}
                                value={data.description}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        description: e.target.value,
                                    });
                                }}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Area</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your Area"
                                value={data.area}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        area: e.target.value,
                                    });
                                }}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Invia esperienza
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ExperienceForm;
