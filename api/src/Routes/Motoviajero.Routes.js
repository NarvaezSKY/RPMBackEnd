import { Router } from "express";
import { RegisterMotoviajeros,GetAllMotoviajeros,LoginMotoviajero,Logout, VerifyToken, UpdateMotoviajero, DeleteMotoviajero } from "../Controllers/Motoviajero.controller.js";
import { ValidateSchema } from "../Middlewares/ValidateToken.middlewares.js";
import { LoginSchema, RegisterSchema } from "../Schemas/Motoviajero.Schema.js";
import { AuthRequired } from "../Middlewares/ValidateToken.js";
const router = Router();

// estas son las rutas que el usuario debe seguir para utlizar los controladores 
router.post('/register',ValidateSchema(RegisterSchema),RegisterMotoviajeros)
router.get("/",GetAllMotoviajeros)
router.post("/login",ValidateSchema(LoginSchema),LoginMotoviajero)
router.post("logout",Logout)
router.get("/verify",VerifyToken)
router.put("/:id",AuthRequired,UpdateMotoviajero)
router.delete("/:id",DeleteMotoviajero)
export default router;