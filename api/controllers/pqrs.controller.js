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
                textopqrs: body.textopqrs
            }
        ). save()
        res.status(200).json({message: savedPQRS})

    } catch (error) {
        res.status(400).json({message: 'something went wrong'});
    }
}