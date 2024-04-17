import { updateRutaCalificacion } from "../controllers/calificacion.controller.js";
import Router from "express";

const router = Router();

router.put("/calificacion/:id", updateRutaCalificacion);

export default router;