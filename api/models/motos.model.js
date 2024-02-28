import mongoose, { Schema } from "mongoose";

const Motos = new Schema(
  {
    MotoNombre: { type: String },
    MarcaMoto: { type: String },
    ModeloMoto: { type: String },
    VersionMoto: { type: Number },
    ConsumoMotoLx100km: { type: Number },
    CilindrajeMoto: { type: String },
    FotoMoto: { type: String },
    motoviajero: { type: Schema.Types.ObjectId, ref: "Motoviajero", required:true }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Moto", Motos);
