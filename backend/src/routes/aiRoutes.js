import express from "express";
import { createQuestions } from "../controller/aiController.js";
import { verifyAuth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/generate-questions", verifyAuth, createQuestions);

export default router;