import React, { useState } from "react";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import TemplateSelector from "../components/TemplateSelector";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Home = () => {
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState("Personal");
  const [selectedTemplate, setSelectedTemplate] = useState("classic");
  const [aiLoading, setAiLoading] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);

  const tabs = ["Personal", "Experience", "Education", "Skills", "Summary"];

  const handleAISuggest = async () => {
    try {
      setAiLoading(true);

      const res = await fetch("http://localhost:5000/api/ai/polish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "AI Suggest failed");
        return;
      }

      setFormData(data.polished);
    } catch (error) {
      alert("AI Suggest failed");
    } finally {
      setAiLoading(false);
    }
  };

  const handleExportPDF = async () => {
    try {
      setPdfLoading(true);

      const element = document.getElementById("resume-preview");
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    } catch (error) {
      alert("PDF export failed");
    } finally {
      setPdfLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <h2>ResumeForge</h2>
          <span>Smart Resume Builder</span>
        </div>

        <div className="header-buttons">
          <button
            className={`ai-btn ${aiLoading ? "btn-loading" : ""}`}
            onClick={handleAISuggest}
            disabled={aiLoading}
          >
            {aiLoading ? "Suggesting..." : "✨ AI Suggest"}
          </button>

          <button
            className={`export-btn ${pdfLoading ? "btn-loading" : ""}`}
            onClick={handleExportPDF}
            disabled={pdfLoading}
          >
            {pdfLoading ? "Exporting..." : "⬇ Export PDF"}
          </button>
        </div>
      </header>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="main">
        <div className="form-section">
          <TemplateSelector
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />

          <ResumeForm
            formData={formData}
            setFormData={setFormData}
            type={activeTab}
          />
        </div>

        <div className="preview-section">
          <ResumePreview
            formData={formData}
            selectedTemplate={selectedTemplate}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;