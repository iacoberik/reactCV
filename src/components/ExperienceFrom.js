export default function ExperienceForm({ onRemove }) {
  return (
    <>
      <label htmlFor="companyName" className="info-form">
        Company Name*
      </label>
      <input id="companyName" type="text" placeholder="WebTech"></input>
      <label htmlFor="startDate" className="info-form">
        From*
      </label>
      <input id="startDate" type="date" className="block"></input>
      <label htmlFor="endDate" className="info-form">
        Until*
      </label>
      <input id="endDate" type="date" className="block"></input>
      <label htmlFor="role" className="info-form">
        Your role*
      </label>
      <input id="role" type="text" placeholder="WebDev"></input>
      <labe htmlFor="job-description" className="info-form">
        Short job description.*
      </labe>
      <textarea
        id="job-description"
        name="about-input"
        placeholder="My name is Alex Drysdale and I am a junior web developer for Oswald Technologies. I am an accomplished coder and..."
      ></textarea>
    </>
  );
}
