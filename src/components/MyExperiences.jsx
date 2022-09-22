import { Container, Row } from "react-bootstrap";
import "../styles/myExperience.css";
import SingleExperience from "./SingleExperience";

const MyExperiences = ({ experiences }) => {
    return (
        <Container>
            <Row className="d-flex justify-content-center">
                {experiences.map((experience) => (
                    <SingleExperience
                        key={experience._id}
                        userID={experience.user}
                        experience={experience}
                    />
                ))}
            </Row>
        </Container>
    );
};

export default MyExperiences;
