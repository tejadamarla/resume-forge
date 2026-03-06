import React from "react";


const ResumeForm = ({ formData, setFormData, type }) => {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
const [showOtherCollege, setShowOtherCollege] = React.useState(false);
const [showOtherLocation, setShowOtherLocation] = React.useState(false);
 
const years = [];
const currentYear = new Date().getFullYear();
for (let y = currentYear; y >= 1990; y--) years.push(y);return (
    <div>

      {/* PERSONAL */}
      {type === "Personal" && (
        <div>
          <h3>Personal Information</h3>

          <input name="fullName" placeholder="Full Name" onChange={handleChange} />
          <input name="title" placeholder="Professional Title" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} />
          <select name="location" onChange={handleChange}>
  <option value="">Select Location</option>
  <option value="Vijayawada">Vijayawada</option>
  <option value="Hyderabad">Hyderabad</option>
  <option value="Bangalore">Bangalore</option>
  <option value="Chennai">Chennai</option>
  <option value="Mumbai">Mumbai</option>
</select> 
{showOtherLocation && (
  <input
    name="customLocation"
    placeholder="Enter your location"
    onChange={handleChange}
  />
)}
          <input name="linkedin" placeholder="LinkedIn URL" onChange={handleChange} />
          <input name="github" placeholder="GitHub URL" onChange={handleChange} />
        </div>
      )}

      {/* EXPERIENCE */}
{type === "Experience" && (
  <div>
    <h3>Work Experience</h3>

    <input name="company" placeholder="Company Name" onChange={handleChange} />
    <input name="role" placeholder="Job Role" onChange={handleChange} />
    <input name="duration" placeholder="Duration (2022 - 2024)" onChange={handleChange} />

    <label>Responsibilities</label>
    <textarea
      name="responsibilities"
      className="big-textarea"
      placeholder="Write your responsibilities (use bullet points if you want)..."
      onChange={handleChange}
    />

    <label>Achievements</label>
    <textarea
      name="achievements"
      className="big-textarea"
      placeholder="Write your achievements (example: Improved performance by 30%, Won hackathon, etc.)..."
      onChange={handleChange}
    />
  </div>
)}
      {/* EDUCATION */}
     {type === "Education" && (
  <div>
    <h3>Education</h3>

    <h4>Graduation</h4>
    <label>Degree</label>
<select name="degree" onChange={handleChange} defaultValue="">
  <option value="">Select Degree</option>
  <option value="B.Tech">B.Tech</option>
  <option value="B.E">B.E</option>
  <option value="B.Sc">B.Sc</option>
  <option value="B.Com">B.Com</option>
  <option value="BBA">BBA</option>
  <option value="BA">BA</option>
  <option value="M.Tech">M.Tech</option>
  <option value="MBA">MBA</option>
  <option value="M.Sc">M.Sc</option>
  <option value="Other">Other</option>
</select>

{/* If Other selected, open extra input */}
{formData.degree === "Other" && (
  <input
    name="customDegree"
    placeholder="Enter your Degree"
    onChange={handleChange}
  />
)}
    <input name="college" placeholder="College Name" onChange={handleChange} />

    <label>Year of Join</label>
    <select name="gradJoinYear" onChange={handleChange} defaultValue="">
      <option value="">Select Join Year</option>
      {years.map((y) => (
        <option key={y} value={y}>{y}</option>
      ))}
    </select>

    <label>Year of Completion</label>
    <select name="gradEndYear" onChange={handleChange} defaultValue="">
      <option value="">Select Completion Year</option>
      {years.map((y) => (
        <option key={y} value={y}>{y}</option>
      ))}
    </select>

    <input name="gradCgpa" placeholder="CGPA / Percentage" onChange={handleChange} />

    <h4>Intermediate / Diploma</h4>
    <input name="interType" placeholder="Intermediate or Diploma" onChange={handleChange} />
    <input name="interCollege" placeholder="College Name" onChange={handleChange} />

    <label>Year of Join</label>
    <select name="interJoinYear" onChange={handleChange} defaultValue="">
      <option value="">Select Join Year</option>
      {years.map((y) => (
        <option key={y} value={y}>{y}</option>
      ))}
    </select>

    <label>Year of Completion</label>
    <select name="interEndYear" onChange={handleChange} defaultValue="">
      <option value="">Select Completion Year</option>
      {years.map((y) => (
        <option key={y} value={y}>{y}</option>
      ))}
    </select>

    <input name="interPercentage" placeholder="Percentage" onChange={handleChange} />

    <h4>Schooling (10th)</h4>
    <input name="schoolName" placeholder="School Name" onChange={handleChange} />
    <label>Year of Completion</label>
    <select name="schoolEndYear" onChange={handleChange} defaultValue="">
      <option value="">Select Completion Year</option>
      {years.map((y) => (
        <option key={y} value={y}>{y}</option>
      ))}
    </select>
    <input name="schoolPercentage" placeholder="Percentage / CGPA" onChange={handleChange} />
  </div>
)}
 {/* SKILLS */}
{type === "Skills" && (
  <div>
    <h3>Skills</h3>

    <label>Technical Skills</label>
    <input
      name="technicalSkills"
      placeholder="Example: JavaScript, React, Node.js, MongoDB"
      onChange={handleChange}
    />

    <label>Soft Skills</label>
    <input
      name="softSkills"
      placeholder="Example: Communication, Leadership, Problem Solving"
      onChange={handleChange}
    />
  </div>
)}
      {/* SUMMARY */}
{type === "Summary" && (
  <div>
    <h3>Professional Summary</h3>

    <textarea
      name="summary"
      className="big-textarea"
      placeholder="Write a short professional summary about yourself..."
      onChange={handleChange}
    />
  </div>
)}

    </div>
  );
};

export default ResumeForm;