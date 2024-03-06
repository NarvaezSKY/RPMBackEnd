import Motoviajero from "../models/Motoviajero.model.js";
import { createAccesToken } from "../libs/jwt.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config/Token.js";

// esta funcion trae todos los usurios registrados
export const GetAllMotoviajeros = async (req, res) => {
  try {
    const AllMotoviajeros = await Motoviajero.find();
    res.json(AllMotoviajeros);
  } catch (error) {
    console.log(error);
  }
};

// esta funcion crea o registra los datos ingresados en la base de datos
export const RegisterMotoviajeros = async (req, res) => {
  const {
    Nombres_Mv,
    Apellidos_Mv,
    Email_Mv,
    NumeroIdent_Mv,
    FechaNac_Mv,
    Contraseña_Mv,
    NumeroTel_Mv,
  } = req.body;

  try {
    const UserFound = await Motoviajero.findOne({ Email_Mv });
    if (UserFound) return res.status(404).json(["the email already exists"]);

    const Telefono = await Motoviajero.findOne({ NumeroTel_Mv });
    if (Telefono) return res.status(404).json(["the telefono already exists"]);
    const Passwordhash = await bcrypt.hash(Contraseña_Mv, 10);
    const newMotoviajero = new Motoviajero({
      Nombres_Mv,
      Apellidos_Mv,
      Email_Mv,
      NumeroIdent_Mv,
      FechaNac_Mv,
      Contraseña_Mv: Passwordhash,
      NumeroTel_Mv,
    });

    const MotoviajeroSaved = await newMotoviajero.save();

    const token = await createAccesToken({ id: MotoviajeroSaved._id });
    res.cookie("token", token);
    res.json({ message: "usuario creado" });
  } catch (error) {
    console.log(error);
  }
};

// permite al usuario ingresar con los credenciales que ingreso al registarse
export const LoginMotoviajero = async (req, res) => {
  const { Email_Mv, Contraseña_Mv } = req.body;

  try {
    const UserFound = await Motoviajero.findOne({ Email_Mv });
    if (!UserFound) return res.status(404).json({ message: "user not found" });

    const IsMatch = await bcrypt.compare(
      Contraseña_Mv,
      UserFound.Contraseña_Mv
    );
    if (!IsMatch)
      return res.status(404).json({ message: "incorrect password" });

    const token = await createAccesToken({ id: UserFound._id });
    res.header("Authorization", token);
    res.json({
      id: UserFound._id,
      Email_Mv: UserFound.Email_Mv,
      CreatedAt: UserFound.createdAt,
      UpdatedAt: UserFound.updatedAt,
      Token: token
    });
  } catch (error) {
    res.status(400).json({message: error})
    console.log(error);
  }
};

// esta funcion realiza el cierre de sesion
export const Logout = async (req, res) => {

  res.header("Authorization", "", {
    expires: new Date(0),
  });
  return res.status(200).json({message:"logout success"});
};

// export const profile = async (req, res) => {
//   const UserFound = await Motoviajero.findById(req.motoviajero.id);
//   if (!UserFound)
//     return res.sendStatus(400).json({ message: "user not found" });
//   return res.json({
//     id: UserFound._id,
//     Nombre: UserFound.Nombres_Mv,
//     Email: UserFound.Email_Mv,
//     CreatedAt: UserFound.createdAt,
//     UpdatedAt: UserFound.updatedAt,
//   });
// };

export const UpdateMotoviajero = async (req, res, next) => {
  try {
    const UpMotoviajero = await Motoviajero.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ message: "datos actualizados exitosamente " });
  } catch (error) {
    console.log(error);
  }
};

export const VerifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "inauthorized" });

  jwt.verify(token, TOKEN_SECRET, async (err, motoviajero) => {
    if (err) return res.status(401).json({ message: "inauthorized" });

    const UserFound = await Motoviajero.findById(motoviajero.id);

    if (!UserFound) return res.status(401).json({ message: "inauthorized" });

    return res.json({
      id: UserFound._id,
      Nombre: UserFound.Nombres_Mv,
      Email: UserFound.Email_Mv,
    });
  });
};

export const DeleteMotoviajero = async (req, res) => {
  try {
    const motoviajero = await Motoviajero.findByIdAndDelete(req.params.id);
    res.json({ message: "motoviajero eliminado exitosamente" });
  } catch (error) {
    res.json({ error });
  }
};
