import { getAllPQRS, uploadPQRS } from "../controllers/pqrs.controller.js";
import { Router } from "express";

const router=Router();

router.get('/pqrs', getAllPQRS)
router.post('/pqrs', uploadPQRS)

export default router;