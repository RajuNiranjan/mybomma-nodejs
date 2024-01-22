import mongoose from "mongoose";

const movieUploadSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    year: {
      type: String,
      required: true,
      unique: true,
    },
    zoner: {
      type: String,
      required: true,
      unique: true,
    },
    cast: {
      type: String,
      required: true,
      unique: true,
    },
    director: {
      type: String,
      required: true,
      unique: true,
    },
    trailer: {
      type: String,
      required: true,
      unique: true,
    },
    synopsis: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const MovieUpload = mongoose.model("MovieUploadData", movieUploadSchema);

export default MovieUpload;
