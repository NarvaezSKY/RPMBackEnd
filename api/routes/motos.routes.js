import { Router } from "express";
import { upload } from "../util/upload.js";
import { uploadFile } from "../util/uploadFile.js";
import Moto from "../models/motos.model.js";

const router=Router()

router.post('/motos', upload.fields([{name: 'FotoMoto', maxCount:1}]),  async (req, res) => {
    
    let body=req.body
    let image=req.files.FotoMoto
    console.log(req.files)

    if (image&&image.length>0){
    
        const {downloadURL}=await uploadFile(image[0])
    
        const savedMoto=await new Moto({
            MotoNombre: body.MotoNombre,
            ModeloMoto: body.ModeloMoto,
            AñoMoto: body.AñoMoto,
            ConsumoMoto: body.ConsumoMoto,
            CilindrajeMoto:body.CilindrajeMoto,
            FotoMoto: downloadURL
        }).save()
        return res.status(200).json({
         savedMoto
        })
    }
    
}
)

export default router