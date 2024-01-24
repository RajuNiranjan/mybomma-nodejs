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
    },
    zoner: {
      type: String,
      required: true,
    },
    cast: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    trailer: {
      type: String,
      required: true,
      unique: true,
    },
    synopsis: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const MovieUpload = mongoose.model("MovieUploadData", movieUploadSchema);

export default MovieUpload;
