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

    const allMovies = await MovieUpload.find({})
    res.json({ data: data,all_movies:allMovies, status: true });
  } catch (error) {
    res.json(error);
  }
};
