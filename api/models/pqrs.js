import mongoose, { Schema } from "mongoose";

const PQRS= new Schema(
    {
        nombreusuario:{type: String},
        emailusuario:{type: String},
        asuntopqrs:{type: String},
        textopqrs:{type: String},
        estado:{type: String}
    },

    {timestamps: true}
)

export default mongoose.model('pqrs', PQRS)