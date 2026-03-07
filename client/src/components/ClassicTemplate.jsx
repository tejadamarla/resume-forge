import React from "react";

const ClassicTemplate = ({ formData }) => {
  const degreeText =
    formData.degree === "Other" ? formData.customDegree : formData.degree;
const locationText =
  formData.location === "Other" ? formData.customLocation : formData.location;
  return (
    <div className="classic-template" id="resume-preview">
      <h1 className="classic-main-title">RESUME</h1>

      <div className="classic-header">
        <div>
          <h2>{formData.fullName || "Your Name"}</h2>
          <p>{formData.title || "Professional Title"}</p>
          <p>{locationText || ""}</p>
        </div>

        <div className="classic-contact">
          <p>{formData.email || ""}</p>
          <p>{formData.phone || ""}</p>
          <p>{formData.linkedin || ""}</p>
          <p>{formData.github || ""}</p>
        </div>
      </div>

      {formData.summary && (
        <>
          <div className="classic-section-heading">Objective</div>
          <p>{formData.summary}</p>
        </>
      )}

      {(degreeText || formData.interCollege || formData.schoolName) && (
        <>
          <div className="classic-section-heading">Educational Qualifications</div>

          <table className="edu-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Institution</th>
                <th>Year</th>
                <th>Percentage / CGPA</th>
              </tr>
            </thead>
            <tbody>
              {degreeText && (
                <tr>
                  <td>{degreeText}</td>
                  <td>{formData.college || ""}</td>
                  <td>{formData.gradEndYear || ""}</td>
                  <td>{formData.gradCgpa || ""}</td>
                </tr>
              )}

              {formData.interCollege && (
                <tr>
                  <td>{formData.interType || "Intermediate / Diploma"}</td>
                  <td>{formData.interCollege}</td>
                  <td>{formData.interEndYear || ""}</td>
                  <td>{formData.interPercentage || ""}</td>
                </tr>
              )}

              {formData.schoolName && (
                <tr>
                  <td>SSC</td>
                  <td>{formData.schoolName}</td>
                  <td>{formData.schoolEndYear || ""}</td>
                  <td>{formData.schoolPercentage || ""}</td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      )}

      {(formData.technicalSkills || formData.softSkills) && (
        <>
          <div className="classic-section-heading">Skills</div>
          <ul>
            {formData.technicalSkills &&
              formData.technicalSkills.split(",").map((skill, index) => (
                <li key={index}>{skill.trim()}</li>
              ))}
            {formData.softSkills &&
              formData.softSkills.split(",").map((skill, index) => (
                <li key={index}>{skill.trim()}</li>
              ))}
          </ul>
        </>
      )}

      {(formData.role || formData.company) && (
        <>
          <div className="classic-section-heading">Experience</div>
          <p>
            <b>{formData.role || ""}</b>
            {formData.company ? ` - ${formData.company}` : ""}
          </p>
          <p>{formData.duration || ""}</p>
          <p>{formData.responsibilities || ""}</p>
          {formData.achievements && (
            <p>
              <b>Achievements:</b> {formData.achievements}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default ClassicTemplate;