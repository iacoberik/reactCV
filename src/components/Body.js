import CvCreator from "./CvCreator";
import CvInfo from "./CvInfo";

const Body = () => {
  return (
    <div className="pane-content">
      <div className="body-content">
        <CvCreator />
        <CvInfo />
      </div>
    </div>
  );
};

export default Body;
