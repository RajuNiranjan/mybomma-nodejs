import express from "express";
import mongoose from "mongoose";


const app = express();

const PORT = 5000;

app.get("/", (req, res) => res.send("Hello World"));

app.listen(PORT, () => {
  console.log(`server is running at port number ${PORT}`);
});
