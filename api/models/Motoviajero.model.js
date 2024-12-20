import mongoose, { Schema, model } from "mongoose";
import { boolean } from "zod";

const MotoviajeroSchema = new Schema(
  {
    Nombres_Mv: {
      type: String,
      require: true,
    },
    Apellidos_mv: {
      type: String,
      require: true,
    },
    Email_Mv: {
      type: String,
      require: true,
    },
    NumeroIdent_Mv: {
      type: Number,
      require: true,
    },
    FechaNac_Mv: {
      type: String,
      require: true,
    },
    Contraseña_Mv: {
      type: String,
      require: true,
    },
    NumeroTel_Mv: {
      type: Number,
    },
    ImageUser: {
      type: String,
    },
    Estado:{
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
  }
);

export default model("Motoviajero", MotoviajeroSchema);
