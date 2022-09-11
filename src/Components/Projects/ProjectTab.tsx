import "animate.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
const ProjectTab = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="Web App" title="Web App">
        tab1
      </Tab>
      <Tab eventKey="Mobile App" title="Mobile App">
        tab2
      </Tab>
      <Tab eventKey="Dapp" title="DApp/Web3">
        tab3
      </Tab>
      {/* <Tab eventKey="contact" title="Contact">
      tab4
     
    </Tab> */}
    </Tabs>
  );
};

export default ProjectTab;
