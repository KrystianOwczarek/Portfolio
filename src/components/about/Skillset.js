import React from 'react';
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";

const Skillset = () => {
    return (
        <Container fluid className="about-section">
            <Container>
                <Techstack />
            </Container>
        </Container>
    )
}

export default Skillset;