import React from "react";

const AISuggestions = ({ formData, setFormData, setAiText }) => {

  const generateSuggestion = () => {
    if (!formData.title) {
      alert("Enter Professional Title first");
      return;
    }

    const suggestion = `Experienced ${formData.title} with strong problem-solving skills and passion for delivering high-quality solutions.`;

    setAiText(suggestion);

    setFormData({
      ...formData,
      summary: suggestion
    });
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={generateSuggestion}>
        🤖 AI Suggest Summary
      </button>
    </div>
  );
};

export default AISuggestions;