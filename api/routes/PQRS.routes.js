import { getAllPQRS, uploadPQRS, deletePQRS } from "../controllers/pqrs.controller.js";
import { Router } from "express";

const router=Router();

router.get('/pqrs', getAllPQRS)
router.post('/pqrs', uploadPQRS)
router.delete('/pqrs/:id', deletePQRS)

export default router;