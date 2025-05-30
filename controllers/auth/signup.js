import createToken from "../../helpers/createToken.js";
import HttpError from "../../helpers/HttpError.js";
import { User } from "../../models/User.js";
import bcrypt from "bcryptjs";

const signup = async (req, res, next) => {
  const { firstName, secondName, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email already exists");
  }
  const pass = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    email,
    firstName,
    secondName,
    password: pass,
  }).then((res) => {
    const token = createToken(res);
    return User.findByIdAndUpdate(res._id, { token });
  });
  if (!newUser) {
    throw HttpError(500, "Can not create user");
  }
  res.status(201).json({
    token: newUser.token,
    user: {
      email,
      id: newUser._id,
      firstName: newUser.firstName,
      secondName: newUser.secondName,
    },
  });
};

export default signup;
