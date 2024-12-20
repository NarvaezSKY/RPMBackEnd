import { Router } from "express";
import { upload } from "../util/upload.js";
import { uploadFile } from "../util/uploadFile.js";
import Moto from "../models/motos.model.js";
import {
  deleteMoto,
  getAllMotos,
  getMoto,
  getUserMotos,
} from "../controllers/motos.controller.js";
import { AuthRequired } from "../middlewares/ValidateToken.js";

const router = Router();

router.get("/motos", getAllMotos);
router.get("/motos/:id", getMoto);
router.post("/motos", AuthRequired,
  //upload.fields([{ name: "FotoMoto", maxCount: 1 }]),
  async (req, res) => {
    let body = req.body;

    // // Verifica si existe el campo FotoMoto en req.files
    // if (!req.files || !req.files.FotoMoto) {
    //   // Si no existe, puedes manejar este caso según tus requisitos
    //   console.log("No se proporcionó la imagen de la moto");
    //   const savedMoto = await new Moto({
    //     MotoNombre: body.MotoNombre,
    //     ModeloMoto: body.ModeloMoto,
    //     MarcaMoto: body.MarcaMoto,
    //     VersionMoto: body.VersionMoto,
    //     ConsumoMotoLx100km: parseInt(body.ConsumoMotoLx100km),
    //     CilindrajeMoto: body.CilindrajeMoto,
    //     motoviajero: req.motoviajero.id
    //   }).save();

    //   return res.status(200).json({
    //     savedMoto,
    //   });
    // }

    // let image = req.files.FotoMoto;
    // console.log(req.files);

    // const { downloadURL } = await uploadFile(image[0]);

    const savedMoto = await new Moto({
      MotoNombre: body.MotoNombre,
      ModeloMoto: body.ModeloMoto,
      MarcaMoto: body.MarcaMoto,
      VersionMoto: body.VersionMoto,
      ConsumoMotoLx100km: parseInt(body.ConsumoMotoLx100km),
      CilindrajeMoto: body.CilindrajeMoto,
      FotoMoto: body.FotoMoto,
      motoviajero: req.motoviajero.id
    }).save();

    return res.status(200).json({
      savedMoto,
    });
  }
);


router.get("/usermotos", AuthRequired, getUserMotos);

router.delete("/motos/delete/:id", deleteMoto);

router.put("/motos/update/:id",
  upload.fields([{ name: "FotoMoto", maxCount: 1 }]),
  async (req, res) => {
    try {
      const motoId = req.params.id;
      const body = req.body;
      // const image = req.files.FotoMoto;

      let nuevosDatos = {
        MotoNombre: body.MotoNombre,
        ModeloMoto: body.ModeloMoto,
        MarcaMoto: body.MarcaMoto,
        VersionMoto: body.VersionMoto,
        ConsumoMotoLx100km: body.ConsumoMotoLx100km,
        CilindrajeMoto: body.CilindrajeMoto,
        FotoMoto: body.FotoMoto
      };

      // if (image && image.length > 0) {
      //   const { downloadURL } = await uploadFile(image[0]);
      //   nuevosDatos.FotoMoto = downloadURL;
      // }

      const motoActualizada = await Moto.findByIdAndUpdate(
        motoId,
        nuevosDatos,
        {
          new: true, // Devolver la moto actualizada
          runValidators: true, // Ejecutar validaciones de Mongoose
        }
      );

      if (!motoActualizada) {
        return res.status(404).json({ error: "Moto no encontrada" });
      }

      return res.status(200).json({ motoActualizada });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }
);

export default router;
