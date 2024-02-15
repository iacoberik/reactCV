import { useState, useContext } from "react";
import ExperienceForm from "./ExperienceFrom";
import CvContext from "../utils/CvContext";

const CvCreator = () => {
  // Define state variables to manage the list of experience forms and the length of the list
  const [expLength, setExpLength] = useState(0);
  const [experienceForms, setExperienceForms] = useState([]);
  const [aboutForms, setAboutForms] = useState(["test"]);
  const [educationForms, setEducationForms] = useState(["test educatie"]);
  const { setCvExperience, setCvAbout, setCvEducation } = useContext(CvContext);

  // Function to add a new experience form to the list
  const addExperience = () => {
    // Create a new experience form object with default values
    const newExperienceForms = [
      ...experienceForms,
      {
        key: expLength,
        company: "",
        startDate: "",
        endDate: "",
        post: "",
        description: "",
      },
    ];
    // Update the list of experience forms and increment the length counter
    setExperienceForms(newExperienceForms);
    setCvExperience(experienceForms);
    setExpLength(expLength + 1);
  };

  // Function to remove an experience form from the list
  const removeExperienceForm = (indexToRemove) => {
    // Filter out the experience form with the specified index
    const newExperienceForms = experienceForms.filter(
      (item) => item.key !== indexToRemove
    );
    // Update the list of experience forms
    setExperienceForms(newExperienceForms);
  };

  // Function to handle changes in input fields of an experience form
  const handleExperienceChange = (index, field, value) => {
    // Create a copy of the list of experience forms
    const newExperienceForms = [...experienceForms];
    // Update the value of the specified field in the specified experience form
    newExperienceForms[index][field] = value;
    // Update the list of experience forms
    if (
      newExperienceForms[index].startDate >= newExperienceForms[index].endDate
    ) {
      newExperienceForms[index].endDate = "";
    }
    setExperienceForms(newExperienceForms);
  };

  const handleExperienceSubmit = () => {
    setCvExperience(experienceForms);
    setCvAbout(aboutForms);
    setCvEducation(educationForms);
  };

  return (
    <section className="cv-creator">
      <h2 className="heading">Create Your CV from here</h2>
      <div className="form-container">
        {/* About you form */}
        <div className="about-form">
          <h3>About you</h3>
          {/* Input fields for personal information */}
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
        {/* Experience form */}
        <div className="experince-form">
          <h3>Your Experience</h3>
          {/* Render experience forms dynamically */}
          {experienceForms.map((form, index) => (
            <div key={form.key}>
              {/* Render each experience form component */}
              <ExperienceForm
                company={form.company}
                startDate={form.startDate}
                endDate={form.endDate}
                post={form.post}
                description={form.description}
                onRemove={() => removeExperienceForm(form.key)}
                onChange={(field, value) =>
                  handleExperienceChange(index, field, value)
                }
              />
            </div>
          ))}
          {/* Button to add a new experience form */}
          <button className="primary-btn" onClick={addExperience}>
            Add Experience
          </button>
          <label></label>
        </div>
        {/* Education form */}
        <div className="education-form">
          <h3>Your Education</h3>
          <label htmlFor="qualification" className="info-form">
            Title of qualification awarded*
          </label>
          <input
            id="qualification"
            type="text"
            placeholder="Title of qualification awarded"
          ></input>
          <label htmlFor="Organisation" className="info-form">
            Organisation providing education and training*
          </label>
          <input
            id="Organisation"
            type="text"
            placeholder="Organisation"
          ></input>
        </div>
      </div>
      {/* Button to submit the CV */}
      <button className="primary-btn submit" onClick={handleExperienceSubmit}>
        Submit CV
      </button>
    </section>
  );
};

export default CvCreator;
