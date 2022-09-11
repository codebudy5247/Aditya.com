
import "animate.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FrontendSkills from "./FrontendSkills";
import BackenfdSkills from "./BackenfdSkills";
import Tools from "./Tools";
const SkillsTab = () => {
  
  return (
    <>
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="Frontend" title="Frontend">
         <FrontendSkills />
        </Tab>
        <Tab eventKey="Backend" title="Backend">
         <BackenfdSkills />
        </Tab>
        <Tab eventKey="Tools" title="Tools">
          <Tools />
        </Tab>
      </Tabs>
    </>
  );
};

export default SkillsTab;
