import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../../Assets/Image/project-img1.png";
import projImg2 from "../../Assets/Image/project-img2.png";
import projImg3 from "../../Assets/Image/project-img3.png";
import colorSharp2 from "../../Assets/Image/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ProjectTab from "./ProjectTab";
const Projects = () => {
  return (
    <section className="project" id="project">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
              <h2>Projects</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <ProjectTab />
            </div>}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2}></img>
  </section>
  )
}

export default Projects