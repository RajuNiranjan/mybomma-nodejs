import SignUp from "../models/signup.model.js";
import bcyptjs from "bcryptjs";

export const signUp = async (req, res, next) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  const hashedPassword = bcyptjs.hashSync(password, 10);
  const newUser = new SignUp({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("user Created successfully");
  } catch (error) {
    next(error.message);
  }
};
