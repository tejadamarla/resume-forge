exports.aiPolishResume = async (req, res) => {
  try {
    const data = req.body;

    const summary =
      data.summary?.trim() ||
      `Motivated ${data.title || "candidate"} with strong fundamentals and hands-on project experience. Seeking opportunities to contribute and grow in a professional environment.`;

    const bulletsFromText = (text = "") =>
      text
        .split("\n")
        .map((x) => x.trim())
        .filter(Boolean)
        .slice(0, 6);

    const polished = {
      ...data,
      summary,
      responsibilitiesBullets: bulletsFromText(data.responsibilities || ""),
      achievementsBullets: bulletsFromText(data.achievements || ""),
    };

    return res.json({ polished });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};