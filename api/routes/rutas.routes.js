import { Router } from "express";
import { getRutas, getRuta, uploadRuta, deleteRuta } from "../controllers/rutas.controller.js";

const router=Router()

router.get('/rutas', getRutas)
router.get('/rutas/:id', getRuta)
router.post ('/rutas', uploadRuta)
router.delete('/rutas/delete/:id', deleteRuta)

export default router