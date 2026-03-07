import React from "react";
import ClassicTemplate from "./ClassicTemplate";
import ModernTemplate from "./ModernTemplate";

const ResumePreview = ({ formData, selectedTemplate }) => {
  if (selectedTemplate === "modern") {
    return <ModernTemplate formData={formData} />;
  }

  return <ClassicTemplate formData={formData} />;
};

export default ResumePreview;