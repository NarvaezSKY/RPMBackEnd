import mongoose, { Schema } from "mongoose";

const Admin= new Schema(
    {
        username:{type: String},
        password:{type: String}
    },

    {timestamps: true}
)

export default mongoose.model('Admin', Admin)