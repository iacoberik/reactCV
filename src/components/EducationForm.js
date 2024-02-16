export default function EducationForm({
  title,
  organisation,
  onChange,
  formSubmitted,
}) {
  // Handle input changes and propagate them to the parent component
  const handleInputChange = (field, value) => {
    onChange(field, value);
  };
  return (
    <div>
      <label htmlFor="qualification" className="info-form">
        Title of qualification awarded*
      </label>
      <input
        id="qualification"
        type="text"
        value={title}
        onChange={(e) => handleInputChange("title", e.target.value)}
        className={formSubmitted && !title ? "error" : ""}
        placeholder="Title of qualification awarded"
      ></input>
      <label htmlFor="Organisation" className="info-form">
        Organisation providing education and training*
      </label>
      <input
        id="Organisation"
        type="text"
        placeholder="Organisation"
        value={organisation}
        className={formSubmitted && !organisation ? "error" : ""}
        onChange={(e) => handleInputChange("organisation", e.target.value)}
      ></input>
    </div>
  );
}
