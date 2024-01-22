import MovieUpload from "../models/movieUploadData.model.js";

export const movieUploadDataController = async (req, res) => {
  console.log(req.body);
  const {
    image,
    title,
    year,
    zoner,
    cast,
    director,
    trailer,
    synopsis,
    description,
  } = req.body;
  const newMovieUploadData = new MovieUpload({
    image,
    title,
    year,
    zoner,
    cast,
    director,
    trailer,
    synopsis,
    description,
  });
  await newMovieUploadData.save();
  res.status(201).send("user created sussfully");
};
