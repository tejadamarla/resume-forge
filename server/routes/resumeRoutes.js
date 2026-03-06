const express = require("express");
const router = express.Router();

const {
  saveResume,
  getResume,
  aiSuggest,
} = require("../controllers/resumeController");

router.post("/save", saveResume);
router.get("/:userId", getResume);
router.post("/ai-suggest", aiSuggest);

module.exports = router;   // 🔥 DO NOT REMOVE THIS