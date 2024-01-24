import express from "express";
import { signUp } from "../controllers/signup.controller.js";

const router = express.Router();

router.post("/user-signup", signUp);

export default router;
