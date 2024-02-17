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
            <h2 className="heading">About</h2>
            {about.map((item) => (
              <div className="mt-4">
                <p>{item.name}</p>
                <p>{item.birthday}</p>
                <p>{item.email}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        )}
        {experience.length !== 0 && (
          <div className="cv-info_item">
            <h2 className="heading">Experience</h2>
            {experience.map((item) => (
              <div className="mt-4">
                <p>{item.company}</p>
                <p>{item.startDate}</p>
                <p>{item.endDate}</p>
                <p>{item.post}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        )}
        {education.length !== 0 && (
          <div className="cv-info_item">
            <h2 className="heading">Education</h2>
            {education &&
              education.map((item) => (
                <div className="mt-4">
                  <p>{item.title}</p>
                  <p>{item.organisation}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
