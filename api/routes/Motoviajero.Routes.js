import { Router } from "express";
import {
  RegisterMotoviajeros,
  GetAllMotoviajeros,
  LoginMotoviajero,
  Logout,
  VerifyToken,
  UpdateMotoviajero,
  DeleteMotoviajero,
} from "../controllers/Motoviajero.controller.js";
import { ValidateSchema } from "../middlewares/ValidateToken.middlewares.js";
import { LoginSchema, RegisterSchema } from "../schemas/Motoviajero.Schema.js";
import { AuthRequired } from "../middlewares/ValidateToken.js";

const router = Router();

// estas son las rutas que el usuario debe seguir para utlizar los controladores
router.post("/register", ValidateSchema(RegisterSchema), RegisterMotoviajeros);
router.get("/getusers", GetAllMotoviajeros);
router.post("/login", ValidateSchema(LoginSchema), LoginMotoviajero);
router.post("/logout", Logout);
router.get("/verify", VerifyToken);
router.put("/updateuser/:id", UpdateMotoviajero);
router.delete("/deleteuser/:id", DeleteMotoviajero);

export default router;