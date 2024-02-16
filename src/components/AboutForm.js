export default function AboutForm({
  name,
  birthday,
  email,
  description,
  onChange,
  formSubmitted,
}) {
  // Handle input changes and propagate them to the parent component
  const handleInputChange = (field, value) => {
    // Call the onChange function passed from the parent with the field name and new value
    onChange(field, value);
  };
  return (
    <div>
      <label htmlFor="fullname" className="info-form">
        Your Fullname*
      </label>
      <input
        id="fullname"
        type="text"
        placeholder="Alex Drysdale"
        value={name}
        className={formSubmitted && !name ? "error" : ""}
        onChange={(e) => handleInputChange("name", e.target.value)}
      ></input>
      <label htmlFor="birthday" className="info-form">
        Birthday*
      </label>
      <input
        id="birthday"
        type="date"
        className={formSubmitted && !birthday ? "error block" : "block"}
        value={birthday}
        onChange={(e) => handleInputChange("birthday", e.target.value)}
      ></input>
      <label htmlFor="email" className="info-form">
        Your email*
      </label>
      <input
        id="email"
        type="text"
        value={email}
        className={formSubmitted && !email ? "error" : ""}
        onChange={(e) => handleInputChange("email", e.target.value)}
        placeholder="alexdrysdale@gmail.com"
      ></input>
      <label htmlFor="about" className="info-form">
        Short or long description about you. Fell free to eat bullshit.*
      </label>
      <textarea
        id="about"
        name="about-input"
        value={description}
        className={formSubmitted && !description ? "error" : ""}
        onChange={(e) => handleInputChange("description", e.target.value)}
        placeholder="My name is Alex Drysdale and I am a junior web developer for Oswald Technologies. I am an accomplished coder and..."
      ></textarea>
    </div>
  );
}
