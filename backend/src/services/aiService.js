import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import Question from "../model/question.model.js";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateQuestionsFromAI = async (
  subject,
  difficulty,
  count,
  createdBy = "system_ai" 
) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `Generate ${count} multiple-choice questions for ${subject} at ${difficulty} level. Return strictly a JSON array with objects containing: question, options (array of 4 strings), and correctAnswer.`,
      config: {
        responseMimeType: "application/json"
      }
    });

    const parsedQuestions = JSON.parse(response.text);
    const questionsToSave = parsedQuestions.map((q) => ({
      subject,
      difficulty,
      questionText: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      createdBy: createdBy     
    }));

    const savedQuestions = await Question.insertMany(questionsToSave);
    return savedQuestions;
  } catch (error) {
    console.error("Error generating and saving questions:", error);
    throw error;
  }
};