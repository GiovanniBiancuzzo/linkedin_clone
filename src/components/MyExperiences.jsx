import { Container, Row } from "react-bootstrap";
import "../styles/myExperience.css";
import SingleExperience from "./SingleExperience";

const MyExperiences = ({ experiences }) => {
    return (
        <>
            {experiences.map((experience) => (
                <SingleExperience
                    key={experience._id}
                    userID={experience.user}
                    experience={experience}
                />
            ))}
        </>
    );
};

export default MyExperiences;
