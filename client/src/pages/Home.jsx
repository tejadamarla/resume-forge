import React, { useState } from "react";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Home = () => {
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState("Personal");

  const [aiLoading, setAiLoading] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);

  const tabs = ["Personal", "Experience", "Education", "Skills", "Summary"];

  // ✅ AI Suggest (calls backend)
  const handleAISuggest = async () => {
  try {
    setAiLoading(true);

    const res = await fetch("https://resume-forge-backend.onrender.com/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "AI Suggest failed");
      return;
    }

    // Replace formData with polished version
    setFormData(data.polished);
  } catch (e) {
    alert("AI Suggest failed. Check backend is running.");
  } finally {
    setAiLoading(false);
  }
};

  // ✅ Export PDF
  const handleExportPDF = async () => {
    try {
      setPdfLoading(true);

      const element = document.getElementById("resume-preview");
      if (!element) {
        alert("Preview not found!");
        return;
      }

      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    } catch (e) {
      alert("PDF export failed!");
      console.log(e);
    } finally {
      setPdfLoading(false);
    }
  };

  return (
    <div className="app">
      {/* HEADER */}
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
            {aiLoading ? "✨ Suggesting..." : "✨ AI Suggest"}
          </button>

          <button
            className={`export-btn ${pdfLoading ? "btn-loading" : ""}`}
            onClick={handleExportPDF}
            disabled={pdfLoading}
          >
            {pdfLoading ? "⬇ Exporting..." : "⬇ Export PDF"}
          </button>
        </div>
      </header>

      {/* TABS */}
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

      {/* MAIN */}
      <div className="main">
        <div className="form-section">
          <ResumeForm
            formData={formData}
            setFormData={setFormData}
            type={activeTab}
          />
        </div>

        <div className="preview-section">
          <ResumePreview formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default Home;