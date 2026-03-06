# ResumeForge – Smart Resume Builder with AI Suggestions (MERN)

ResumeForge is a MERN stack resume builder that lets users sign up/login, fill resume details using a tab-based form, preview the resume live, improve content using AI Suggest (polish summary/bullets), and export the resume as a PDF.

## Features

- ✅ User Authentication (Sign Up / Login) using JWT
- ✅ Resume Builder UI with Tabs:
  - Personal
  - Experience
  - Education (Join Year + Completion Year)
  - Skills (tag-style preview)
  - Summary
- ✅ Live Resume Preview
- ✅ AI Suggest (Polish Resume into a more official format)
- ✅ PDF Export (Download resume as PDF)
- ✅ MongoDB Atlas database integration

---

## Tech Stack

**Frontend**
- React (Vite)
- React Router DOM
- CSS (custom styling)
- html2canvas + jsPDF (PDF export)

**Backend**
- Node.js + Express
- MongoDB Atlas + Mongoose
- JWT Authentication
- bcryptjs (password hashing)

---

## Folder Structure

```txt
smart-resume-builder/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AISuggestions.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── ResumeForm.jsx
│   │   │   └── ResumePreview.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   └── package.json
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── resumeController.js
│   │   └── aiController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Resume.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── resumeRoutes.js
│   │   └── aiRoutes.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md