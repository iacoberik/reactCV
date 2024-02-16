import { useContext } from "react";
import CvContext from "../utils/CvContext";

export default function CvInfo() {
  const { about, education, experience } = useContext(CvContext);
  console.log(experience);
  return (
    <section className="cv-info">
      <h2 className="heading">Your CV Here</h2>
      <div className="py-4">
        {about.length !== 0 && (
          <div className="cv-info_item">
            {about.map((item) => (
              <p>About {item.name}</p>
            ))}
          </div>
        )}
        {experience.length !== 0 && (
          <div className="cv-info_item">
            {experience.map((item) => (
              <p>Experienta {item.company}</p>
            ))}
          </div>
        )}
        {education.length !== 0 && (
          <div className="cv-info_item">
            {education && education.map((item) => <p>Educatie {item.title}</p>)}
          </div>
        )}
      </div>
    </section>
  );
}
