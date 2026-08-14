import express from "express";
import { createQuestions } from "../controller/aiController.js";
import { verifyToken } from "../utils/authMiddleware.js";

const router = express.Router();

router.post("/generate-questions", verifyToken, createQuestions);

export default router;