import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const userController = {
  signup: async (req, res) => {
    try {
      const { name, email, department, date, password, role } = req.body;
      const user = await User.findOne({ email });
      if (user)
        return res.status(400).json({ msg: "The email already exists" });
      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password should be atleast 6 characters long" });

      //Password Encyption
      const passwordHash = await bcrypt.hash(password, 10);
      //   const default : 0;
      const newUser = new User({
        name,
        email,
        department,
        date,
        password: passwordHash,
        role,
      });
      await newUser.save();

      //
      const accesstoken = createAccessToken({ id: newUser._id });
      const refreshtoken = createRefreshToken({ id: newUser._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: false,
        path: "http://localhost:5000/user/refresh_token",
      });

      res.json(refreshtoken);
      //
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },
  refreshToken: async (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token) return res.status(400).json({ msg: "No rf_token" });

      jwt.verify(rf_token, process.env.REFRESH_TOKEN, (err, user) => {
        if (err)
          return res.status(400).json({ msg: "Please Login or Register" });

        const accesstoken = createAccessToken({ id: user.id });

        res.json({ accesstoken: accesstoken });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ msg: "User does not exist." });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Incorrect password." });

      // If login success , create access token and refresh token
      const accesstoken = createAccessToken({ id: user._id });
      const refreshtoken = createRefreshToken({ id: user._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "http://localhost:5000/user/refresh_token",
      });

      res.json({ accesstoken });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", {
        path: "http://localhost:5000/user/refresh_token",
      });
      return res.json({ msg: "Logged out" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUser: async (req, res) => {
    try {
      console.log(req);
      const user = await User.findById(req.user.id);
      if (!user) return res.status(400).json({ msg: "User does not exist." });

      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
// console.log(process.env.ACCESS_TOKEN);
const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: "1d" });
};
const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN, { expiresIn: "7d" });
};

export { userController };
