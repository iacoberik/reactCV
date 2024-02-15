import { useContext } from "react";
import CvContext from "../utils/CvContext";

export default function CvInfo() {
  const { about, education, experience } = useContext(CvContext);
  return (
    <section className="cv-info">
      <h2 className="heading">Your CV Here</h2>
      {about && about.map((item) => <p>About {item}</p>)}
      {experience && experience.map((item) => <p>Experienta {item.company}</p>)}
      {education && education.map((item) => <p>Educatie {item}</p>)}
    </section>
  );
}
