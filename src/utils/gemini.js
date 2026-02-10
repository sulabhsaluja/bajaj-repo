const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

const askGemini = async (question) => {
  const response = await ai.models.generateContent({
  model: 'gemini-3-flash-preview',
  contents: `Answer in ONE word only. No explanation. Question: ${question}`
});

  const text = response.text;

  if (!text) {
    return 'Unknown';
  }

  return text.trim().split(/\s+/)[0];
};

module.exports = { askGemini };