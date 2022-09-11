import meter1 from "../../Assets/Image/meter1.svg";
import meter2 from "../../Assets/Image/meter2.svg";
import meter3 from "../../Assets/Image/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../../Assets/Image/arrow1.svg";
import arrow2 from "../../Assets/Image/arrow2.svg";
import colorSharp from "../../Assets/Image/color-sharp.png";
import SkillsTab from "./SkillsTab";
const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <SkillsTab />
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;
