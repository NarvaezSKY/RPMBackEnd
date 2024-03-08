import { Router } from "express";
import {
  getGasoline,
  updateGasolinePrice,
  uploadGasolinePrice
} from "../controllers/gas.controllers.js";

const router = Router();

router.get("/gasoline", getGasoline);
router.post("/gasoline", uploadGasolinePrice);
router.put("/gasoline/:id", updateGasolinePrice);

export default router;