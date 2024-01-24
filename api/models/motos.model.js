import mongoose, { Schema } from "mongoose";

const Motos=new Schema(
    {
        MotoNombre:{type:String},
        MarcaMoto:{type:String},
        ModeloMoto:{type:Number},
        AñoMoto: {type: String},
        ConsumoMoto:{type:String},
        CilindrajeMoto:{type:String},
        FotoMoto:{type:String}
    } ,
    {
        timestamps:true
    } 

)

export default mongoose.model('Moto', Motos);