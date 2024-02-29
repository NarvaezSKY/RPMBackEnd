import Admin from "../models/admin.js";
import brcypt from "bcryptjs";
import { createAccesToken } from "../libs/jwt.js";
import  Jwt  from "jsonwebtoken";

export const getAdmin = async (req, res) => {
  try {
    const Admins = await Admin.find();
    return res.status(200).json({ Admins });
  } catch (error) {
    console.error(error);
  }
};

export const adminRegister = async (req, res) => {
  const { username, password } = req.body;
  try {
    const foundAdmin = await Admin.findOne({ username });
    if (foundAdmin)
      return res.status(400).json({ message: `username already in use.` });

    const encryptedPass = await brcypt.hash(password,10);

    const admin = new Admin({
      username,
      password: encryptedPass,
    });

    const savedAdmin = await admin.save();

    res.status(200).json({ savedAdmin });
  } catch (error) {
    console.error(error);
  }
};

export const adminLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const foundUser = await Admin.findOne({ username });
    if (!foundUser)
      return res.status(400).json({ message: "Admin does not exist" });

    const passMatch = await brcypt.compare(password, foundUser.password);

    if (!passMatch)
      return res.status(400).json({ message: "Incorrect password" });

    const token = await createAccesToken({ id: foundUser._id });
    res.cookie("token", token);
    res.status(200).json({ foundUser, token });
  } catch (error) {
    console.error(error);
  }
};

export const AdminVerifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "unauthorized" });

  Jwt.verify(token, TOKEN_SECRET, async (err, motoviajero) => {
    if (err) return res.status(401).json({ message: "unauthorized" });

    const admin = await Admin.findById(motoviajero.id);

    if (!admin) return res.status(401).json({ message: "unauthorized" });

    return res.json({
      id: Admin.id,
      username: Admin.username
    });
  });
};