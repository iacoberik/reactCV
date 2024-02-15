import { useState } from "react";
import ExperienceForm from "./ExperienceFrom";

const CvCreator = () => {
  const [experienceForms, setExperienceForms] = useState([]);
  const [expLength, setExpLength] = useState(0);
  console.log(experienceForms);

  const addExperience = () => {
    const newExperienceForms = [
      ...experienceForms,
      <ExperienceForm
        key={expLength}
        onRemove={() => removeExperienceForm(expLength)}
      />,
    ];
    setExperienceForms(newExperienceForms);
    setExpLength(expLength + 1);
  };

  const removeExperienceForm = (indexToRemove) => {
    const newExperienceForms = experienceForms.filter(
      (item) => item.key !== indexToRemove
    );
    setExperienceForms(newExperienceForms);
  };

  return (
    <section className="cv-creator">
      <h2 className="heading">Create Your CV from here</h2>
      <div className="form-container">
        <div className="about-form">
          <h3>About you</h3>
          <label htmlFor="fullname" className="info-form">
            Your Fullname*
          </label>
          <input id="fullname" type="text" placeholder="Alex Drysdale"></input>
          <label htmlFor="birthday" className="info-form">
            Birthday*
          </label>
          <input id="birthday" type="date" className="block"></input>
          <label htmlFor="email" className="info-form">
            Your email*
          </label>
          <input
            id="email"
            type="text"
            placeholder="alexdrysdale@gmail.com"
          ></input>
          <labe htmlFor="about" className="info-form">
            Short or long description about you. Fell free to eat bullshit.*
          </labe>
          <textarea
            id="about"
            name="about-input"
            placeholder="My name is Alex Drysdale and I am a junior web developer for Oswald Technologies. I am an accomplished coder and..."
          ></textarea>
        </div>
        <div className="experince-form">
          <h3>Your Experince</h3>
          {experienceForms.map((form) => (
            <div key={form.key}>
              {form}
              <button
                className="primary-btn"
                onClick={() => removeExperienceForm(form.key)}
              >
                Remove Experience
              </button>
            </div>
          ))}
          <button className="primary-btn" onClick={addExperience}>
            Add Experince
          </button>
          <label></label>
        </div>
        <div className="education-form">
          <h3>Your Education</h3>
          <label></label>
        </div>
      </div>
      <button className="primary-btn submit">Submit CV</button>
    </section>
  );
};

export default CvCreator;