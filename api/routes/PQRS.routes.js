import { getAllPQRS, uploadPQRS, deletePQRS, updatePQRS } from "../controllers/pqrs.controller.js";
import { Router } from "express";

const router=Router();

router.get('/pqrs', getAllPQRS)
router.post('/pqrs', uploadPQRS)
router.delete('/pqrs/:id', deletePQRS)
router.put('/pqrs/:id', updatePQRS)

export default router;