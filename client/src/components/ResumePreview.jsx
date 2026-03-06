import React from "react";
  const ResumePreview = ({ formData }) => {

  const degreeText =
    formData.degree === "Other"
      ? formData.customDegree
      : formData.degree;

  return (
    <div className="resume-card" id="resume-preview">
      <h1>{formData.fullName || "Your Name"}</h1>
      <h3>{formData.title || ""}</h3>

      <p>{formData.email || ""}</p>
      <p>{formData.phone || ""}</p>
      <p>{formData.location || ""}</p>
      <p>{formData.linkedin || ""}</p>
      <p>{formData.github || ""}</p>

      <hr />

      {/* EXPERIENCE */}
     {formData.responsibilitiesBullets?.length > 0 && (
  <>
    <p><b>Responsibilities</b></p>
    <ul>
      {formData.responsibilitiesBullets.map((b, i) => <li key={i}>{b}</li>)}
    </ul>
  </>
)}

{formData.achievementsBullets?.length > 0 && (
  <>
    <p><b>Achievements</b></p>
    <ul>
      {formData.achievementsBullets.map((b, i) => <li key={i}>{b}</li>)}
    </ul>
  </>
)}
      {/* EDUCATION */}
      {(formData.degree || formData.college || formData.interCollege || formData.schoolName) && (
        <>
          <h3>Education</h3>

          {(formData.degree || formData.college) && (
            <div style={{ marginBottom: "10px" }}>
              <p><b>{formData.degree || ""}</b> {formData.college ? `- ${formData.college}` : ""}</p>
              <p>
                {formData.gradJoinYear ? `${formData.gradJoinYear}` : ""}{formData.gradEndYear ? ` - ${formData.gradEndYear}` : ""}
                {formData.gradCgpa ? ` | ${formData.gradCgpa}` : ""}
              </p>
            </div>
          )}

          {(formData.interCollege || formData.interType) && (
            <div style={{ marginBottom: "10px" }}>
              <p><b>{formData.interType || "Intermediate/Diploma"}</b> {formData.interCollege ? `- ${formData.interCollege}` : ""}</p>
              <p>
                {formData.interJoinYear ? `${formData.interJoinYear}` : ""}{formData.interEndYear ? ` - ${formData.interEndYear}` : ""}
                {formData.interPercentage ? ` | ${formData.interPercentage}` : ""}
              </p>
            </div>
          )}

          {formData.schoolName && (
            <div style={{ marginBottom: "10px" }}>
              <p><b>10th (SSC)</b> {`- ${formData.schoolName}`}</p>
              <p>
                {formData.schoolEndYear ? `${formData.schoolEndYear}` : ""}
                {formData.schoolPercentage ? ` | ${formData.schoolPercentage}` : ""}
              </p>
            </div>
          )}

          <hr />
        </>
      )}
{/* SKILLS */}
{(formData.technicalSkills || formData.softSkills) && (
  <>
    <h3>Skills</h3>

    {formData.technicalSkills && (
      <div className="skill-container">
        {formData.technicalSkills.split(",").map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill.trim()}
          </span>
        ))}
      </div>
    )}

    {formData.softSkills && (
      <div className="skill-container">
        {formData.softSkills.split(",").map((skill, index) => (
          <span key={index} className="skill-tag soft">
            {skill.trim()}
          </span>
        ))}
      </div>
    )}

    <hr />
  </>
)}

      {/* SUMMARY */}
      {formData.summary && (
        <>
          <h3>Summary</h3>
          <p>{formData.summary}</p>
        </>
      )}
    </div>
  );
};

export default ResumePreview;