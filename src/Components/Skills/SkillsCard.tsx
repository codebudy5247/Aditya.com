import ProgressBar from "react-bootstrap/ProgressBar";

const SkillsCard = () => {
  function WithLabelExample() {
    const now = 60;
    return <ProgressBar now={now} label={`${now}%`} />;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: "3%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div style={{ width: "40%" }}>
          {" "}
          <h5>HTML</h5>
        </div>
        <div style={{ width: "60%" }}>
          {" "}
          <h5>{WithLabelExample()}</h5>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div style={{ width: "40%" }}>
          {" "}
          <h5>HTML</h5>
        </div>
        <div style={{ width: "60%" }}>
          {" "}
          <h5>{WithLabelExample()}</h5>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div style={{ width: "40%" }}>
          {" "}
          <h5>HTML</h5>
        </div>
        <div style={{ width: "60%" }}>
          {" "}
          <h5>{WithLabelExample()}</h5>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
