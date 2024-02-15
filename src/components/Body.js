import { useState } from "react";
import CvContext from "../utils/CvContext";
import CvCreator from "./CvCreator";
import CvInfo from "./CvInfo";

const Body = () => {
  const [cvAbout, setCvAbout] = useState([]);
  const [cvExperience, setCvExperience] = useState([]);
  const [cvEducation, setCvEducation] = useState([]);

  return (
    <div className="pane-content">
      <div className="body-content">
        <CvContext.Provider
          value={{
            about: cvAbout,
            setCvAbout,
            experience: cvExperience,
            setCvExperience,
            education: cvEducation,
            setCvEducation,
          }}
        >
          <CvCreator />
          <CvInfo />
        </CvContext.Provider>
      </div>
    </div>
  );
};

export default Body;
