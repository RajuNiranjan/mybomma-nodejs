import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import MovieUploadRouter from "./routes/movieUploadData.routes.js";
import SignupRouter from "./routes/signup.routes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running at port number ${PORT}`);
});

app.use("/api/adminUploadData", MovieUploadRouter);

app.use("/api/signup", SignupRouter);

app.use((req, res, next, err) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
