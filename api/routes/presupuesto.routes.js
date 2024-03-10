import { calculate } from "../controllers/presupuesto.controllers.js";
import {Router} from 'express'

const router=Router();

router.post('/presupuesto', calculate)

export default router