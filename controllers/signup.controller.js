import SignUp from "../models/signup.model.js";
import bcyptjs from "bcryptjs";

export const signUp = async (req, res, next) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  // const hashedPassword = bcyptjs.hashSync(password, 10);
  const newUser = new SignUp({ username, email, password });
  try {
    const userData = newUser.save();
    res.json({ userData: userData, status: true });
  } catch (err) {
    next(err);
  }
};
