import Motoviajero from "../models/Motoviajero.model.js";

export const changePassword = async (req, res) => {
    const {email, cedula, cumpleaños} = req.body;

    const userExist=await Motoviajero.findOne({Email_Mv: email, NumeroIdent_Mv: cedula, FechaNac_Mv: cumpleaños});
    if(!userExist) return res.status(404).json({message: false});
    
    res.status(200).json({message:userExist._id})
}