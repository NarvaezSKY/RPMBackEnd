import mongoose, {Schema} from "mongoose";

const Gas=new Schema({
        PrecioGas:{type:Number}
    })

export default mongoose.model('Gas', Gas)