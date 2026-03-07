import React from "react";

const ModernTemplate = ({ formData }) => {
  const degreeText =
    formData.degree === "Other" ? formData.customDegree : formData.degree;

    const locationText =
  formData.location === "Other" ? formData.customLocation : formData.location;

  return (
    <div className="modern-template" id="resume-preview">
      <div className="modern-top">
        <h1>{formData.fullName || "Your Name"}</h1>
        <h2>{formData.title || "Professional Title"}</h2>
      </div>

      <div className="modern-grid">
        <div className="modern-left">
          <h3>CONTACT</h3>
          <p>{formData.phone || ""}</p>
          <p>{formData.email || ""}</p>
          <p>{locationText || ""}</p>
          <p>{formData.linkedin || ""}</p>
          <p>{formData.github || ""}</p>

          {formData.summary && (
            <>
              <h3>PROFILE</h3>
              <p>{formData.summary}</p>
            </>
          )}

          {(formData.technicalSkills || formData.softSkills) && (
            <>
              <h3>SKILLS</h3>
              <div className="skill-container">
                {formData.technicalSkills &&
                  formData.technicalSkills.split(",").map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill.trim()}
                    </span>
                  ))}

                {formData.softSkills &&
                  formData.softSkills.split(",").map((skill, index) => (
                    <span key={index} className="skill-tag soft">
                      {skill.trim()}
                    </span>
                  ))}
              </div>
            </>
          )}
        </div>

        <div className="modern-right">
          {(degreeText || formData.interCollege || formData.schoolName) && (
            <>
              <h3>EDUCATION</h3>

              {degreeText && (
                <div className="modern-block">
                  <p><b>{formData.college || ""}</b></p>
                  <p>{degreeText}</p>
                  <p>
                    {formData.gradJoinYear || ""} - {formData.gradEndYear || ""}
                  </p>
                  <p>{formData.gradCgpa || ""}</p>
                </div>
              )}

              {formData.interCollege && (
                <div className="modern-block">
                  <p><b>{formData.interCollege}</b></p>
                  <p>{formData.interType || "Intermediate / Diploma"}</p>
                  <p>
                    {formData.interJoinYear || ""} - {formData.interEndYear || ""}
                  </p>
                  <p>{formData.interPercentage || ""}</p>
                </div>
              )}

              {formData.schoolName && (
                <div className="modern-block">
                  <p><b>{formData.schoolName}</b></p>
                  <p>SSC</p>
                  <p>{formData.schoolEndYear || ""}</p>
                  <p>{formData.schoolPercentage || ""}</p>
                </div>
              )}
            </>
          )}

          {(formData.role || formData.company) && (
            <>
              <h3>EXPERIENCE</h3>
              <div className="modern-block">
                <p><b>{formData.role || ""}</b></p>
                <p>{formData.company || ""}</p>
                <p>{formData.duration || ""}</p>
                <p>{formData.responsibilities || ""}</p>
                {formData.achievements && (
                  <p><b>Achievements:</b> {formData.achievements}</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;