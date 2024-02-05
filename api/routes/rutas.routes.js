import { Router } from "express";
import {
  getRutas,
  getRuta,
  deleteRuta,
} from "../controllers/rutas.controller.js";
import { upload } from "../util/upload.js";
import { uploadFile } from "../util/uploadFile.js";
import Ruta from "../models/rutas.models.js";
import { AuthRequired } from "../middlewares/ValidateToken.js";

const router = Router();

router.get("/rutas", getRutas);
router.get("/rutas/:id", getRuta);
router.post(
  "/rutas",
  upload.fields([{ name: "FotoRuta", maxCount: 1 }]),
  async (req, res) => {
    let body = req.body;
    let image = req.files.FotoRuta;
    console.log(req.files);

    try {
      if (image && image.length > 0) {
        const { downloadURL } = await uploadFile(image[0]);

        const savedRuta = await new Ruta({
          NombreRuta: body.NombreRuta,
          PuntoInicioRuta: body.PuntoInicioRuta,
          PuntoFinalRuta: body.PuntoFinalRuta,
          KmTotalesRuta: body.KmTotalesRuta,
          PresupuestoGas: body.PresupuestoGas,
          FotoRuta: downloadURL,
          DescripcionRuta: body.DescripcionRuta,
          CalificacionRuta: body.CalificacionRuta
        }).save();
        return res.status(200).json({
          savedRuta,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
);

router.delete("/rutas/delete/:id", deleteRuta);

export default router;
