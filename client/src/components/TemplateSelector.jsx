import React from "react";

const TemplateSelector = ({ selectedTemplate, setSelectedTemplate }) => {
  return (
    <div className="template-selector">
      <h3>Select Resume Template</h3>

      <div className="template-buttons">
        <button
          className={selectedTemplate === "classic" ? "template-active" : ""}
          onClick={() => setSelectedTemplate("classic")}
        >
          Classic
        </button>

        <button
          className={selectedTemplate === "modern" ? "template-active" : ""}
          onClick={() => setSelectedTemplate("modern")}
        >
          Modern
        </button>
      </div>
    </div>
  );
};

export default TemplateSelector;