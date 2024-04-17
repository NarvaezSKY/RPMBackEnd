import { changePassword } from "../controllers/changepasswd.controller.js";
import Router from "express";

const router = Router();

router.post("/password", changePassword);

export default router;