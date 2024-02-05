import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import MovieUploadRouter from "./routes/movieUploadData.routes.js";
import SignupRouter from "./routes/signup.routes.js";
import MovieUpload from "./models/movieUploadData.model.js";

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

app.get("/",(req,res)=>{
  return res.send({
    "message":"GET Reply from Home Page"
  })
})

app.get("/movies",async (req,res)=>{
  // let data = await MovieUpload.find({})
  return res.send({
    // "data":data,
    "message":"GET Reply from Home Page",
    "params":req.params,
    "query":req.query
  })
})

app.post("/upload_movie",async (req,res)=>{
  let movie_data = req.body;
  let newMovie =  new MovieUpload(movie_data)
  await newMovie.save()
  let all_movies = await MovieUpload.find({})
    let total_movies = await MovieUpload.countDocuments({})
  return res.send({
    "message":"Saved Movie",
    "total_movies":total_movies,
    "all_movies":all_movies
  })
})

app.get("/")

app.use("/api/adminUploadData", MovieUploadRouter);

app.use("/api/signup", SignupRouter);

// app.use((req, res, next, err) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || "Internal Server Error";
//   return res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });
