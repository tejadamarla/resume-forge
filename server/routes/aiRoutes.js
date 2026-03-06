const express = require("express");
const router = express.Router();

const { aiPolishResume } = require("../controllers/aiController");

router.post("/polish", aiPolishResume);

module.exports = router;