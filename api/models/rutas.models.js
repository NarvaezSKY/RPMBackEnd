import mongoose, { Schema } from "mongoose";

const Rutas=new Schema(
    {
        NombreRuta:{type:String},
        PuntoInicioRuta:{type:String},
        PuntoFinalRuta:{type:String},
        KmTotalesRuta: {type:Number},
        PresupuestoGas: {type:Number}
    },
    {
        timestamps:true
    } 
)

export default mongoose.model('Ruta', Rutas);