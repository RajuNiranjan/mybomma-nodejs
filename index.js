import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import MovieUpload from "./routes/movieUploadData.routes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => res.send("Hello World, I am home page"));

app.use("/api/adminUploadData", MovieUpload);

app.listen(PORT, () => {
  console.log(`server is running at port number ${PORT}`);
});
