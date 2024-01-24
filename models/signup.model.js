import mongoose from "mongoose";

const signUpSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const SignUp = mongoose.model("SignUpData", signUpSchema);

export default SignUp;
