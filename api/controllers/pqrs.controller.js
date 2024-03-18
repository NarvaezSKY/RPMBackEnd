import PQRS from "../models/pqrs.js";

export const getAllPQRS = async(req, res) =>{
    try {
        const pqrs=await PQRS.find()
        return res.status(200).json(pqrs);
    } catch (error) {
        console.error(error);
        return res.status(400).json({message: 'something went wrong'});
    }

}

export const uploadPQRS = async(req, res) =>{
    try {
        let body=req.body;

        const savedPQRS = await new PQRS(
            {
                nombreusuario:body.nombreusuario,
                emailusuario:body.emailusuario,
                asuntopqrs: body.asuntopqrs,
                textopqrs: body.textopqrs,
                estado: body.estado
            }
        ). save()
        res.status(200).json({message: savedPQRS})

    } catch (error) {
        res.status(400).json({message: 'something went wrong'});
    }
}

export const deletePQRS=async(req, res) =>{
    try {
        const foundPQRS = await PQRS.findByIdAndDelete({ _id: req.params.id });
        if (!foundPQRS)
          return res.status(404).json({ message: "PQRS not found" });
        res.status(200).json({ message: `Ruta eliminada:`, foundPQRS });
      } catch (error) {
        console.log(error);
        return res.status(400).json({message: 'something went wrong'});
      }
}