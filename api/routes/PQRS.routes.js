import { getAllPQRS, uploadPQRS } from "../controllers/pqrs.controller.js";
import { Router } from "express";

const router=Router();

router.get('/getpqrs', getAllPQRS)
router.post('/uploadpqrs', uploadPQRS)

export default router;