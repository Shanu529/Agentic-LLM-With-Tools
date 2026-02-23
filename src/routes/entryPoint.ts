import express from "express";
import { llmResponse } from "../controller/callingLLM.js";

const router = express.Router();

router.post("/", llmResponse);

export default router;