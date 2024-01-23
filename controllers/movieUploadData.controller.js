import MovieUpload from "../models/movieUploadData.model.js";

export const movieUploadDataController = async (req, res, next) => {
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
  try {
    const data = await newMovieUploadData.save();
    res.json({ data: data, status: true });
  } catch (error) {
    next(error);
  }
};
