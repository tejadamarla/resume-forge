const Resume = require("../models/Resume");
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// SAVE RESUME
exports.saveResume = async (req, res) => {
  try {
    const resume = await Resume.create(req.body);
    res.status(201).json(resume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET RESUME
exports.getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      userId: req.params.userId,
    });
    res.json(resume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// AI SUGGESTION
exports.aiSuggest = async (req, res) => {
  try {
    const { summary, skills } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a professional resume writing assistant.",
        },
        {
          role: "user",
          content: `Improve this summary: ${summary}. Suggest better skills for: ${skills}`,
        },
      ],
    });

    res.json({
      suggestion: response.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};