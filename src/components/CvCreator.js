import { useState, useContext } from "react";
import ExperienceForm from "./ExperienceFrom";
import AboutForm from "./AboutForm";
import EducationForm from "./EducationForm";
import CvContext from "../utils/CvContext";

const CvCreator = () => {
  // Define state variables to manage the list of experience forms and the length of the list
  const [expLength, setExpLength] = useState(0); // State for the length of experienceForms
  const [experienceForms, setExperienceForms] = useState([]); // State for experience forms
  const [aboutForm, setAboutForm] = useState([
    { name: "", birthday: "", email: "", description: "" },
  ]); // State for about form
  const [educationForm, setEducationForm] = useState([
    { title: "", organisation: "" },
  ]); // State for education form
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { setCvExperience, setCvAbout, setCvEducation } = useContext(CvContext);

  // console.log(educationForm.every((item) => item.title === ""));

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
  // Function to handle changes in input fields of the about form
  const handleAboutChange = (field, value) => {
    const newAboutForm = [...aboutForm];
    // console.log(newAboutForm);
    newAboutForm[0][field] = value;
    setAboutForm(newAboutForm);
    // console.log(aboutForm);
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
  // Function to handle changes in input fields of the education form
  const handleEducationForm = (field, value) => {
    const newEducation = [...educationForm];
    newEducation[0][field] = value;
    setEducationForm(newEducation);
    console.log(newEducation);
  };
  const handleFormSubmit = () => {
    // Check if all fields are filled for each form
    const isExperienceFormValid = experienceForms.every(
      (form) =>
        form.company !== "" &&
        form.startDate !== "" &&
        form.endDate !== "" &&
        form.post !== "" &&
        form.description !== ""
    );

    const isAboutFormValid = aboutForm.every(
      (form) =>
        form.about !== "" &&
        form.birthday !== "" &&
        form.description !== "" &&
        form.email !== ""
    );

    const isEducationFormValid = educationForm.every(
      (form) => form.title !== "" && form.organisation !== ""
    );

    // console.log("Educatie :" + !isEducationFormValid);
    // If any form is not valid, set formSubmitted to true
    if (!isExperienceFormValid || !isAboutFormValid || !isEducationFormValid) {
      // If the form is not valid, find which fields are empty
      // const emptyFields = experienceForms.map((form, index) => {
      //   const emptyFieldsInForm = Object.keys(form).filter(
      //     (key) => form[key] === ""
      //   );
      //   return { index, emptyFieldsInForm };
      // });

      setFormSubmitted(true);
      console.log("not submite");

      // Log or display the empty fields for debugging or user feedback
      // console.log(emptyFields);
      // You can also set state or display a message to the user about the empty fields
    } else {
      // If the form is valid, proceed with submitting the CV
      submitForms();
      console.log("submited");
    }
  };
  // Function to submit forms
  function submitForms() {
    setCvExperience(experienceForms);
    setCvAbout(aboutForm);
    setCvEducation(educationForm);
  }

  return (
    <section className="cv-creator">
      <h2 className="heading">Create Your CV from here</h2>
      <div className="form-container">
        {/* About you form */}
        <div className="about-form">
          <h3>About you</h3>
          {/* Input fields for personal information */}
          <AboutForm
            name={aboutForm[0].name}
            birthday={aboutForm[0].birthday}
            email={aboutForm[0].email}
            description={aboutForm[0].description}
            onChange={(field, value) => handleAboutChange(field, value)}
            formSubmitted={formSubmitted}
          />
        </div>
        {/* Experience form */}
        <div className="experince-form">
          <h3>Your Experience</h3>
          {/* Render experience forms dynamically */}
          {experienceForms.map((form, index) => (
            <div key={form.key}>
              {/* Render each experience form component */}
              <ExperienceForm
                formSubmitted={formSubmitted}
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
        </div>
        {/* Education form */}
        <div className="education-form">
          <h3>Your Education</h3>
          <EducationForm
            title={educationForm[0].title}
            organisation={educationForm[0].organisation}
            onChange={(field, value) => handleEducationForm(field, value)}
            formSubmitted={formSubmitted}
          />
        </div>
      </div>
      {/* Button to submit the CV */}
      <button className="primary-btn submit" onClick={handleFormSubmit}>
        Submit CV
      </button>
    </section>
  );
};

export default CvCreator;
