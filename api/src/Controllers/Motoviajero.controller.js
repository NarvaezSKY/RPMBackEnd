import Motoviajero from "../Models/Motoviajero.model.js";
import { createAccesToken } from "../Libs/jwt.js";
import bcrypt from "bcryptjs"

export const GetAllMotoviajeros= async(req,res)=>{

    try {
        const AllMotoviajeros= await Motoviajero.find()
        res.json(AllMotoviajeros)
    } catch (error) {
        console.log(error)
    }
}

export const RegisterMotoviajeros = async(req,res)=>{
    const {Nombres_Mv,Apellidos_Mv,Email_Mv,NumeroIdent_Mv,FechaNac_Mv,Contraseña_Mv,NumeroTel_Mv}= req.body
    
    try {
       
        const UserFound= await Motoviajero.findOne({ Email_Mv})
        if (UserFound) return res.status(404).json(["the email already exists"])
        const Passwordhash = await bcrypt.hash(Contraseña_Mv, 10);
        const newMotoviajero= new Motoviajero({
            Nombres_Mv,
            Apellidos_Mv,
            Email_Mv,
            NumeroIdent_Mv,
            FechaNac_Mv,
            Contraseña_Mv:Passwordhash,
            NumeroTel_Mv
        })

      
        const MotoviajeroSaved= await newMotoviajero.save();

        const token= await createAccesToken({id:MotoviajeroSaved._id})
        res.cookie("token",token)
        res.json({message:"usuario creado"})

    } catch (error) {
        console.log(error)
    }
}

export const LoginMotoviajero= async(req, res)=>{
    const {Email_Mv,Contraseña_Mv} = req.body

    try {
        const UserFound= Motoviajero.findOne({Email_Mv});
        if(!UserFound) return res.status(404).json({message:"user not found"});

        const IsMatch= await bcrypt.compare(Contraseña_Mv, UserFound.Contraseña_Mv)
        if (!IsMatch) return res.status(404).json({message:"incorrect password"});

        const token= await createAccesToken({id: UserFound._id});
        res.cookie("token",token)
        res.json({
            id:UserFound._id,
            Email_Mv: UserFound.Email_Mv,
            CreatedAt: UserFound.createdAt,
            UpdatedAt: UserFound.updatedAt,
        })
    } catch (error) {
        consolelog(error)
    }
}

export const Logout = async (req, res) =>{
    res.cookie("token","",{
        expires:new Date(0)
    }) 
    return res.sendStatus(200)
}

