import React from "react";

const ExperienceForm = ({
  company,
  startDate,
  endDate,
  post,
  description,
  onRemove,
  onChange,
}) => {
  const handleInputChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <div className="experience-form">
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
      <labe htmlFor="job-description" className="info-form">
        Short job description.*
      </labe>
      <textarea
        defaultValue={description}
        onChange={(e) => handleInputChange("description", e.target.value)}
        id="job-description"
        name="about-input"
        placeholder="My name is Alex Drysdale and I am a junior web developer for Oswald Technologies. I am an accomplished coder and..."
      ></textarea>
      <button onClick={onRemove} className="primary-btn remove">
        Remove Experience
      </button>
    </div>
  );
};

export default ExperienceForm;
