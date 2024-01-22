import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

const app = express();

const PORT = 5000;

app.get("/", (req, res) => res.send("Hello World"));

app.listen(PORT, () => {
  console.log(`server is running at port number ${PORT}`);
});
