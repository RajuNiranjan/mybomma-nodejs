import express from "express";
import { movieUploadDataController } from "../controllers/movieUploadData.controller.js";

const router = express.Router();

router.post("/admin-dashboard", movieUploadDataController);

export default router;
