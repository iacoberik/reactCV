import React from "react";

const ExperienceForm = ({
  // Destruct props
  company,
  startDate,
  endDate,
  post,
  description,
  onRemove,
  onChange,
}) => {
  // Handle input changes and propagate them to the parent component
  const handleInputChange = (field, value) => {
    // Call the onChange function passed from the parent with the field name and new value
    onChange(field, value);
  };

  return (
    <div className="experience-form">
      {/* Input field for company name */}
      <label htmlFor="companyName" className="info-form">
        Company Name*
      </label>
      <input
        id="companyName"
        type="text"
        placeholder="WebTech"
        value={company}
        onChange={(e) => handleInputChange("company", e.target.value)}
      ></input>
      {/* Input field for start date */}
      <label htmlFor="startDate" className="info-form">
        From*
      </label>
      <input
        id="startDate"
        type="date"
        className="block"
        value={startDate}
        onChange={(e) => handleInputChange("startDate", e.target.value)}
      ></input>
      {/* Input field for end date */}
      <label htmlFor="endDate" className="info-form">
        Until*
      </label>
      <input
        id="endDate"
        type="date"
        className="block"
        value={endDate}
        onChange={(e) => handleInputChange("endDate", e.target.value)}
      ></input>
      {/* Input field for role */}
      <label htmlFor="role" className="info-form">
        Your role*
      </label>
      <input
        id="role"
        type="text"
        placeholder="WebDev"
        value={post}
        onChange={(e) => handleInputChange("post", e.target.value)}
      ></input>
      {/* Input field for job description */}
      <label htmlFor="job-description" className="info-form">
        Short job description.*
      </label>
      <textarea
        defaultValue={description}
        onChange={(e) => handleInputChange("description", e.target.value)}
        id="job-description"
        name="about-input"
        placeholder="Work standard: (insert what aspect of the responsibility will be reviewed to determine if the job is being done correctly, for example, time frame, or number of completed tasks per week)"
      ></textarea>
      {/* Button to remove the experience form */}
      <button onClick={onRemove} className="primary-btn remove">
        Remove Experience
      </button>
    </div>
  );
};

export default ExperienceForm;
