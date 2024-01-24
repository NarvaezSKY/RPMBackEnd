import { Router } from "express";
import { RegisterMotoviajeros,GetAllMotoviajeros } from "../Controllers/Motoviajero.controller.js";
const router = Router();

router.post('/register',RegisterMotoviajeros)
router.get("/",GetAllMotoviajeros)

export default router;